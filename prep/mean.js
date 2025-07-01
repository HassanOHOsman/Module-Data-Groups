function calculateMean(salaries) {
    let total = 0;
    for (const item of list) {
      total += item;
    }
  }


function calculateMedian(salaries) {
    return salaries[(salaries.length) / 2];
}


const salaries = [10, 20, 30, 40, 60, 80, 80];
const median = calculateMedian(salaries);
const mean = calculateMean(salaries);

console.log(`The median salary is ${median}`);
console.log(`The mean salary is ${mean}`);



function swapElements(array) {
  [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
  [array[1], array[3]] = [array[3], array[1]];
  [array[0], array[2]] = [array[2], array[0]];
  return array;
}

let numbers = [11, 22, 33, 44, 55];
swapElements(numbers);
console.log(numbers);
