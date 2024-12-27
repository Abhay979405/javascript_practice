// wap to find min, max,avg,and sum of array 

// Function to calculate min, max, sum, and average of an array
function calculateArrayStats(arr) {
    if (!Array.isArray(arr) || arr.length !== 10) {
        return "Please provide an array of size 10.";
    }

    let sum = arr.reduce((acc, num) => acc + num, 0); // Calculate sum
    let min = Math.min(...arr); // Find minimum value
    let max = Math.max(...arr); // Find maximum value
    let avg = sum / arr.length; // Calculate average

    return {
        min: min,
        max: max,
        sum: sum,
        avg: avg
    };
}

// Example array of size 10
let numbers = [12, 34, 7, 45, 89, 22, 55, 67, 10, 5];

// Ensure the array is of size 10
if (numbers.length === 10) {
    let stats = calculateArrayStats(numbers);
    console.log(`Array: [${numbers}]`);
    console.log(`Minimum: ${stats.min}`);
    console.log(`Maximum: ${stats.max}`);
    console.log(`Sum: ${stats.sum}`);
    console.log(`Average: ${stats.avg}`);
} else {
    console.log("the array does not have exactly 10 element.");
}
