let getTriangle = (base. height) => {
    return base * height / 2;
};

console.log('三角形の面積: ' + getTriangle(5,2));

//以下に書き換え可能
let getTriangle = (base. height) => base * height /2;

//引数が1つの場合は引数をくくるカッコも省略可能
let getCircle = radius => radius * radius * Math.PI;

//引数がない場合はカッコは省略不可
let show = () => console.log('Hello, world!');
