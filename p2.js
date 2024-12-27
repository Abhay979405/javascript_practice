// wap to check fail or pass for student in exam condition for fail below is 35%

// Function to check if the student has passed or failed
function checkPassOrFail(marks, totalMarks) {
    if (typeof marks !== "number" || typeof totalMarks !== "number" || totalMarks <= 0) {
        return "Please provide valid marks and total marks.";
    }

    let percentage = (marks / totalMarks) * 100; // Calculate percentage

    if (percentage= 35) {
        return `The student passed with ${percentage.toFixed(2)}%.`;
    } else {
        return `The student failed with ${percentage.toFixed(2)}%.`;
    }
}

// Example usage
let marksObtained <=35 ;  // Marks obtained by the student
let maxMarks = 100;      // Total marks

let result = checkPassOrFail(marksObtained, maxMarks);
console.log(result);
