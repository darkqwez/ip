// // a. WAP in JS to study conditional Statements, Loops and Functions
// // Write a Javascript code to change the background color of the web page automatically after every 5 second

// var colors = ["#FF5733", "#8A2BE2", "#2E8B57", "#FF1493", "#00CED1"];

// function changeBackgroundColor(){
//     console.log("Called");
//     var rNum = Math.floor(Math.random() * 5);
//     document.body.style.backgroundColor = colors[rNum];
// }
// setInterval(changeBackgroundColor,5000);





studs = ["dars","zxc","fga","me"];


// Conditional Statement
var currentHour = new Date().getHours();
if(currentHour<12) {
    console.log("Good morning!");
} else if(currentHour < 18) {
    console.log("Good afternoon!");
} else{
    console.log("Good evening!");
}


// Ternary Operator
var userAge = prompt("Please enter your age:");
userAge >= 18 ? console.log("You are eligible to vote!") : console.log("You are not eligible to vote.");


//Loops

document.getElementById("forof").addEventListener("click",()=>{
    console.log("Using for_of loop");
    for(let students of studs){
        console.log(students);
    }    
});

document.getElementById("forin").addEventListener("click",()=>{
    console.log("Using for_in loop");
    for(var i in studs){
        console.log(studs[i]);
    }    
});

document.getElementById("simplefor").addEventListener("click",()=>{
    console.log("Using simple for loop");
    for(let i = 0 ; i<studs.length ; i++){
        console.log(studs[i]);
    }
});

document.getElementById("while").addEventListener("click",()=>{
    console.log("While loop");
    var i = 4;
    while(i>0){
        console.log(i);
        i--;
    }
});


//functions
// Return function
function bitwiseAnd(x,y){
    return x&y;
}

console.log(bitwiseAnd(3,2));

//Default parameter function

function default_para(name = "Darshil" , rollNo= 71){
    console.log("Hey "+ name + ", your roll no is "+rollNo);
}

default_para();
default_para("ZXC",8);


//Res function
function res_function(...paras){
    console.log("Total parameters passed = "+ paras.length);
    var sum = 0;
    for(let objs in paras){
        sum += paras[objs];
    }
    console.log("Sum = "+sum);
}

res_function(4,6,7,3,2);
res_function(6,5);


//Anonymous funciton
var calculateSquare = function(num) {
    return num * num;
};

var number = 5;
var square = calculateSquare(number);
console.log("The square of " + number + " is: " + square);


//Arrow functions - all types
// no arg 

let arrow1 = ()=>{
    console.log("Called arrow function with no arguements");
}
arrow1();


// arrow function with arguments and multiline arrow function
let arrow2 = (n1,n2)=>{
    console.log("arrow function with arguements called\nn1 = "+n1+ " n2 = "+n2);
    let ans = n1&n2;
    console.log("Bitwise And = "+ans);
}
arrow2(3,2);

// arrow function as an expression
var exp_arr = (4<5)? () => {console.log("True");} : () =>{console.log("False");} 

exp_arr();
