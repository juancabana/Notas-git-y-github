const os = require('os');

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus());
// console.log(os.constants);

console.log('Te quedan disponibles ' + os.freemem() + ' bytes');
const SIZE = 1024;
function kb(bytes) {return bytes / SIZE};
function mb(bytes) {return kb(bytes) / SIZE};
function gb(bytes) {return mb(bytes) / SIZE};

console.log('Te quedan disponibles ' + kb(os.freemem()) + ' Kilobytes');
console.log('Te quedan disponibles ' + mb(os.freemem()) + ' Megabytes');
console.log('Te quedan disponibles ' + gb(os.freemem()) + ' Gigabytes');

console.log(gb(os.totalmem));
console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.networkInterfaces());

