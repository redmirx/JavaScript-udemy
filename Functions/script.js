'use strict';

// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

const addTaxRate = rate => {
  return value => {
    return value + value * rate;
  };
};
// const addTaxRate = rate => {
//   return function (value) {
//     return value + value * rate;
//   };
// };

const result = addTaxRate(0.23)(100);
console.log(result);

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2());
