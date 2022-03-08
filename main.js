import WorkerPool from './worker_pool.js';
import os from 'os';

const start_time = new Date().getTime();
const pool = new WorkerPool(os.cpus().length);
const concurrency = 5;

console.log(`${new Date().toISOString()}: Starting. Concurrency is ${concurrency}.`);
let finish = 0;
try {
  for (let i = 0; i < concurrency; i++) {
    pool.runTask({ i }, (err, result) => {
      if (err) {
        throw new Error(err);
      }

      const fields = result.output;
      console.log(`${new Date().toISOString()}: #${i} Done (${fields} fields).`);

      if (++finish == concurrency) {
        pool.close();
        console.log(`${new Date().toISOString()}: Done all.`);
        const end_time = new Date().getTime();
        console.log(`${new Date().toISOString()}: Total time: ${end_time - start_time}ms`);
      }
    });
  }
} catch (error) {
  console.log(`Error in loop: ${error}`);
}
