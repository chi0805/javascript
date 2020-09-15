var dat = new Date(2017, 4, 15, 11, 40);
console.log(dat.toLocaleString());          // 結果: 2017/5/15 11:40:00
dat.setMonth(dat.getMonth() + 1);           // 来月の･･･
dat.setDate(0);                             // 0日目をセット
console.log(dat.toLocaleString());          // 結果: 2017/5/30 11:40:00
