import { readFileSync } from 'fs';
import { resolve } from 'path';

const target_file_name = resolve("./data.json");

const readAndParse = (data) => {
  console.log(`${new Date().toISOString()}: # ${data.i} Reading file...`);
  const file = readFileSync(target_file_name);
  const parsedJson = JSON.parse(file);

  return Object.keys(parsedJson).length;
}

export { readAndParse }