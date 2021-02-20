'use strict';
let grade=0;
let thename =prompt('what is your name?');
alert('hello ' +thename);

ques1();
ques2();
ques3();
ques4();
ques5();
ques6();
ques7();



function ques1(){
  let q1 = prompt('is my name hala?');
  if (q1.toLowerCase() ==='yes' || q1.toLocaleLowerCase() === 'y') {
    //console.log('that\'s correct');
    alert('that\'s correct');
    grade+=1;
  } else if (q1.toLocaleLowerCase() === 'no' || q1.toLocaleLowerCase() === 'n') {
    alert('wrong answer');
  } else {
    alert('please answer yes or no');
  }

} 



function ques2(){
  let q2 = prompt('Am i from lebanon?');
  if (q2.toLowerCase() === 'no' || q2.toLocaleLowerCase() === 'n') {
  //console.log('wrong answer');
    alert('correct');
    grade+=1;
  } else if (q2.toLocaleLowerCase() === 'yes' || q2.toLocaleLowerCase() === 'y') {
    alert('wrong');
  }else{
    alert('please answer yes or no');
  }

}



function ques3(){
  let q3 = prompt ('im i pharmacist');
  if (q3.toLowerCase() === 'yes' || q3.toLocaleLowerCase() === 'y') {
  //console.log('that\'s correct')
    alert('that\'s correct');
    grade+=1;

  } else if (q3.toLocaleLowerCase() === 'no' || q3.toLocaleLowerCase() === 'n'){
    alert('wrong answer');
  } else {
    alert('please answer yes or no');
  }

}



function ques4(){
  let q4 = prompt('Did i work at a hospital?');
  if (q4.toLowerCase() === 'no' || q4.toLocaleLowerCase() === 'n') {
  //console.log('wrong answer');
    alert('correct,good job');
    grade+=1;
  } else if (q4.toLocaleLowerCase() === 'yes' || q4.toLocaleLowerCase() === 'y') {
    alert('wrong answer :(');
  } else{
    alert('please answer yes or no');
  }

}


function ques5(){
  let q5 = prompt('Do i like being an employee?');
  if (q5.toLowerCase() === 'no' || q5.toLocaleLowerCase()=== 'n') {
  //console.log('wrong answer');
    alert('correct,this was the last question');
    grade+=1;
  } else if (q5.toLocaleLowerCase() === 'yes' || q5.toLocaleLowerCase() === 'y') {
    alert('wrong answer,goodluck next time');
  } else{
    alert('Next time please answer yes or no');
  }

}






//q6
function ques6(){
  let day=parseInt(prompt('Can you guess the day of the month i was born in?'));
  for (let i=0;i<=3;i++) {
    if (day===27){
      alert('congrates');
      grade+=1;
      break;
    }else if (day <=23 ) {
      alert('too low');
    } else if (day >=31) {
      alert('too high');
    }
    day = parseInt(prompt('try again'));
  }
  alert('The correct answer is 27!!');
}







//q7
function ques7(){
  let places=['scotland','india','moroco','north pole','kenya','boston-usa','spain','philippines','japan','russia'];
  let answer=prompt('can you guess one country from my (would like to visit)list?');
  var atmp=5;
  myloop: while (atmp){
    atmp=atmp-1;
    for(let j=0;j<places.length;j++){
      if(answer.toLowerCase() === places[j]){
        console.log('answer is'+answer);
        alert('correct');
        grade+=1;
        break myloop;
      }
    }
    answer =prompt('try again you have '+ atmp+' left');
  }
  if (atmp===0){
    alert('correct answer is scotland,india,moroco,north pole,kenya,boston-usa,spain,philippines,japan,russia');
  }
}


alert(grade+' / 7');

alert('thank you '+thename );
