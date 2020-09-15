var dat = new Date(2017, 4, 15, 11, 40);
console.log(dat.toLocaleString());          // 結果: 2017/5/15 11:40:00
dat.setMonth(dat.getMonth() + 3);           // 結果: 3ヶ月を加算
console.log(dat.toLocaleString());          // 結果: 2017/8/15 11:40:00
dat.setDate(dat.getDate() - 20);            // 結果: 20日を減算
console.log(dat.toLocaleString());          // 結果: 2017/7/26 11:40:00
