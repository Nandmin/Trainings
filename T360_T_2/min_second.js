var tomb = [124,23,43,543,564,332,52,26,14,64,6];

var min = tomb [0];
var second = tomb[1];

for (var i=0; i < tomb.length; i++) {
    if (min > tomb[i]) {
        min = tomb[i];

        for (var j = 0; j < tomb.length; j++) {
          if (tomb[j] > min && tomb[j] < second) {
              second = tomb[j];
          }
        }
    }
}

    console.log("The second smallest number is: " + second);


/* Using sort would be to simple... :) */