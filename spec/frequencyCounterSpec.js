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

 })

