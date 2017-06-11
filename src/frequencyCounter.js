var fs = require('fs');
var bookText = fs.readFileSync("./text-files/railway-children.txt", "utf8");
console.log(bookText);
