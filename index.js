
const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log(os.totalmem());
console.log(os.tmpdir());
console.log('memoria disponible:' , os.freemem());
console.log('memoria total', os.totalmem());

