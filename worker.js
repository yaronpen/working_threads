import { parentPort } from "worker_threads";
import { readAndParse } from './index.js';

parentPort.on("message", data => {
  const result = readAndParse(data);

  parentPort.postMessage({ output: result });
});


