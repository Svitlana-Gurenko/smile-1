import validator from 'validator';
validator.isEmail('foo@bar.com'); //=> true
console.log(validator.isEmail('foo@bar.com'));