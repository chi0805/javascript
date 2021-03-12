function hoge() {
    var args = Array.prototype.slice.call(arguments);
    console.log(args.join('／'));
}

hoge('Angular', 'React', 'Bachbone'); // 結果: Angular／React／Bachbone
