// var myHeading=document.querySelector('h2');
// myHeading.innerHTML='Hello Word!';
// document.querySelector('img').onclick=function(){
//     alert('Ouch! Stop poking me!');
// }
var myImage= document.querySelector('img')
myImage.onclick=function(){
    var mySrc= myImage.getAttribute('src');
    if(mySrc === 'image/sea.jpg'){
        myImage.setAttribute('src','image/sea1.jpg');
    }else{
        myImage.setAttribute('src','image/sea.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');
function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.innerHTML = 'Welcome, ' + myName;
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Welcome, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}

