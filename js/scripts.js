function rot13(encodedStr) {
  var codeArr = encodedStr.split(""); //string to array
  var decodedArr = []; // Result goes here
  //create alphabet arrary that goes past Z by 13 letters starting with a
  var alphabet = ['A', 'B', 'C', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P','Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
//run through inputted string array
  for(var i=0;i<codeArr.length;i++) {
    //if current value isnt in alphabet
    if(alphabet.indexOf(codeArr[i])===-1){
      //add that value to the decodeArr array
      decodedArr.push(codeArr[i]);
    }
    else {
      //run though alphabet
        for(var j=0;j<alphabet.length;j++){
        //if current value in array is equal to alphabet
          if(codeArr[i]===alphabet[j]){
          //add the value to the decodeArr + 13 index shifts in alphabet
            decodedArr.push(alphabet(j+13));
        }
      }
    }
  }

  return decodedArr.join("");
}
