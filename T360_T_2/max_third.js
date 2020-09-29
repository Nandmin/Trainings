var tomb = [11,20,43,543,564,332,52,26,14,64,6];

for (var i = 0; i < tomb.length-1; i++){
  for (var j = i+1; j < tomb.length; j++){
    if (tomb[i] > tomb[j]) {
      var temp = [tomb[i], tomb[j]];
      tomb[i] = temp[1];
      tomb[j] = temp[0];
      
    }
  }
}

var third = tomb.length - 3 ;
console.log("The third biggest number is: " + tomb[third]);