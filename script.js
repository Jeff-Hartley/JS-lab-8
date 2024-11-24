//variable for the student object
let student = {
    name: "Jeff Hartley",
    age: 31,
    enrolled: true,
    courses: ["Fundamentals of JavaScript", "Web Programming and Design", "Database Concepts & Design", "Algorithms & Problem Solving", "Operating Systems", "Technical Reading and Writing Skills"],

    //method to display info
    displayInfo: function() {
        return `Name of student: ${student.name}
        Age of student: ${student.age}
        Are they enrolled? ${student.enrolled}
        The students courses: ${student.courses}`;
    }
}

//logging required outputs to the console
console.log(student.name);
console.log(student.age);
console.log(" "); // creates a gap in console for better reading
console.log(student.displayInfo());
console.log(" "); // creates a gap in console for better reading

// converting student object into JSON string
let jsonStudent = JSON.stringify(student);

console.log(jsonStudent);
console.log(" "); // creates a gap in console for better reading

// converting the JSON string back to JS
let convertedStudent = JSON.parse(jsonStudent);

console.log(convertedStudent);
console.log(" "); // creates a gap in console for better reading

// extracting name and courses from the student object through destructuring
let { name, courses } = student; // instruction didn't ask for anything done with this other that destructuring

//creating an array and destructuring the first two scores
let scores = [76, 90, 87, 99, 67];
let [firstScore, secondScore] = scores;

console.log(`First score destructured: ${firstScore}. Second score destructured: ${secondScore}`);
console.log(" "); // creates a gap in console for better reading

//using spread operator to clone the student object
let studentClone = { ...student };

//adding a new property
studentClone.graduationYear = 2026; 

console.log(studentClone);
console.log(" "); // creates a gap in console for better reading

//creating array & merging it with courses array
let newCourses = ['Numeric Computing', 'Database Programming', 'Object-Oriented Programming', 'Advanced Front-End Programming'];
let mergedCourses = [...student.courses, ...newCourses]; // instruction only asked for merge


