var Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = function() {
        return lastName + ' ' + this.firstName;
    }
};

var mem = new Member('太郎', '山田');
console.log(mem.getName()); // 結果: 山田 太郎
