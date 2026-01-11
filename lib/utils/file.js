import fs from 'fs';

export function createDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

export function createFile(filePath, content) {
  fs.writeFileSync(filePath, content);
}
