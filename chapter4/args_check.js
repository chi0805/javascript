function showMessage(value) {
    if (arguments.length !== 1) {
        // argsオブジェクト: 関数呼び出しのタイミングで生成されて、呼び出し元から与えられた引数の値を保持する
        throw new Error('引数の数が間違っています: ' + arguments.length);
    }
    console.log(value);
}

try {
    showMessage('山田', '鈴木');
} catch(e) {
    window.alert(e.message);
}
