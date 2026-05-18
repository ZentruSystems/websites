// Musical Core Data Maps for Key Analysis
const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const MAJOR_PROFILE = [6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29, 2.88];
const MINOR_PROFILE = [6.33, 2.68, 3.52, 5.38, 2.60, 3.53, 2.54, 4.75, 3.98, 2.69, 3.34, 3.17];

export function detectBpm(pcmData: Float32Array, sampleRate: number): number | null {
	let peakCount = 0;
	const threshold = 0.7;
	const sampleWindow = Math.floor(sampleRate * 0.25);

	for (let i = 0; i < pcmData.length; i++) {
		if (Math.abs(pcmData[i]) > threshold) {
			peakCount++;
			i += sampleWindow;
		}
	}

	let computedBpm = Math.round((peakCount / 30) * 60);
	if (computedBpm < 65) computedBpm *= 2;
	if (computedBpm > 180) computedBpm = Math.round(computedBpm / 2);

	if (computedBpm === 0) return null;

	return computedBpm;
}

export function generatePitchMap(): number[][] {
	const pitchMap: number[][] = Array.from({ length: 12 }, () => []);
	for (let note = 0; note < 12; note++) {
		for (let octave = 3; octave <= 6; octave++) {
			const midi = note + (octave + 1) * 12;
			pitchMap[note].push(440 * Math.pow(2, (midi - 69) / 12));
		}
	}
	return pitchMap;
}

export function detectKey(chromagram: number[]): { key: string; score: number } {
	let maxScore = -1;
	let detectedKey = 'C';
	const maxChroma = Math.max(...chromagram) || 1;
	const normalizedChroma = chromagram.map(v => v / maxChroma);

	for (let shift = 0; shift < 12; shift++) {
		const shifted = [...normalizedChroma.slice(shift), ...normalizedChroma.slice(0, shift)];

		const majScore = getPearsonCorrelation(shifted, MAJOR_PROFILE);
		if (majScore > maxScore) {
			maxScore = majScore;
			detectedKey = NOTE_NAMES[shift];
		}

		const minScore = getPearsonCorrelation(shifted, MINOR_PROFILE);
		if (minScore > maxScore) {
			maxScore = minScore;
			detectedKey = `${NOTE_NAMES[shift]}m`;
		}
	}

	return { key: detectedKey, score: maxScore };
}

