//function that display value 
function dis(val) 
{ 
    document.getElementById("result").value+=val 
} 

//function that evaluates the digit and return result 
function solve() 
{ 
    let x = document.getElementById("result").value 
    let y = eval(x) 
    document.getElementById("result").value = y 
} 

//function that clear the display 
function clr() 
{ 
    document.getElementById("result").value = "" 
} 

let kal = document.querySelector(".kal2");
console.log(kal);
var kal3 = document.getElementById("kal3");
kal.addEventListener('click', function(){
    kal3.classList.toggle("hilangkal");
    kal3.classList.toggle("hape");
});