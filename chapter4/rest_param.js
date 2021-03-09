// 仮引数の前に... をつけると可変長引数となる
function sum(...nums) {
    let result = 0;
    for (let num of nums) {
        if (typeof num !== 'number') {
            throw new Error('指定値が数値ではありません: ' + num);
        }
        result += num;
    }
    return result;
}

try {
    console.log(sum(1,3,5,7,9)); // 結果: 25
} catch(e) {
    window.alert(e.message);
}