export function detectGenre(
	bandanalysis: BandAnalysis
): [string, string] {
	const {
		bassEnergy,
		midsEnergy,
		highsEnergy,
		amplitudeEnergy,
		bassRhythm,
		midsRhythm,
		highsRhythm,
	} = bandanalysis;

	if (bassEnergy + midsEnergy + highsEnergy === 0) return ['Ambient', 'Calm'];

	// Normalize energies
	const totalFreqEnergy = bassEnergy + midsEnergy + highsEnergy;
	const bassPercent = bassEnergy / totalFreqEnergy;
	const midsPercent = midsEnergy / totalFreqEnergy;
	const highsPercent = highsEnergy / totalFreqEnergy;

	// Calculate spectral ratio (bass vs highs)
	const spectralRatio = bassEnergy / (highsEnergy || 1);

	// Calculate rhythm intensity
	const avgRhythm = (bassRhythm + midsRhythm + highsRhythm) / 3;

	// Calculate variance in rhythm (chaos indicator for jazz)
	const rhythmVariance = Math.abs(bassRhythm - midsRhythm) + Math.abs(midsRhythm - highsRhythm);

	console.log({
		bassEnergy,
		midsEnergy,
		highsEnergy,
		amplitudeEnergy,
		bassPercent,
		midsPercent,
		highsPercent,
		spectralRatio,
		bassRhythm,
		midsRhythm,
		highsRhythm,
		avgRhythm,
		rhythmVariance,
	});

	// BASE GENRES (4 main categories)

	// 0. AMBIENT - Very calm, low rhythm, minimal highs, ultra-high spectral ratio
	if (avgRhythm < 0.12 && spectralRatio > 500 && highsPercent < 0.005 && bassEnergy < 1500) {
		return ['Ambient', 'Calm'];
	}

	// 1. CLASSIC - Low spectral ratio, high clarity, smooth rhythm
	if (spectralRatio < 0.48 && highsPercent > 0.35 && avgRhythm < 0.15) {
		const detailed = midsPercent > 0.4 ? 'Orchestra' : 'Piano';
		return ['Classic', detailed];
	}

	// 2. ELECTRONIC - High bass-to-highs ratio with moderate rhythm (synths, beats, electronic sounds)
	if (bassPercent > 0.85 && avgRhythm < 0.21 && spectralRatio > 50) {
		const detailed = avgRhythm < 0.12 ? 'Ambient' : 'Electronic';
		return ['Electronic', detailed];
	}

	// 3. ROCK - Extreme bass presence WITH strong rhythm across bands
	// High bass + aggressive rhythm patterns
	if (bassPercent > 0.85 && avgRhythm > 0.21 && (bassRhythm > 0.22 || midsRhythm > 0.2)) {
		const detailed = avgRhythm < 0.22 && midsPercent < 0.33 ? 'Blues' : 'Rock';
		return ['Rock', detailed];
	}

	// 4. JAZZ - Chaotic rhythm patterns, varied frequency distribution, higher rhythmic variance
	if (rhythmVariance > 0.2 && avgRhythm > 0.15 && spectralRatio < 50) {
		const detailed = rhythmVariance > 0.35 && midsRhythm > 0.25 ? 'Free Jazz' : 'Light Jazz';
		return ['Jazz', detailed];
	}

	// Secondary classification: ELECTRONIC emphasis (high bass dominance, moderate rhythm)
	if (bassPercent > 0.8 && avgRhythm < 0.21 && spectralRatio > 50) {
		const detailed = avgRhythm < 0.12 ? 'Ambient' : 'Electronic';
		return ['Electronic', detailed];
	}

	// Secondary classification: ROCK emphasis (extreme bass + strong individual band rhythm)
	if (bassPercent > 0.8 && (bassRhythm > 0.25 || midsRhythm > 0.22)) {
		return ['Rock', 'Rock'];
	}

	// Secondary classification: JAZZ emphasis (rhythmic complexity, but not extreme bass)
	if (rhythmVariance > 0.18 && avgRhythm > 0.15 && midsPercent > 0.31 && spectralRatio < 50) {
		return ['Jazz', 'Light Jazz'];
	}

	// Secondary classification: ELECTRONIC emphasis (balanced but synthetic)
	if (bassPercent > 0.33 && midsPercent > 0.33 && avgRhythm > 0.2 && spectralRatio < 50) {
		const detailed = midsPercent > 0.35 ? 'Pop' : 'Electronic';
		return ['Electronic', detailed];
	}

	// Secondary classification: JAZZ emphasis (rhythmic complexity, but not extreme bass)
	if (rhythmVariance > 0.18 && avgRhythm > 0.15 && midsPercent > 0.31 && spectralRatio < 50) {
		return ['Jazz', 'Light Jazz'];
	}

	// Fallback based on strongest characteristic
	if (bassPercent > 0.85) return ['Electronic', 'Electronic'];
	if (avgRhythm < 0.12 && spectralRatio > 500) return ['Ambient', 'Calm'];
	if (bassPercent > 0.8) return ['Rock', 'Rock'];
	if (bassPercent > 0.34) return ['Electronic', 'Electronic'];
	if (highsPercent > 0.38) return ['Rock', 'Rock'];
	if (midsPercent > 0.38) return ['Jazz', 'Light Jazz'];

	return ['Electronic', 'Pop'];
}

function detectRhythmicEnergy(frame: Float32Array, sampleRate: number, freqRange: { low: number; high: number }): number {
	let energy = 0;
	const frameSize = frame.length;

	// Sample key frequencies in the range to detect rhythmic patterns
	const freqStep = (freqRange.high - freqRange.low) / 5;
	for (let freq = freqRange.low; freq <= freqRange.high; freq += freqStep) {
		energy += goertzelMagnitude(frame, freq, sampleRate);
	}

	return energy / 5; // Average energy in frequency band
}

export type BandAnalysis = {
	bassEnergy: number;
	midsEnergy: number;
	highsEnergy: number;
	amplitudeEnergy: number;
	bassRhythm: number;
	midsRhythm: number;
	highsRhythm: number;
};

