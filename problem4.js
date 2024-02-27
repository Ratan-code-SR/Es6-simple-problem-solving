
// Practice Problem 4 
// Write an arrow function where it will do the following: 
// a) It will take two array inputs 
// b) Combine the two arrays and assign them in a new array 
// c) Find the maximum number from the new array and return the result 
// Print the result. 


const myFunction = (numbers)=>{
  
   const maxNumber = Math.max(...numbers);
   console.log(maxNumber);

}
const array1 = [34,67,89,65,43];
const array2 = [40,10,67,90];
const array = [...array1,...array2];
myFunction(array)

