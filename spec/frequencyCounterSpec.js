'use strict';

 describe('FrequencyCounter', function() {

   var fc;

   beforeEach(function() {
     fc = new FrequencyCounter("This is a test string");
   });

   describe('initialize', function() {
     it('has text', function() {
       expect(fc.text).toEqual("This is a test string");
     })
   });

   describe('string formatting', function() {
     it('splits words when called', function() {
       fc.splitWords();
       expect(fc.text[0]).toEqual("This")
     })

     it('strips string of non-alphanumeric characters', function() {
       fc.text = "This string, has unwanted characters. !@#$%^&*;"
       fc.removeNonAlphas();
       expect(fc.text).toEqual("This string has unwanted characters ")
     })
   })

  describe('Count word frequencies', function() {
    it('has a value of 1 when there is 1 of the word', function() {
      fc.text = "some words"
      fc.countFrequencies();
      expect(fc.wordsMap).toEqual({'some': 1, 'words': 1})
    })
  })

 })

