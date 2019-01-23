const classReport = [
    {
        first_name:"Ayooluwa",
        last_name:"Oyewo",
        age:25,
        grade:90,
    },

    {
        first_name:"Samuel",
        last_name:"David",
        age:20,
        grade:80,
    },

    {
        first_name:"Kehinde",
        last_name:"Temitope",
        age:22,
        grade:75,
    },

    {
        first_name:"Kenny",
        last_name:"Davies",
        age:18,
        grade:69,
    },

    {
        first_name:"Temilolu",
        last_name:"Opeowo",
        age:21,
        grade:86,
    },

    {
        first_name:"Tanimowo",
        last_name:"Temitade",
        age:23,
        grade:72,
    },

    {
        first_name:"Victory",
        last_name:"Goodness",
        age:14,
        grade:75,
    },

    {
        first_name:"Clement",
        last_name:"David",
        age:15,
        grade:60,
    },

    {
        first_name:"Kathy",
        last_name:"Gabriel",
        age:15,
        grade:80,
    },

    {
        first_name:"Yinka",
        last_name:"Opeyemi",
        age:15,
        grade:70,
    }
    
];


//function to Output the names and grades of of every student in an array of students objects
const outputNamesandGrades = (studArray) => {
    // let i = 0;
    for (let i = 0; i < studArray.length; i++) {
        const student = studArray[i];
        let nameGrade = `${student.first_name} ${student.last_name} has a grade of ${student.grade}.`;
        console.log(nameGrade) ;

    }
};
outputNamesandGrades(classReport);