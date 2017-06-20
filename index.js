import qs from 'query-string';
var catNames = require('cat-names');

console.log(catNames.random());

console.log(qs.stringify({
  tacos: true,
  burritos: true
}));