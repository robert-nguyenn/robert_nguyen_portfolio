const fs = require('fs');
const readline = require('readline');
const { execSync } = require('child_process');

const CATGIFS_PATH = './src/app/jokes.ts';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let newGifs = [];

function askForGif() {
  rl.question('Enter a cat gif URL (or just press enter to finish): ', (answer) => {
    if (!answer.trim()) {
      rl.close();
      appendGifs();
      return;
    }
    newGifs.push(answer.trim());
    askForGif();
  });
}

function appendGifs() {
  let file = fs.readFileSync(CATGIFS_PATH, 'utf8');
  // Find the catGifs array and append new URLs
  file = file.replace(
    /(const\s+catGifs\s*=\s*\[)([\s\S]*?)(\];)/,
    (match, start, middle, end) => {
      const existing = middle.trim() ? middle.trim().replace(/\s*,\s*$/, '') + ',' : '';
      const additions = newGifs.map(url => `  "${url}"`).join(',\n');
      return `${start}\n${existing}\n${additions}\n${end}`;
    }
  );
  fs.writeFileSync(CATGIFS_PATH, file, 'utf8');
  console.log('Cat gifs added!');

  // Git add, commit, push
  try {
    execSync('git add ' + CATGIFS_PATH, { stdio: 'inherit' });
    execSync('git commit -m "Add new cat gifs"', { stdio: 'inherit' });
    execSync('git push', { stdio: 'inherit' });
    console.log('Changes committed and pushed!');
  } catch (err) {
    console.error('Git error:', err.message);
  }
}

askForGif(); 