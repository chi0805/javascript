function multi(a = b, b = 5) {
    return a * b;
}

console.log(multi()); // 結果: Uncaught ReferenceError: Cannot access 'b' before initialization
