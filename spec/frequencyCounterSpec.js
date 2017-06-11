describe('FrequencyCounter', function() {

  beforeEach(function() {
    bookText = "This is a test string"
    fc = new FrequencyCounter(bookText);
  });

  describe('initialize', function() {
    it('has text', function() {
      expect(fc.getText).toEqual("This is a test string");
    })
  });

  describe('split words', function() {
    it('splits words when called', function() {
      fc.splitWords();
      expect(fc.splitWords()).toEqual(["THE"])
    })
  })

})
