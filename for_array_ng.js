var data = ['apple', 'orange', 'banana'];
//配列オブジェクトにhogeメソッドを追加
Array.prototype.hoge = function(){}
for (var key in data) {
    console.log(data[key]);
}
//結果「apple」「orange」「banana」「function(){}」を順に出力
