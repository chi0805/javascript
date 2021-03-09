// オブジェクトから渡された引数を分解して、関数の配下では個別の引数としてアクセスできる
function getTriangle({base = 1, height = 1}) {
    return base * height / 2;
}

console.log(getTriangle({base:5, height:4})); // 結果: 10
