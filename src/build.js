// build.js — 生成单文件 Argon2id 花密
// 用法: node build.js
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const wasmJs = fs.readFileSync(path.join(dir, 'argon2.umd.min.js'), 'utf8');
const template = fs.readFileSync(path.join(dir, 'template.html'), 'utf8');

const finalHtml = template.replace('/*__HASH_WASM_INLINE__*/', wasmJs);
const outPath = path.join(dir, 'flower-password-argon2.html');
fs.writeFileSync(outPath, finalHtml, 'utf8');
console.log('生成完成:', outPath);
console.log('大小:', (finalHtml.length / 1024).toFixed(1), 'KB');
