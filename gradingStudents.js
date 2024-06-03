// Given Input
let grades = [73, 67, 38, 33]; 

let grade;                  // Initiated for storing ith iteration of grades
let updatedGrades = [];     // For pushing in the updated grade values
for (let i = 0; i < grades.length; i++) {
  grade = grades[i];
  for (let j = 0; j < 2; j++) {
    // Loop made for checking the grades till it is becoming the multiple of 5
    if (grade >= 38 && grade % 5 >= 3) {
      grade++;
    }
  }
  updatedGrades.push(grade); // pushing the grade value into the array after performing conditional function
}

console.log(updatedGrades)