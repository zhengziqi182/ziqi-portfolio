const fs = require('fs');
const html = fs.readFileSync('puppeteer_output.txt', 'utf8');
const match = html.match(/poster="([^"]+)"/);
if (match) {
  console.log(match[1]);
}
