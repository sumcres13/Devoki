const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'SOURCE_MANIFEST.json'), 'utf8'));
let failures = 0;
for (const entry of manifest.files) {
  try {
    const bytes = fs.readFileSync(path.join(root, entry.repositoryPath));
    const hash = crypto.createHash('sha256').update(bytes).digest('hex');
    if (bytes.length !== entry.bytes || hash !== entry.sha256) {
      console.error(`Changed: ${entry.repositoryPath}`); failures++;
    }
  } catch {
    console.error(`Missing: ${entry.repositoryPath}`); failures++;
  }
}
if (failures) { console.error(`${failures} source files differ from the original import.`); process.exitCode = 1; }
else console.log(`Verified ${manifest.files.length} original source files byte for byte.`);
