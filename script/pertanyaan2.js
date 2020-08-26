let vals=[];
valsa=0;
let geo=document.getElementById("pp202");
console.log("GEO "+geo);

function ttk1(){
    console.log(geo);
    console.log("OKE")
    valsa=0;
    let ttk=document.getElementById("ttk1").value;
    console.log(ttk)
    if(ttk==""){
        document.getElementById("ttk1").style.borderColor="red";
    }
    else if(ttk==0){
        document.getElementById("ttk1").style.borderColor="#006A4E";
        vals[0]= 1;
    }
    else{
        document.getElementById("ttk1").style.borderColor="red";
    }
    for(let i=0; i<vals.length; i++){
        valsa = valsa+vals[i];
        console.log("VALSa "+valsa);
    }
    if(valsa==10){
        geo.classList.toggle("hilangs");
    }
    
}
function ttk2(){
    valsa=0;
    let ttk=document.getElementById("ttk2").value;
    if(ttk==9){
        document.getElementById("ttk2").style.borderColor="#006A4E";
        vals[1]= 1;
    }
    else{
        document.getElementById("ttk2").style.borderColor="red";
    }
    console.log(vals.lenght)
    for(let i=0; i<vals.length; i++){
        valsa = valsa+vals[i];
        console.log("VALSa "+valsa);
    }
    if(valsa==10){
        geo.classList.toggle("hilangs");
    }

}
function ttk3(){
    valsa=0;
    let ttk=document.getElementById("ttk3").value;
    if(ttk==12){
        document.getElementById("ttk3").style.borderColor="#006A4E";
        vals[2]= 1;
    }
    else{
        document.getElementById("ttk3").style.borderColor="red";
    }
    for(let i=0; i<vals.lenght; i++){
        valsa = valsa+vals[i];
        console.log("VALSa "+valsa);
    }
    if(valsa==10){
        geo.classList.toggle("hilangs");
    }
}
function ttk4(){
    valsa=0;
    let ttk=document.getElementById("ttk4").value;
    if(ttk==9){
        document.getElementById("ttk4").style.borderColor="#006A4E";
        vals[3]= 1;
    }
    else{
        document.getElementById("ttk4").style.borderColor="red";
    }
    for(let i=0; i<vals.length; i++){
        valsa = valsa+vals[i];
        console.log("VALSa "+valsa);
    }
    if(valsa==10){
        geo.classList.toggle("hilangs");
    }
}
function ttk5(){
    valsa=0;
    let ttk=document.getElementById("ttk5").value;
    if(ttk==""){
        document.getElementById("ttk5").style.borderColor="red";
    }
    else if(ttk==0){
        document.getElementById("ttk5").style.borderColor="#006A4E";
        vals[4]= 1;
    }
    else{
        document.getElementById("ttk5").style.borderColor="red";
    }
    for(let i=0; i<vals.length; i++){
        valsa = valsa+vals[i];
        console.log("VALSa "+valsa);
    }
    if(valsa==10){
        geo.classList.toggle("hilangs");
    }
}

//koordinat titik
function coord1(){
    valsa=0;
    let coord=document.getElementById("coord1").value;
    if(coord==""){
        document.getElementById("coord1").style.borderColor="red";
    }
    else if(coord=="-1,0"||coord=="-1.0"){
        document.getElementById("coord1").style.borderColor="#006A4E";
        vals[5]= 1;
    }
    else{
        document.getElementById("coord1").style.borderColor="red";
    }
    for(let i=0; i<vals.length; i++){
        valsa = valsa+vals[i];
        console.log("VALSa "+valsa);
    }
    if(valsa==10){
        geo.classList.toggle("hilangs");
    }
}
function coord2(){
    valsa=0;
    let coord=document.getElementById("coord2").value;
    if(coord==""){
        document.getElementById("coord2").style.borderColor="red";
    }
    else if(coord=="0,9"||coord=="0.9"){
        document.getElementById("coord2").style.borderColor="#006A4E";
        vals[6]= 1;
    }
    else{
        document.getElementById("coord2").style.borderColor="red";
    }
    for(let i=0; i<vals.length; i++){
        valsa = valsa+vals[i];
        console.log("VALSa "+valsa);
    }
    if(valsa==10){
        geo.classList.toggle("hilangs");
    }
}
function coord3(){
    valsa=0;
    let coord=document.getElementById("coord3").value;
    if(coord==""){
        document.getElementById("coord3").style.borderColor="red";
    }
    else if(coord=="1,12"||coord=="1.12"){
        document.getElementById("coord3").style.borderColor="#006A4E";
        vals[7]= 1;
    }
    else{
        document.getElementById("coord3").style.borderColor="red";
    }
    for(let i=0; i<vals.length; i++){
        valsa = valsa+vals[i];
        console.log("VALSa "+valsa);
    }
    if(valsa==10){
        geo.classList.toggle("hilangs");
    }
}
function coord4(){
    valsa=0;
    let coord=document.getElementById("coord4").value;
    if(coord==""){
        document.getElementById("coord4").style.borderColor="red";
    }
    else if(coord=="2,9"||coord=="2.9"){
        document.getElementById("coord4").style.borderColor="#006A4E";
        vals[8]= 1;
    }
    else{
        document.getElementById("coord4").style.borderColor="red";
    }
    for(let i=0; i<vals.length; i++){
        valsa = valsa+vals[i];
        console.log("VALSa "+valsa);
    }
    if(valsa==10){
        geo.classList.toggle("hilangs");
    }
}
function coord5(){
    valsa=0;
    let coord=document.getElementById("coord5").value;
    if(coord==""){
        document.getElementById("coord5").style.borderColor="red";
    }
    else if(coord=="3,0"||coord=="3.0"){
        document.getElementById("coord5").style.borderColor="#006A4E";
        vals[9]= 1;
    }
    else{
        document.getElementById("coord5").style.borderColor="red";
    }
    for(let i=0; i<vals.length; i++){
        valsa = valsa+vals[i];
        console.log("VALSa "+valsa);
    }
    if(valsa==10){
        geo.classList.toggle("hilangs");
    }
}

