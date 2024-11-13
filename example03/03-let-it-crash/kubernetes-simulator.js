const { spawn } = require('node:child_process');

const ISNTANCES = 3;

const prepareLog = pid => msg => console.log(`pid: [${process.pid}] - ${msg}`);

function spinUpInstance() {
  const cp = spawn('node', ['server-let-it-crash.js'])

  const log = prepareLog(cp.pid);

  log('starting...');
  cp.stdout.on('data', msg => console.log(msg.toString().trim()));
  cp.on('exit', (code) => {
    log(`Exited with code ${code}`);
    if (code === 0) {
      return;
    }

    spinUpInstance();
  });
}

for (let i = 0; i < ISNTANCES; i++) {
  spinUpInstance();
}