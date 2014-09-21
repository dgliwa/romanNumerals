var numbers = [[9, "IX"], [5,"V"], [4, "IV"], [1, "I"]];

var romanNumeral = function(number){
  var romanNumber = ""
  while(number > 0){
    for(var i = 0; i<numbers.length; i++){
      if(numbers[i][0] <= number){
        romanNumber = romanNumber + numbers[i][1];
        number = number - numbers[i][0];
      }
    }
  }
  return romanNumber;
}
