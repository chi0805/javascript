function closure(init) {
    var counter = init;

    return function() {
        return ++counter;
    }
}

var myClosure = closure(1);
console.log(myClosure()); // 結果: 2
console.log(myClosure()); // 結果: 3
console.log(myClosure()); // 結果: 4
