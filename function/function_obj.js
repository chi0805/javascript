var getTriangle = new Function('base', 'height', 'return base * height / 2;');
console.log('三角形の面積: ' + getTriangle(5, 2));    //結果: ５