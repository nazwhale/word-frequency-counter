'use strict';

// var fs = require('fs');
// var bookText = fs.readFileSync("./text-files/railway-children.txt", "utf8");

function FrequencyCounter(text) {
  this.text = text
}

FrequencyCounter.prototype.splitWords = function() {
  this.text = this.text.split(" ")
}

FrequencyCounter.prototype.removeNonAlphas = function() {
  this.text = this.text.replace(/[^0-9a-z\ ]/gi, '')
}

