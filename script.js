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
    },

    //method to add a new course
    addCourse: function(newCourse) {
        this.courses.push(newCourse);
        console.log(`${newCourse} added to the students courses`);
    },

    totalCourseNumber: function() {
        return this.courses.length;
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
let { name, courses } = student;
console.log(`I am ${name} and my courses are ${courses}`);
console.log(" "); // creates a gap in console for better reading

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
let mergedCourses = [...student.courses, ...newCourses];

console.log(mergedCourses);
console.log(" "); // creates a gap in console for better reading

//using the methods added to the student object to add a course and return the number of courses
// displaying number of courses first, adding a course, showing it has been added, then displaying all courses
console.log(student.totalCourseNumber() + " courses");
student.addCourse("Technical Workplace Writing Skills");
console.log(student.totalCourseNumber() + " courses");
console.log(" "); // creates a gap in console for better reading

console.log(student.courses);

// getting the total sum of the scores
let sumOfScores = scores.reduce((acc, score) => acc + score);

// dividing the sum of scores by the length of the scores array
let average = sumOfScores / scores.length;

console.log(" "); // creates a gap in console for better reading
console.log(`${average} is the sum of the scores`);



