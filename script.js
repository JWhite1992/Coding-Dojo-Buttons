var count= 0;
var count1=0;
var count2=0;
var countElement = document.querySelector("#count");
var countElement1 = document.querySelector("#count1");
var countElement2 = document.querySelector("#count2");

console.log(countElement);
console.log(countElement1);
console.log(countElement2);

function add1(){
    count++;
    countElement.innerText=  count + " Like(s)";
    console.log(count);
}
function add2(){
    count1++;
    countElement1.innerText=  count1 + " Like(s)";
    console.log(count);
}
function add3(){
    count2++;
    countElement2.innerText=  count2 + " Like(s)";
    console.log(count);
}
