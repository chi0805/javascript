var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str = 'サポートサイトはhttp://www.wings.msn.cto/です';
str += 'サンプル紹介サイトHTTP://www.web-deli.com/もよろしく！';
while((result = p.exec(str)) !== null) {
    console.log(result[0]);     // 結果: http://www.wings.msn.cto/、HTTP://www.web-deli.com/
}
