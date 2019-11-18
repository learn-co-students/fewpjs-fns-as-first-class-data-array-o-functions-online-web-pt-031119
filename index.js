function blankTheDog(actionText, dogName, dogBreed) {
    let x = `${actionText} ${dogName} the ${dogBreed}`;
    console.log(x);
    return x;
}


function wakeDog(dogName, dogBreed) {
    return blankTheDog('Wake', dogName, dogBreed);
}

function leashDog(dogName, dogBreed) {
    return blankTheDog('Leash', dogName, dogBreed);

}

function walkToPark(dogName, dogBreed) {
    return blankTheDog('Walk to the park with', dogName, dogBreed);
}

function throwFrisbee(dogName, dogBreed) {
    return blankTheDog('Throw the frisbee for', dogName, dogBreed);
}

function walkHome(dogName, dogBreed) {
    return blankTheDog('Walk home with', dogName, dogBreed);
}

function unleashDog(dogName, dogBreed) {
    return blankTheDog('Unleash', dogName, dogBreed);
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
    let results = [];
    routine.forEach(function (routineStep) {
        results.push(routineStep(dogName, dogBreed));
    });
    return results;
} 