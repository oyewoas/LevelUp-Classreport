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


//Function to find Average Score
const findAverageGrade = (report) => {
    const totalGrade = report
        .map(studentGrade => studentGrade.grade )
        .reduce((accumulator, grade) => accumulator + grade, 0);
    let classReportLength = report.length;
    const averageGrade = totalGrade / classReportLength;
    return averageGrade;
};

console.log(findAverageGrade(classReport));


//Function to find students with age above 16
const studentsAbove16 = (report) => { 
    const studentsAbove16 = report.filter((report) => {
        if(report.age >= 16){
            return report;
        }
    });
    return studentsAbove16;
};




console.log(studentsAbove16(classReport));

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


const classDetails = [ {
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
}];
classDetails.forEach ((student, index) => {
    const studName = `${student.first_name} ${student.last_name}`;
    let grade = ` ${student.grade}`;
    let nameGrade = `${studName} has a grade of ${grade}`;
    console.log(nameGrade) ;

});

console.log(classDetails);


const studentsDetails = [
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
        first_name:"Samuel",
        last_name:"King",
        age:18,
        grade:69,
    },

    {
        first_name:"Temilolu",
        last_name:"Opeowo",
        age:21,
        grade:86,
    } ];

//function to Rank an array of students objects by their grades
studentsDetails.sort((a, b) => {
    if (a.grade < b.grade) {
        return 1;
    }
    return -1;

});

console.log(studentsDetails);