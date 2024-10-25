// format-html.js
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const filePath = path.join(__dirname, 'docs', 'index.html');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const formatted = prettier.format(data, { parser: 'html' });

  fs.writeFile(filePath, formatted, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Formatted index.html');
  });
});
