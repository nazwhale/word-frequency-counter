 describe('FrequencyCounter', function() {

   beforeEach(function() {
     bookText = "This is a test string"
     fc = new FrequencyCounter(bookText);
   });

   describe('initialize', function() {
     it('has text', function() {
       expect(fc.text).toEqual("This is a test string");
     })
   });

   describe('split words', function() {
     it('splits words when called', function() {
       expect(fc.splitWords()).toEqual(["This","is","a","test","string"])
     })
   })
 })

