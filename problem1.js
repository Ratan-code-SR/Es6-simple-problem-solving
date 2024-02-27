// 1) Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result. 
const multiply = (a, b, c) => a * b * c;
multiply();

// 2) Write the following sentence in three lines and print the result: 
// I am a web developer. I love to code. I love to eat banana.
const sentence1 = "I am a web developer.";
const sentence2 = "I love to code.";
const sentence3 = "I love to eat banana.";
const result = `
${sentence1}
${sentence2}
${sentence3}
`

// 3) Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result. 

const defaultParameter = (a = 10, b = 20) => {
    const result = a + b;
    return result;
}
defaultParameter();



