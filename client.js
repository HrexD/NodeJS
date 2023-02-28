const http = require('http');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a message: ', (message) => {
  const url = `http://localhost:3000/cowsay?msg=${encodeURIComponent(message)}`;

  http.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      console.log(data);
      rl.close();
    });
  }).on('error', (err) => {
    console.error(`Error: ${err.message}`);
    rl.close();
  });
});
