// Practice Problem 3 
// Write an arrow function where it will do the following: 
// a) Square each attay element 
// b) Calculate the sum of the squared elements 
// c) Return the average of the sum of the squared elements 

// Print the result. 
const myFunction = (numbers) => {
    let sum = 0;
    for (const number of numbers) {
        const square = number * 2;
        sum += square;
    }

    const result = sum / numbers.length;
    return result;

}


const numbers = [10, 20, 30, 40, 50, 60];
const output = myFunction(numbers)
console.log(output);

