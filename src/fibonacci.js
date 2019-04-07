function getSequence(n) {
   
//initialises the array
 var fib = [];
 
 // variables that will be used for the fibonacci sequence
 var a = 1, b = 0, temp;
 
 //O(n) time complexity. Goes through the array N amount of times.
 for (var i = 0; i < n; i++) 
   {
   //use a temporary variable to store the previous value
    temp = a;

    //set the variable 'a' to a new value
    a = a + b;

    //make b the total value in the sequence
    b = temp;

    //send the value to an array
    fib[i] = b;
  }
  return fib;
}


module.exports = {
  getSequence
};
