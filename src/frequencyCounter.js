'use strict';

var fs = require('fs');
var bookText = fs.readFileSync("./text-files/railway-children.txt", "utf8");

function FrequencyCounter(text) {
  this.text = text
}

FrequencyCounter.prototype.getText = function() {
  return this.text
};

FrequencyCounter.prototype.splitWords = function() {
  return this.text.split(" ")
}

var fc = new FrequencyCounter(bookText)
console.log(fc.splitWords())

