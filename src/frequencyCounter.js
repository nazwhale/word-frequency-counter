'use strict';

function FrequencyCounter(text) {
  this.text = text
}

FrequencyCounter.prototype.splitWords = function() {
  this.text = this.text.split(" ")
}

FrequencyCounter.prototype.removeNonAlphas = function() {
  this.text = this.text.replace(/[^0-9a-z\ ]/gi, '')
}

FrequencyCounter.prototype.countFrequencies = function() {
  this.wordsMap = {'some': 1, 'words': 1}
}
