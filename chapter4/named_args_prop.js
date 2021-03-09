function show({name}) {
    console.log(name);
}

let member = {
    mid: 'Y0001',
    name : '山田',
    address: 't/yamada@example.com'
};

show(member);
// 結果: 山田 分割代入を利用すると、引数に渡したオブジェクトから特定のプロパティだけを取り出すこともできる
