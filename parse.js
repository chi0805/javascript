var n = '123xxx';
console.log(Number(n));             //結果: NaN
console.log(Number.parseFloat(n));  //結果: 123
console.log(Number.parseInt(n));    //結果: 123

var d = new Date;
console.log(Number(d));             //結果:1599910698242
console.log(Number.parseFloat(d));  //結果:NaN
console.log(Number.parseInt(d));    //結果:NaN 

var h = '0x10';
console.log(Number(h));             //結果:16
console.log(Number.parseFloat(h));  //結果:0
console.log(Number.parseInt(h));    //結果:16

var b = '0b11';
console.log(Number(b));             //結果:3
console.log(Number.parseFloat(b));  //結果:0
console.log(Number.parseInt(b));    //結果:0

var e = '1.01e+2';
console.log(Number(e));             //結果:101
console.log(Number.parseFloat(e));  //結果:101
console.log(Number.parseInt(e));    //結果:1
