'use strict';
let grade=0;
let thename =prompt('what is your name?');
alert('hello ' +thename);

let q1 = prompt('is my name hala?');
if (q1.toLowerCase() ==='yes' || q1 === 'y') {
//console.log('that\'s correct');
  alert('that\'s correct');
  grade+=1;
} else if (q1 === 'no' || q1 === 'n') {
  alert('wrong answer');
} else {
  alert('please answer yes or no');
}

let q2 = prompt('Am i from lebanon?');
if (q2.toLowerCase() === 'no' || q2 === 'n') {
  //console.log('wrong answer');
  alert('correct');
  grade+=1;
} else if (q2 === 'yes' || q2 === 'y') {
  alert('wrong');
}else{
  alert('please answer yes or no');
}

let q3 = prompt ('im i pharmacist');
if (q3.toLowerCase() === 'yes' || q3 === 'y') {
  //console.log('that\'s correct')
  alert('that\'s correct');
  grade+=1;
  
} else if (q3 === 'no' || q3 === 'n'){
  alert('wrong answer');
} else {
  alert('please answer yes or no');
}

let q4 = prompt('Did i work at a hospital?');
if (q4.toLowerCase() === 'no' || q4 === 'n') {
  //console.log('wrong answer');
  alert('correct,good job');
  grade+=1;
} else if (q4 === 'yes' || q4 === 'y') {
  alert('wrong answer :(');
} else{
  alert('please answer yes or no');
}

let q5 = prompt('Do i like being an employee?');
if (q5.toLowerCase() === 'no' || q5=== 'n') {
  //console.log('wrong answer');
  alert('correct,this was the last question');
  grade+=1;
} else if (q5 === 'yes' || q5 === 'y') {
  alert('wrong answer,goodluck next time');
} else{
  alert('Next time please answer yes or no');
}

//q6

let day=prompt('Can you guess the day of the month i was born in');
for (let i=0;i<=3;i++) {
  if (day === '27'){ alert('corrects answer');
    grade+=1;
    console.log('hala');
    break;
  }else if (day <='23' ) {
    alert('too low');
    day = prompt('try again');
  } else if (day >='32') {
    alert('too high');
    day = prompt('try again');
  }else{
    alert('Close enough');
    day = prompt('try again');
  }
}

//q7

let places=['scotland','india','moroco','north pole','kenya','boston-usa','spain','philippines','japan','russia'];
let flag=true;
let answer=prompt('can you guess what country i would like to visit the most?');
var atmp=5;
while (flag){
  for(let j=0;j<places.length;j++){
    if (atmp===0) {
      flag=false;
      break;
    }
    if(answer.toLowerCase() === 'scotland'){
      console.log('answer is'+answer);
      alert('correct');
      grade+=1;
      flag=false;
      break ;
    }
    else{
      answer =prompt('try again you have '+ atmp+' left');
      atmp=atmp-1;
    }
  }
}

alert(grade+' / 7');

alert('thank you '+thename );
