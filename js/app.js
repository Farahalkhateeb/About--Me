let userType= prompt('please enter your name')
console.log('Hi'+ userType);
let userInfo=prompt('does my favourite food is shawrma?yes/y no/n')
switch (userInfo.toLowerCase){
    case"yes":
    case"y":
   // console.log('you got it!')
   alert("you got it!")
    break;
    case"no":
    case"n":
   // console.log('you are near the certin answer')
   alert("you are near the certin answer ")
    break;
    default:
        console.log('you didn\'t eat any meal with me')
let userInfo1=prompt('Do i love cats? yes/y no/n')
switch(userInfo1.toLowerCase){
    case"yes":
    case"y":
   // console.log('you are right')
   alert("you are right")
    break;
    case"no":
    case"n":
   
   // console.log('you got a mistake')
   alert("you got a mistake ")
    break;
    default:
      //  console.log('i love cats so much try to git one')
      alert("i love cats so much try to git one")

}
let userInfo2=prompt('can i cook mansaf? yes/y no/n')
switch(userInfo2.toLowerCase){
    case"yes":
    case"y":
    //console.log('you didn\'t know me')
    alert("you didn\'t know me")
    break;
    case"no":
    case"n":
   
   // console.log('come on you know me alot')
   alert("come on you know me alot")
    break;
    default:
       // console.log('i didn\'t know how to cook mansaf yet!')
       alert("i didn\'t know how to cook mansaf yet!")
}

let userInfo3=prompt('do i live in Irbid? yes/y no/n')
switch(userInfo3.toLowerCase){
    case"yes":
    case"y":
   // console.log('bravo')
   alert("bravo")
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
let userInfo4=prompt('Do I studied art? yes/y no/n')
switch(userInfo4.toLowerCase){
    case"yes":
    case"y":
   // console.log('oops you are wrong')
   alert("oops you are wrong")
    case"no":
    case"n":
   
   // console.log('you are right')
   alert("you are right")
    default:
       // console.log('i studied communication engineer')
       alert("i studied communication engineer")
       
}


let userf1=Number(prompt('please,guess the number that in my mind'));
for (let index = 0; index < 4; index++) {
    switch(userf1){
        case 8 :
            alert ('correct');
            case <8 :
                alert ('its low than the expected');
                case >8:
                    alert('its higher than i expected')

    }
    
}
let farahQ=['mansaf','shawrma','zinger'];
let ans=prompt('What is my favourite three meals?').toLowerCase();
for(let i=0; i<5; i++){ 
if(ans===farahQ[0] || ans===farahQ[1]|| ans===farahQ[2]){
    alert('its correct answer');
    alert('my favourite three meals are mansaf,shawrma and zinger');
    degreeQ++;

    break;

}
else{alert('its wrong answer');
}

ans =prompt('What is my favourite three meals?').toLowerCase();

}
alert('Welcome'  + userType + 'you collected a  ' + degreeQ + 'from 7');

