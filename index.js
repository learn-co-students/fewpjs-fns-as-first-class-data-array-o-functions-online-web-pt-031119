function wakeDog(dogName, dogBreed){
  return(`Wake ${dogName} the ${dogBreed}`);
}

function leashDog(dogName, dogBreed){
  return(`Leash ${dogName} the ${dogBreed}`);
}

function walkToPark(dogName, dogBreed){
  return(`Walk to the park with ${dogName} the ${dogBreed}`);
}

function throwFrisbee(dogName, dogBreed){
  return(`Throw the frisbee for ${dogName} the ${dogBreed}`);
}

function walkHome(dogName, dogBreed){
  return(`Walk home with ${dogName} the ${dogBreed}`);
}

function unleashDog(dogName, dogBreed){
  return(`Unleash ${dogName} the ${dogBreed}`);
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]
let array = []

function exerciseDog(dogName, dogBreed){
  array.push(routine[0](dogName,dogBreed));
  array.push(routine[1](dogName,dogBreed));
  array.push(routine[2](dogName,dogBreed));
  array.push(routine[3](dogName,dogBreed));
  array.push(routine[4](dogName,dogBreed));
  array.push(routine[5](dogName,dogBreed));
  return array;
}