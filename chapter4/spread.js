console.log(Math.max(15, -3, 78, 1));   // 結果:78
console.log(Math.max([15, -3, 78, 1])); // 結果:NaN 配列を引数として認識できない

console.log(Math.max.apply(null, [15, -3, 78, 1])); // 結果:78 第2引数の配列を引数としてメソッドを実行する

console.log(Math.max(...[15, -3, 78, 1])); // 結果:78 ...を付与することで配列がてんかいされたものがmaxメソッドに渡される
