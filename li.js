//function to return the reverse of a string
var reverseString = function(str) {
  //Testing for input
  if (str ===('')) {
    return null;
  } else {
    var Strings = "";
    for (var i = str.length - 1; i >= 0; i-- ) {
      Strings += str[i];
    }
    return Strings;
  }
  
};