// CHALLANGE N1
// test1
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// test2
const dogsJulia = [9, 16, 6, 8, 3];
const dogsKate = [10, 5, 6, 1, 4];

function checkDogs(dogsJulia, dogsKate) {
  const newDogsJulia = dogsJulia.slice(1, -2);
  const dogs = newDogsJulia.concat(dogsKate);
  dogs.forEach((age, index) => {
    if (age >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${age} years old`
      );
    } else {
      console.log(`Dog number ${index + 1} is still a puppy 🐶`);
    }
  });
}

checkDogs(dogsJulia, dogsKate);
