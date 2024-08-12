let screen=document.querySelector(".screen");
console.log(screen);
/*let btn1=document.querySelector(".bn1");
console.log(btn1);
let btn2=document.querySelector(".bn2");
console.log(btn2);
let btn3=document.querySelector(".bn3");
console.log(btn3);
let btn4=document.querySelector(".bn4");
console.log(btn4);
let btn5=document.querySelector(".bn5");
console.log(btn5);
let btn6=document.querySelector(".bn6");
console.log(btn6);
let btn7=document.querySelector(".bn7");
console.log(btn7);
let btn8=document.querySelector(".bn8");
console.log(btn8);
let btn9=document.querySelector(".bn9");
console.log(btn9);
let btn10=document.querySelector(".bn10");
console.log(btn10);
let btn11=document.querySelector(".bn11");
console.log(btn11);
let btn12=document.querySelector(".bn12");
console.log(btn12);
let btn13=document.querySelector(".bn13");
console.log(btn13);
let btn14=document.querySelector(".bn14");
console.log(btn14);
let btn15=document.querySelector(".bn15");
console.log(btn15);
let btn16=document.querySelector(".bn16");
console.log(btn16);
let btn17=document.querySelector(".bn17");
console.log(btn17);
let btn18=document.querySelector(".bn18");
console.log(btn18);
let btn19=document.querySelector(".bn19");
console.log(btn19);
let btn20=document.querySelector(".bn20");
console.log(btn20);*/

let btns=document.querySelectorAll(".btn");

let eqBtn=document.querySelector(".bn20");

let clrBtn=document.querySelector(".bn1");
let cutBtn=document.querySelector(".bn2");



btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
       screen.innerText+= btn.textContent;
    });
});

eqBtn.addEventListener("click",()=>{
    let result=eval(screen.innerText);
    screen.innerText=result;
})

clrBtn.addEventListener("click",()=>{
    screen.innerText=""
})

cutBtn.addEventListener("click",()=>{
    let str=screen.innerText;
    let cut=str.slice(0,str.length-1);
    screen.innerText=cut;
})







