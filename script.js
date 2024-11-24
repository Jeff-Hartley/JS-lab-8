//variable for the student object
let student = {
    name: "Jeff Hartley",
    age: 31,
    enrolled: true,
    courses: ["Fundamentals of JavaScript", "Web Programming and Design", "Database Concepts & Design", "Algorithms & Problem Solving", "Operating Systems", "Technical Reading and Writing Skills"],

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


