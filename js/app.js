"use strict";

let thename =prompt('what is your name?');
alert('hello ' +thename)

let q1 = prompt('is my name hala?');
q1=q1.toLowerCase();
if (q1 ==='yes' || q1 === 'y') {
      //console.log('that\'s correct'); 
    alert('that\'s correct');
} else if (q1 === 'no' || q1 === 'n') {
    alert('wrong answer');
} else {
    alert('please answer yes or no')
}

let q2 = prompt('Am i from lebanon?');
q2=q2.toLowerCase()
if (q2 === 'no' || q2 === 'n') {
    //console.log('wrong answer');
    alert('correct');
} else if (q2 === 'yes' || q2 === 'y') {
    alert('wrong');
}else{
    alert('please answer yes or no')
}

let q3 = prompt ('im i pharmacist');
q3=q3.toLowerCase()
if (q3 === 'yes' || q3 === 'y') {
    //console.log('that\'s correct')
    alert('that\'s correct');
} else if (q3 === 'no' || q3 === 'n'){
    alert('wrong answer');
} else {
    alert('please answer yes or no')
}

let q4 = prompt('Did i work at a hospital?');
q4=q4.toLowerCase()
if (q4 === 'no' || q4 === 'n') {
    //console.log('wrong answer');
    alert('correct,good job');
} else if (q4 === 'yes' || q4 === 'y') {
    alert('wrong answer :(');
} else{
    alert('please answer yes or no');
}

let q5 = prompt('Do i like being an employee?');
q5=q5.toLowerCase()
if (q5 === 'no' || q5=== 'n') {
    //console.log('wrong answer');
    alert('correct,this was the last question');
} else if (q5 === 'yes' || q5 === 'y') {
    alert('wrong answer,goodluck next time');
} else{
    alert('Next time please answer yes or no');
}


alert('Thank you ' + thename); 