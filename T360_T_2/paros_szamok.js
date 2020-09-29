var tomb = [124,23,43,543,564,332,52,26,14,64,6];
var count = 0;

for (var i=0; i < tomb.length; i++) {
    if (tomb[i] % 2 === 0){
      console.log("A páros szám értéke: " + tomb[i]);
      count++; 
    }
    }

    console.log("Páros elemek száma: " + count);