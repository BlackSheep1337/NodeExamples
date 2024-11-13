import fs from 'node:fs';

try {
    await new Promise((reject, resolve) => {    
      fs.readFile(
        'not-found.txt',
        (err, result) => err ? reject(err) : resolve(result)
      );
    });
} catch (error) {
  console.log('nunca é chamado!', error);
}