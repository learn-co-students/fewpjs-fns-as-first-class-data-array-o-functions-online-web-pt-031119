function wakeDog(dogName, dogBreed) {
  return(`Wake ${dogName} the ${dogBreed}`);
  // return wakeDog(a,b);
};

function leashDog(dogName, dogBreed) {
  return(`Leash ${dogName} the ${dogBreed}`);

};

function walkToPark(dogName, dogBreed) {
  return(`Walk to the park with ${dogName} the ${dogBreed}`);

};

function throwFrisbee(dogName, dogBreed) {
  return(`Throw the frisbee for ${dogName} the ${dogBreed}`);
};

function walkHome(dogName, dogBreed) {
  return(`Walk home with ${dogName} the ${dogBreed}`);
};

function unleashDog(dogName, dogBreed) {
  return(`Unleash ${dogName} the ${dogBreed}`);
};

var routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
let result = [];

function exerciseDog(dogName, dogBreed) {
  // var routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
  for (var i = 0; i < routine.length; i = i + 1){
    result.push(routine[i](dogName, dogBreed));
  }
  return result
};



//
// for (var i = 0; i < arrOfFuncs.length; i++){
//     console.log(typeof arrOfFuncs[i]);
//     console.log(arrOfFuncs[i]);
// }
