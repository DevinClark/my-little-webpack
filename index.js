var qs = require('query-string');

console.log(qs.stringify({
  tacos: true,
  burritos: true
}));