export function analyzeFrequencyBands(pcmData: Float32Array, sampleRate: number): BandAnalysis {
	const frameSize = 2048;
	let bassEnergy = 0;
	let midsEnergy = 0;
	let highsEnergy = 0;
	let amplitudeEnergy = 0;
	let bassRhythm = 0;
	let midsRhythm = 0;
	let highsRhythm = 0;
	let frameCount = 0;

	// Frequency ranges
	const bassRange = { low: 20, high: 250 };      // Bass/Kick
	const midsRange = { low: 250, high: 2000 };    // Mids
	const highsRange = { low: 2000, high: 10000 }; // Highs/Presence

	for (let offset = 0; offset < pcmData.length - frameSize; offset += frameSize * 2) {
		const frame = pcmData.subarray(offset, offset + frameSize);
		frameCount++;

		// Amplitude-based energy (time-domain)
		for (let j = 0; j < frame.length; j++) {
			amplitudeEnergy += Math.abs(frame[j]);
		}

		// Frequency-specific energy detection with rhythmic analysis
		const bass = detectRhythmicEnergy(frame, sampleRate, bassRange);
		const mids = detectRhythmicEnergy(frame, sampleRate, midsRange);
		const highs = detectRhythmicEnergy(frame, sampleRate, highsRange);

		bassEnergy += bass;
		midsEnergy += mids;
		highsEnergy += highs;

		// Detect rhythm peaks in each band (sharp energy increases = rhythm)
		if (bass > bassEnergy / frameCount * 1.5) bassRhythm++;
		if (mids > midsEnergy / frameCount * 1.5) midsRhythm++;
		if (highs > highsEnergy / frameCount * 1.5) highsRhythm++;
	}

	// Normalize by frame count
	bassEnergy /= frameCount;
	midsEnergy /= frameCount;
	highsEnergy /= frameCount;
	amplitudeEnergy /= frameCount;

	return {
		bassEnergy,
		midsEnergy,
		highsEnergy,
		amplitudeEnergy,
		bassRhythm: bassRhythm / frameCount,
		midsRhythm: midsRhythm / frameCount,
		highsRhythm: highsRhythm / frameCount
	};
}

//#region Heavy lifting (maths)
export function getPearsonCorrelation(x: number[], y: number[]): number {
	const n = x.length;
	let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0;
	for (let i = 0; i < n; i++) {
		sumX += x[i];
		sumY += y[i];
		sumXY += x[i] * y[i];
		sumX2 += x[i] * x[i];
		sumY2 += y[i] * y[i];
	}
	const num = n * sumXY - sumX * sumY;
	const den = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));
	return den === 0 ? 0 : num / den;
}

export function goertzelMagnitude(samples: Float32Array, targetFreq: number, sampleRate: number): number {
	const k = Math.round((samples.length * targetFreq) / sampleRate);
	const w = (2 * Math.PI * k) / samples.length;
	const cosine = Math.cos(w);
	const coeff = 2 * cosine;

	let q0 = 0, q1 = 0, q2 = 0;
	for (let i = 0; i < samples.length; i++) {
		q0 = coeff * q1 - q2 + samples[i];
		q2 = q1;
		q1 = q0;
	}
	const magnitude = q1 * q1 + q2 * q2 - q1 * q2 * coeff;
	return isNaN(magnitude) || magnitude < 0 ? 0 : magnitude;
}

function createMelFilterbank(numFilters: number, sampleRate: number, fftSize: number): number[][] {
	const nyquist = sampleRate / 2;
	const lowFreq = 0;
	const highFreq = nyquist;

	const lowMel = 2595 * Math.log10(1 + lowFreq / 700);
	const highMel = 2595 * Math.log10(1 + highFreq / 700);

	const melPoints = Array.from({ length: numFilters + 2 }, (_, i) =>
		lowMel + (i / (numFilters + 1)) * (highMel - lowMel)
	);

	const hzPoints = melPoints.map(mel => 700 * (Math.pow(10, mel / 2595) - 1));
	const binPoints = hzPoints.map(hz => Math.floor((fftSize + 1) * hz / sampleRate));

	const filterbank: number[][] = [];
	for (let i = 1; i < numFilters + 1; i++) {
		const filter = new Array(fftSize / 2 + 1).fill(0);
		const leftBin = binPoints[i - 1];
		const centerBin = binPoints[i];
		const rightBin = binPoints[i + 1];

		for (let j = leftBin; j < centerBin; j++) {
			filter[j] = (j - leftBin) / (centerBin - leftBin);
		}
		for (let j = centerBin; j < rightBin; j++) {
			filter[j] = (rightBin - j) / (rightBin - centerBin);
		}
		filterbank.push(filter);
	}

	return filterbank;
}

