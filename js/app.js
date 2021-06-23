'use strict';

let degreeQ=0;



let userType= prompt('please enter your name')
alert('Hi '+ userType);
let userInfo=prompt('is my favourite food  shawrma?yes/y no/n')

question1(userInfo);

function question1(y){ 
    switch (y.toLowerCase()){
        case"yes":
        case"y":
       // console.log('you got it!')
       alert("you got it!")
       degreeQ++;
        break;
        case"no":
        case"n":
       // console.log('you are near the certin answer')
       alert("you are near the certin answer ")
        break;
        default:
            console.log('you didn\'t eat any meal with me')
    }


}



let userInfo1=prompt('Do i love cats? yes/y no/n')
question2(userInfo1);

function question2(y){
switch(y.toLowerCase()){
    case"yes":
    case"y":
   // console.log('you are right')
   alert("you are right")
   degreeQ++;
    break;
    case"no":
    case"n":
   
   // console.log('you got a mistake')
   alert("you made a mistake ")
    break;
    default:
      //  console.log('i love cats so much try to git one')
      alert("i love cats so much try to git one")
}

}

let userInfo2=prompt('can i cook mansaf? yes/y no/n')
question3(userInfo2);

function question3(y){
switch(y.toLowerCase()){
    case"yes":
    case"y":
    //console.log('you didn\'t know me')
    alert("you didn\'t know me")
    break;
    case"no":
    case"n":
   
   // console.log('come on you know me alot')
   alert("come on you know me better")
   degreeQ++;
    break;
    default:
       // console.log('i didn\'t know how to cook mansaf yet!')
       alert("i didn\'t know how to cook mansaf yet!")
}
}

let userInfo3=prompt('do i live in Irbid? yes/y no/n')
question4(userInfo3);

function question4(y){
switch(y.toLowerCase()){
    case"yes":
    case"y":
   // console.log('bravo')
   alert("bravo")
   degreeQ++;
    break;
    case"no":
    case"n":
   
   // console.log('wrong answer')
   alert("wrong answer")
    break;
    default:
        //console.log('i live in Irbid')
        alert("i live in Irbid")
        
}
}


let userInfo4=prompt('did i study art? yes/y no/n')
question5(userInfo4);

function question5(y){
switch(y.toLowerCase()){
    case"yes":
    case"y":
   // console.log('oops you are wrong')
   alert("oops you are wrong")
   break;
    case"no":
    case"n":
    
    // console.log('you are right')
    alert("you are right")
    degreeQ++;
    break;
    default:
       // console.log('i studied communication engineer')
       alert("i studied communication engineer")
       
}
}

 question6();


 function question6(){

for (let index = 0; index < 4; index++) {
let userf1=Number(prompt('please,guess the number that i have in my mind'));

if(userf1==8){
    alert ('correct');
    degreeQ++;
    break;
}
else if (userf1<8){
    alert ('its lower than the expected');
}
else{ 
    alert('its higher than i expected')
}

if(index ==3){alert(" the number is 8")}

}
 }


    
    



let farahQ=['mansaf','shawrma','zinger'];


question7();
function question7(){
for(let i=0; i<6; i++){ 
    let ans=prompt('What is my favourite three meals?').toLowerCase();
if(ans===farahQ[0] || ans===farahQ[1]|| ans===farahQ[2]){
    alert('its correct answer');
    alert('my favourite three meals are mansaf,shawrma and zinger');
    degreeQ++;

    break;

}
else
{alert('its wrong answer');
}

if (i==5){ alert('my favourite three meals are mansaf,shawrma and zinger');}



}}


alert('Welcome'  + userType + 'you collected a  ' + degreeQ + ' from 7');

