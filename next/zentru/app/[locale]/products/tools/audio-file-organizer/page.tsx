'use client';

import Section from '@/app/Section';
import React, { useEffect, useRef, useState } from 'react';
import { detectBpm, detectKey, generatePitchMap, goertzelMagnitude } from './analyze';

type WebAudioBeatDetectorType = {
	default: typeof import("/Users/trufelix/repos/zentru-website/next/node_modules/.pnpm/web-audio-beat-detector@8.2.36/node_modules/web-audio-beat-detector/build/es2019/module");
	guess: (...args: any) => Promise<{
		bpm: number;
		offset: number;
	}>;
};

// helpers
function createDownloadTrigger(url: string, fileName: string): void {
	const anchor = document.createElement('a');
	anchor.href = url;
	anchor.download = fileName;
	document.body.appendChild(anchor);
	anchor.click();
	document.body.removeChild(anchor);
	URL.revokeObjectURL(url);
}

async function downloadSingleFile(file: File, finalFileName: string): Promise<void> {
	const blobUrl = URL.createObjectURL(file);
	createDownloadTrigger(blobUrl, finalFileName);
}

async function downloadZippedFiles(zipContents: Record<string, Uint8Array>): Promise<void> {
	const { zip } = await import('fflate');

	const zippedPayload = await new Promise<Uint8Array>((resolve, reject) => {
		zip(zipContents, (error, dataset) => {
			if (error) reject(error);
			else resolve(dataset);
		});
	});

	const archiveBlob = new Blob([zippedPayload as any], { type: 'application/zip' });
	const blobUrl = URL.createObjectURL(archiveBlob);
	createDownloadTrigger(blobUrl, `analyzed_tracks_${Date.now()}.zip`);
}

async function extractFilesFromDataTransfer(items: DataTransferItemList): Promise<Array<{ file: File; path: string }>> {
	const files: Array<{ file: File; path: string }> = [];

	async function traverseFileTree(item: FileSystemEntry, path: string = ''): Promise<void> {
		if (item.isFile) {
			const fileEntry = item as FileSystemFileEntry;
			const file = await new Promise<File>((resolve, reject) => {
				fileEntry.file(resolve, reject);
			});
			files.push({ file, path: path ? `${path}/${file.name}` : file.name });
		} else if (item.isDirectory) {
			const dirEntry = item as FileSystemDirectoryEntry;
			const reader = dirEntry.createReader();
			const entries = await new Promise<FileSystemEntry[]>((resolve, reject) => {
				reader.readEntries(resolve, reject);
			});
			for (const entry of entries) {
				await traverseFileTree(entry, path ? `${path}/${item.name}` : item.name);
			}
		}
	}

	for (let i = 0; i < items.length; i++) {
		const item = items[i].webkitGetAsEntry();
		if (item) {
			await traverseFileTree(item);
		}
	}

	return files;
}

