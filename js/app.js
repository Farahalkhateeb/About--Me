let userType= prompt('please enter your name')
console.log('Hi'+ userType);
let userInfo=prompt('does my favourite food is shawrma?')
switch (userInfo.toLowerCase){
    case"yes":
    console.log('you got it!')
    break;
    case"no":
    console.log('you are near the certin answer')
    break;
    default:
        console.log("you didn\'t eat with me any meal")
}
let userInfo1=prompt('Do i love cats?')
switch(userInfo1.toLowerCase){
    case"yes":
    console.log('you are right')
    break;
    case"no":
    console.log('you got a mistake')
    break;
    default:
        console.log('i love cats so much try to git one')

}
let userInfo2=prompt('can i cook mansaf?')
switch(userInfo2.toLowerCase){
    case"yes":
    console.log('you didn\'t know me')
    break;
    case"no":
    console.log('come on you know me alot')
    break;
    default:
        console.log('i didn\'t know how to cook mansaf yet!')
}

let userInfo3=prompt('do i live in Irbid?')
switch(userInfo3.toLowerCase){
    case"yes":
    console.log('bravo')
    break;
    case"no":
    console.log('wrong answer')
    break;
    default:
        console.log('i live in Irbid')
}
let userInfo4=prompt('Do I studied art?')
switch(userInfo4.toLowerCase){
    case"yes":
    console.log('oops you are wrong')
    case"no":
    console.log('you are right')
    default:
        console.log('i studied communication engineer')
}