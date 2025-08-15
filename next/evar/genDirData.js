/**
 * Reads a directory tree recursively and outputs a JSON file
 * representing the directory and file structure.
 */

const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

/**
 * Creates a JSON file at the specified path with the provided data.
 * The script will create any necessary parent directories.
 * @param {string} filePath - The full path and filename for the JSON file (e.g., './output/data.json').
 * @param {object} data - The JavaScript object to be converted to JSON and written to the file.
 */
function createJsonFile(filePath, data) {
  try {
    const dirPath = path.dirname(filePath);

    // Check if the directory exists and create it recursively if it doesn't.
    if (!fs.existsSync(dirPath)) {
      console.log(`Creating directory: ${dirPath}`);
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // Convert the JavaScript object to a formatted JSON string with 2 spaces for indentation.
    const jsonString = JSON.stringify(data, null, 2);

    // Write the JSON string to the file synchronously.
    fs.writeFileSync(filePath, jsonString);

    console.log(`Successfully created JSON file at: ${filePath}`);
  } catch (error) {
    console.error(`Error creating JSON file: ${error.message}`);
  }
}

/**
 * Recursively reads a directory and builds a tree-like object.
 * @param {string} dirPath - The directory to read.
 * @returns {object} An object with 'name' and 'children' properties representing the directory tree.
 */
function readDirectoryTree(dirPath) {
  const name = path.basename(dirPath);

  if (name.startsWith('.')) return null;

  const stats = fs.statSync(dirPath);

  // If the path is not a directory, just return a simple object for the file.
  if (!stats.isDirectory()) {
    return { name };
  }

  // Read all items in the current directory.
  const children = fs.readdirSync(dirPath).map(item => {
    // Recursively call this function for each item to build the tree.
    const fullPath = path.join(dirPath, item);
    return readDirectoryTree(fullPath);
  }).filter(f => !!f);

  return { name, children };
}

/**
 * Creates a .zip archive of a given source directory.
 * @param {string} sourceDir - The path to the directory to archive.
 * @param {string} outputDir - The path where the output .zip file will be saved.
 * @param {string} archiveName - The name of the output .zip file (e.g., 'my-archive.zip').
 */
function createDirectoryArchive(sourceDir, outputDir, archiveName) {
  // Ensure the source directory exists
  if (!fs.existsSync(sourceDir)) {
    console.error(`Error: Source directory '${sourceDir}' does not exist.`);
    return;
  }

  // Ensure the output directory exists, or create it if it doesn't
  const outputFilePath = path.join(outputDir, archiveName);
  const outputDirPath = path.dirname(outputFilePath);
  if (!fs.existsSync(outputDirPath)) {
    console.log(`Creating output directory: ${outputDirPath}`);
    fs.mkdirSync(outputDirPath, { recursive: true });
  }

  // Create a write stream to the output file
  const output = fs.createWriteStream(outputFilePath);
  const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level
  });

  // Handle archive events for logging
  output.on('close', () => {
    console.log(`Archive created successfully: ${archive.pointer()} total bytes`);
    console.log(`Archive file saved at: ${outputFilePath}`);
  });

  archive.on('error', (err) => {
    throw err;
  });

  // Pipe the archive output to the file stream
  archive.pipe(output);

  // Append the source directory and name it after the directory
  archive.directory(sourceDir, path.basename(sourceDir));

  // Finalize the archive
  archive.finalize();
}

// --- Use ---

const sourceDirectory = './public/PressKit';
const outputPath = './dirData.json';
const outputDirectory = './public';
const archiveFileName = 'PressKit.zip';

const directoryTree = readDirectoryTree(sourceDirectory);
createJsonFile(outputPath, directoryTree);

console.log(`\nDirectory tree JSON created for: ${sourceDirectory}`);

createDirectoryArchive(sourceDirectory, outputDirectory, archiveFileName);
