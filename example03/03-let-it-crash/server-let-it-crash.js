
const UNKOWN_ERROR = 1;

const knownErros = [
  { exitCode: UNKOWN_ERROR, event: 'uncaughtException' },
  { exitCode: UNKOWN_ERROR, event: 'unhandleRejection' },
];

const log = msg => console.log(`pid: [${process.pid}] - ${msg}`);

process.on('exit', (code) => {

  log(`Server closed with success`);
  log(`DB closed with success`);

  process.exit(code);
});

knownErros.forEach(({ exitCode, event }) => {
  process.on(event, (error) => {
    log(`Process exiting due to ${event}`, error.message)
    if (exitCode == UNKOWN_ERROR) {
      // process.abort()
      process.exit(exitCode);
      return;
    }
  });
});

log('Process started')

let count = 0;
const connectToDB = async () => {
  const randNumber = Math.random();
  if (randNumber < 0.5) {
    return Promise.reject('Could not connect to DB');
  }

  log('DB connected with success');
  if (++count > 3) process.exit(0);
}

setInterval(() => connectToDB(), 200);