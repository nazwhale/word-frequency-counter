var assert = {

  isEq: function(firstAssertion, secondAssertion) {
    if (firstAssertion !== secondAssertion) {
      message = "Expected " + firstAssertion + " to equal " + secondAssertion + "."
    } else {
      message = 'The isEq test passed';
    }
  },

  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      message = "Assertion failed: " + assertionToCheck + " is not truthy"
    } else {
      message = 'The isTrue test passed';
    }
  },

  isFalse: function(assertionToCheck) {
    if (!!assertionToCheck) {
      message = "Assertion failed: " + assertionToCheck + " is not falsy"
    } else {
      message = 'The isFalse test passed';
    }
  },
};

printDescription = function(description, message){
  var element = document.getElementById(count);
  var listItem = document.createElement('li');
  if (message.includes("passed")){
    listItem.setAttribute("style", 'color:blue');
  } else {
    listItem.setAttribute("style", 'color:red');
    console.log(message);
  }
  listItem.innerHTML = description;
  document.getElementById(count).appendChild(listItem);
}

printResults = function(message){
  var element = document.getElementById("testResults");
  var unorderedListItem = document.createElement('ul');
  unorderedListItem.setAttribute("id", count);
  unorderedListItem.innerHTML = message;
  document.getElementById('testResults').appendChild(unorderedListItem);
}
  it = function(description, test){
    test();
    printDescription(description, message);
  }

  describe = function(description, tests){
    printResults(description);
    tests();
    count += 1;
  }
var count = 1;
