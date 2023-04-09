// Objects

let student1 = {
    name: "umair",
    age: 26,
    hieght: 6,
    education: "M.Phil",
    speak:function (sentence) {
    console.log(sentence, this.name,  this.age);
}
};

console.log(student1);
student1.speak("Hi i am " , "My age is");


let student2 ={
    name: "saqib",
    age: 14,
    hieght: 5.6,
    education: "Matric",
};

console.log(student2);

let student3 = {
    name: "hassan",
    age: 14,
    hieght: 5.5,
    education: "Matrics",
}


console.log(student3);


let student4 = {
    name: "shahid",
    age: 15,
    hieght:5.6,
    education: "Matric",
}


console.log(student4);



let studentData = [student1,student2,student3,student4];

console.log(studentData);



function provideStudentData(name1,age1,height1,education1) {
    return{
        
    name: name1,
    age: age1,
    hieght:height1,
    education: education1,
    }
}

let arrayStusentData = [
    provideStudentData("umair", 26, 6.00, "M.Phil"),
    
    provideStudentData("shahid", 16, 5.5, "Matric"),
    
    provideStudentData("Hasan", 15 ,5.4, "Matric"),
];
console.log(arrayStusentData);

////


let arrayStudentData1 = [];
function provideStudentData1() {
   let std = {
        
    name: prompt("Enter your name"),
    age: +prompt("Enter your age"), 
    hieght: +prompt("Enter your height"),
    education: prompt("Enter your education"),
    };
  arrayStudentData1.push(std);  
  console.log(arrayStudentData1);
};



















