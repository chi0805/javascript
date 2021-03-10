var y = 'Global';
function outerFunc() {
    var y = 'Local Outer';
    function innerFunc() {
        var z = 'Local Inner';
        console.log(z); // 結果: Local Innner
        console.log(y); // 結果: Local Outer
        console.log(x); // 結果: x is not defined
    }
    innerFunc();
}
outerFunc();