function computeFFT(samples: Float32Array): number[] {
	const n = samples.length;
	if (n <= 1) return Array.from(samples);

	const magnitudes: number[] = new Array(n / 2 + 1).fill(0);

	for (let k = 0; k <= n / 2; k++) {
		let realPart = 0, imaginaryPart = 0;
		for (let t = 0; t < n; t++) {
			const angle = (-2 * Math.PI * k * t) / n;
			realPart += samples[t] * Math.cos(angle);
			imaginaryPart += samples[t] * Math.sin(angle);
		}
		magnitudes[k] = Math.sqrt(realPart * realPart + imaginaryPart * imaginaryPart);
	}

	return magnitudes;
}

function computeMelSpectrogram(pcmData: Float32Array, sampleRate: number): number[][] {
	const fftSize = 2048;
	const hopLength = 512;
	const numMelBands = 128;
	const melSpectrogram: number[][] = [];

	const melFilterbank = createMelFilterbank(numMelBands, sampleRate, fftSize);

	for (let offset = 0; offset < pcmData.length - fftSize; offset += hopLength) {
		const frame = pcmData.subarray(offset, offset + fftSize);

		// Apply Hann window
		const hannWindow = new Float32Array(fftSize);
		for (let i = 0; i < fftSize; i++) {
			hannWindow[i] = 0.5 * (1 - Math.cos((2 * Math.PI * i) / (fftSize - 1)));
			frame[i] *= hannWindow[i];
		}

		// Compute magnitude spectrum
		const magnitudes = computeFFT(frame);

		// Apply mel filterbank
		const melBands = melFilterbank.map(filter =>
			Math.log(
				filter.reduce((sum, weight, i) => sum + weight * (magnitudes[i] || 0), 0) + 1e-9
			)
		);

		melSpectrogram.push(melBands);
	}

	return melSpectrogram;
}

function extractAudioFeatures(
	pcmData: Float32Array,
	sampleRate: number,
	melSpectrogram: number[][]
): number[] {
	const frameSize = 2048;
	const features: number[] = [];

	let lowEnergy = 0;
	let highEnergy = 0;
	let spectralCentroid = 0;
	let zeroCrossingRate = 0;
	let frameCount = 0;

	for (let offset = 0; offset < pcmData.length - frameSize; offset += frameSize * 4) {
		const frame = pcmData.subarray(offset, offset + frameSize);
		frameCount++;

		// Energy bands
		for (let j = 0; j < frame.length; j++) {
			const absVal = Math.abs(frame[j]);
			if (j < frame.length * 0.1) lowEnergy += absVal;
			if (j > frame.length * 0.8) highEnergy += absVal;
		}

		// Zero crossing rate
		for (let j = 1; j < frame.length; j++) {
			if ((frame[j] > 0 && frame[j - 1] < 0) || (frame[j] < 0 && frame[j - 1] > 0)) {
				zeroCrossingRate++;
			}
		}

		// Spectral centroid
		let magnitude = 0;
		for (let j = 0; j < frame.length; j++) {
			magnitude += Math.abs(frame[j]);
		}
		spectralCentroid += magnitude;
	}

	// Normalize features
	const avgLowEnergy = lowEnergy / frameCount;
	const avgHighEnergy = highEnergy / frameCount;
	const spectralRatio = avgLowEnergy / (avgHighEnergy || 1);
	const avgZeroCrossingRate = zeroCrossingRate / frameCount;
	const avgSpectralCentroid = spectralCentroid / frameCount;

	// Compute mel spectrogram statistics
	const melMean = melSpectrogram[0]?.map((_, i) =>
		melSpectrogram.reduce((sum, frame) => sum + (frame[i] || 0), 0) / melSpectrogram.length
	) || [];

	features.push(spectralRatio);
	features.push(avgLowEnergy);
	features.push(avgHighEnergy);
	features.push(avgSpectralCentroid);
	features.push(avgZeroCrossingRate);
	features.push(...melMean.slice(0, 32)); // Use first 32 mel bands for dimensionality reduction

	return features;
}

function normalizeFeatures(features: number[]): number[] {
	const mean = features.reduce((a, b) => a + b, 0) / features.length;
	const variance = features.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / features.length;
	const std = Math.sqrt(variance) || 1;

	return features.map(val => (val - mean) / std);
}
//#endregion