var Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

var mem = new Member('太郎', '山田');
mem.getName = function() {
    return this.lastName + ' ' + this.firstName;
}

console.log(mem.getName());
// 結果: 山田 太郎

var mem2 = new Member('花子' + '鈴木');
console.log(mem2.getName());
// 結果: mem2.getName is not a function
