'use strict';

function FrequencyCounter(text) {
  this.text = text
  this.wordFrequencies = {}
}

FrequencyCounter.prototype.splitWords = function() {
  this.text = this.text.split(" ")
}

FrequencyCounter.prototype.removeNonAlphas = function() {
  this.text = this.text.replace(/[^0-9a-z\ ]/gi, '')
}

FrequencyCounter.prototype.countFrequencies = function() {
  var countOfWords = this.wordFrequencies

  this.text.forEach(function (key) {
    if (countOfWords.hasOwnProperty(key)) {
      countOfWords[key]++;
    } else {
      countOfWords[key] = 1;
    }
  });

  this.wordFrequencies = countOfWords

}
