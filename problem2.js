
// Practice Problem 2 
// Write an arrow function where it will do the following: 
// a) It will take an array where the array elements will be the name of your friends 
// b) Check if the length of each element is even, push elements 

// with even length to a new array and return the result 

const even = [];
const friendsName = (names) =>{

  for(const name of names){
    const nameLength = name.length;
    if(nameLength %2 === 0){
        even.push(name);
    }
    
  }
}


const friends = ["ratan","binoya","jesika","shakyo","durjoy"];
friendsName(friends);
console.log(even);
