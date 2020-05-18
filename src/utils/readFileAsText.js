/**
 * Reads the content of a File as text using FileReader.
 * @param  {File} file   File to read.
 * @param  {Function} onload Handler for when the file is loaded.
 * @return {FileReader}        The FileReader used for reading.
 */
export default function readFileAsText(file, onload) {
  const reader = new FileReader();
  reader.onload = onload;
  reader.readAsText(file);
  return reader;
}

/**
 * Reads the content of a File as text using FileReader and parsing it using promise .
 * @param  {File} file   File to read.
 * @return {Promise}
 */
export function PromiseReadFileAsTextAndParse(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(JSON.parse(reader.result));
    reader.onerror = reject;
    reader.readAsText(file);
  });
}