export default function AudioAnalyzerPage() {
	const [template, setTemplate] = useState('#NAME_#BPMbpm_#KEY');
	const [status, setStatus] = useState("Loading...");
	const [statusColor, setStatusColor] = useState('');
	const [progress, setProgress] = useState(0);
	const [isDragOver, setIsDragOver] = useState(false);
	const webAudioBeatDetector = useRef<WebAudioBeatDetectorType | undefined>(undefined);
	// const classifier = useRef<AudioClassificationPipeline | undefined>(undefined);
	// const tf = useRef<typeof import("@tensorflow/tfjs") | undefined>(undefined);
	// const tfModel = useRef<LayersModel | undefined>(undefined);

	useEffect(() => {
		async function bootup() {
			setStatus("Loading detection enhancing algorithms...");
			try {
				webAudioBeatDetector.current = await import('web-audio-beat-detector') as any;
				setStatus('System Ready. Drop audio files to begin.');
			} catch (err) {
				setStatus('Ready with native fallback tools.');
				console.warn("Failed to load web-audio-beat-detector dynamically:", err);
			}

			// try {

			// 	const { pipeline, env } = await import('@huggingface/transformers');
			// 	// Critical: don't use local fs
			// 	env.allowLocalModels = false;
			// 	env.useBrowserCache = true;

			// 	// Instantiates a specialized pipeline using a pre-trained music classification architecture
			// 	const tmp = await pipeline('audio-classification', "onnx-community/Musical-genres-Classification-Hubert-V1-ONNX");
			// 	classifier.current = tmp;
			// 	console.info("success");
			// } catch (err) {
			// 	console.info("fuck");
			// 	console.error(err);
			// }

		}
		bootup();
	}, []);

	// Pure Web Audio Data Analysis
	async function analyzeAudioFile(file: File) {
		const sampleRate = 44100;
		const arrayBuffer = await file.arrayBuffer();

		// Analyze the first 20MB of the file for precise sampling without memory leaks
		const dataSlice = arrayBuffer.slice(0, 20 * 1024 * 1024);
		const offlineCtx = new OfflineAudioContext(1, sampleRate * 30, sampleRate);
		const audioBuffer = await offlineCtx.decodeAudioData(dataSlice);
		const pcmData = Float32Array.from(audioBuffer.getChannelData(0));

		console.log(pcmData.length)

		// 1. BPM Extraction
		let computedBpm = detectBpm(pcmData, sampleRate);

		// 2. Frequency Spectrum Analysis (Key & Genre)
		const chromagram = new Array(12).fill(0);
		const frameSize = 2048;
		const pitchMap = generatePitchMap();

		for (let offset = 0; offset < pcmData.length - frameSize; offset += frameSize * 4) {
			const frame = pcmData.subarray(offset, offset + frameSize);

			// Map Chromagram density
			for (let note = 0; note < 12; note++) {
				for (const freq of pitchMap[note]) {
					chromagram[note] += goertzelMagnitude(frame, freq, sampleRate);
				}
			}
		}

		// Correlate Key Signature
		const { key: computedKey } = detectKey(chromagram);

		// // Analyze frequency bands with rhythmic detection
		// const bandAnalysis = analyzeFrequencyBands(pcmData, sampleRate);

		// console.log("\n\n");
		// console.log(file.name);
		// console.log({
		// 	bassEnergy: bandAnalysis.bassEnergy,
		// 	midsEnergy: bandAnalysis.midsEnergy,
		// 	highsEnergy: bandAnalysis.highsEnergy,
		// 	amplitudeEnergy: bandAnalysis.amplitudeEnergy,
		// 	bassRhythm: bandAnalysis.bassRhythm,
		// 	midsRhythm: bandAnalysis.midsRhythm,
		// 	highsRhythm: bandAnalysis.highsRhythm,
		// });

		// // Genre Detection using frequency analysis
		// const computedGenre = detectGenre(bandAnalysis);

		// Try enhanced BPM detection
		// last, as it uses up the audioBuffer
		try {
			const enhancedGuess = await webAudioBeatDetector.current?.guess(audioBuffer);
			computedBpm = enhancedGuess?.bpm || computedBpm;
		} catch (bpmError) {
			console.warn("Enhanced BPM detection failed: ", bpmError);
		}

		if (!!computedBpm) {
			computedBpm = Math.round(computedBpm);
		}

		// try {
		// 	setStatus("Extracting audio data...");

		// 	const ai_targetSampleRate = 16000;
		// 	const ai_offlineCtx = new OfflineAudioContext(1, ai_targetSampleRate * 1, ai_targetSampleRate);
		// 	const ai_audioBuffer = await ai_offlineCtx.decodeAudioData(arrayBuffer.slice(0, 20 * 1024 * 1024));
		// 	const ai_pcmData = ai_audioBuffer.getChannelData(0);

		// 	setStatus("Running inference...");
		// 	const output = await classifier.current(ai_pcmData);

		// 	setStatus(`Detected Genre: ${output[0].label}`);
		// 	computedGenre = output[0].label;
		// } catch (err: any) {
		// 	setStatus(`Error: ${err.message}`);
		// } finally {
		// 	// Cleanup
		// 	try {
		// 		ai_offlineCtx.close();
		// 	} catch (err) {
		// 		console.warn(err);
		// 	}
		// }

		return {
			name: file.name.replace(/\.[^/.]+$/, ''),
			bpm: computedBpm || "xx",
			key: computedKey,
			// tags: computedGenre,
			ext: file.name.split('.').pop() || 'mp3'
		};
	}

	// Drag and Drop Event Actions
	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragOver(true);
	};

	const handleDragLeave = () => {
		setIsDragOver(false);
	};

	// Drag and Drop Processing Loop
	const handleDrop = async (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragOver(false);

		const filesWithPaths = await extractFilesFromDataTransfer(e.dataTransfer.items);
		const audioFiles = filesWithPaths.filter(({ file }) => file.type.startsWith('audio/'));

		if (audioFiles.length === 0) return;

		const zipContents: Record<string, Uint8Array> = {};

		try {
			for (let i = 0; i < audioFiles.length; i++) {
				const { file, path: originalPath } = audioFiles[i];
				setStatusColor('');
				setStatus(`Analyzing [${i + 1}/${audioFiles.length}]: ${file.name}`);
				setProgress((i / audioFiles.length) * 100);

				const stats = await analyzeAudioFile(file);

				const newName = template
					.replace('#NAME', stats.name)
					.replace('#BPM', stats.bpm.toString())
					.replace('#KEY', stats.key)
				// .replace('#TAGS', stats.tags);

				const finalFileName = `${newName}.${stats.ext}`;
				const folderPath = originalPath.substring(0, originalPath.lastIndexOf('/'));
				const finalPath = folderPath ? `${folderPath}/${finalFileName}` : finalFileName;

				if (audioFiles.length === 1) {
					await downloadSingleFile(file, finalFileName);
				} else {
					const rawBuffer = await file.arrayBuffer();
					zipContents[finalPath] = new Uint8Array(rawBuffer);
				}

				setProgress(((i + 1) / audioFiles.length) * 100);
			}

			// Handle batch downloads
			if (audioFiles.length > 1) {
				setStatusColor('');
				setStatus('zipping...');
				await downloadZippedFiles(zipContents);
			}

			setStatus('All tracks processed! Ready for the next!');
			setStatusColor('success');
		} catch (err: any) {
			setStatus(`Processing failed: ${err.message}`);
			setStatusColor('error');
			setProgress(0);
		}
	};

	const fieldFontSize = "17px";

	return (
		<Section
			keepSized={true}
			title="Audio File Organizer"
		>
			<p>
				This tool will analyze your music files, and return you with renamed files according to the defined template.
				It is built for use on desktop computer, but should work on mobile as well.
			</p>
			<br />
			<div>
				<label>Naming template</label>
				<input
					type="text"
					value={template}
					onChange={(e) => setTemplate(e.target.value)}
					className='code'
					placeholder="#NAME_#BPM_#KEY"
					style={{ minWidth: "260px" }}
				/>
				<p style={{ lineHeight: "1.8em" }}>
					Variables: <span className="field code" style={{ fontSize: fieldFontSize }}>#NAME</span>, <span className="field code" style={{ fontSize: fieldFontSize }}>#BPM</span> (Detected), <span className="field code" style={{ fontSize: fieldFontSize }}>#KEY</span> (Detected)
					{/* , <span className="field code" style={{ fontSize: fieldFontSize }}>#TAGS</span> (Detected Genre) */}
				</p>
			</div>

			<div
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
				onDrop={handleDrop}
				style={{ height: 150, padding: 15, border: `1px solid ${isDragOver ? 'var(--l3)' : 'var(--l4)'}`, justifyContent: "center" }}
				className={`flex allRound vMarg`}
			>
				<p className="hCenter vCenter">Drop Files to Begin Local Processing</p>
			</div>

			<p className={`code fg-${statusColor}`}>{status}</p>
			<div className={`fill allRound bg-l2 liquidAll bg-${statusColor}`} style={{ backgroundColor: statusColor, width: `${progress != 0 ? Math.max(progress, 3) : 0}%`, height: "10px" }} />
		</Section>
	);
}