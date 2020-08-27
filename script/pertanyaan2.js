let vals=["0","0","0","0","0","0","0","0","0","0"];
valsa=0;
let geo=document.getElementById("pp202");
console.log("GEO "+geo);
let titiks=document.getElementById("inputitik");
let ketz=document.getElementById("ketz");
let ketz2=document.getElementById("ketz2");

function ttk1(){
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
        console.log("titks "+titiks);
    }
    for(let i=0; i<vals.length; i++){
        valsa = valsa+vals[i];
        console.log("VALSa "+valsa);
    }
    if(valsa==10){
        ketz2.classList.toggle("hilangs");
        ketz.classList.toggle("hilangs");
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
        ketz.classList.toggle("hilangs");
        geo.classList.toggle("hilangs");
        ketz2.classList.toggle("hilangs");
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
        ketz.classList.toggle("hilangs");
        geo.classList.toggle("hilangs");
        ketz2.classList.toggle("hilangs");
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
        ketz.classList.toggle("hilangs");
        geo.classList.toggle("hilangs");
        ketz2.classList.toggle("hilangs");
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
        ketz.classList.toggle("hilangs");
        geo.classList.toggle("hilangs");
        ketz2.classList.toggle("hilangs");
    }
}

//koordinat titik
function coord1(){
    valsa=0;
    let coord=document.getElementById("coord1").value;
    if(coord==""){
        document.getElementById("coord1").style.borderColor="red";
        titiks.classList.remove("hilangs");
    }
    else if(coord=="-1,0"||coord=="-1.0"){
        document.getElementById("coord1").style.borderColor="#006A4E";
        titiks.classList.toggle("hilangs");
        vals[5]= 1;
    }
    else{
        document.getElementById("coord1").style.borderColor="red";
        titiks.classList.remove("hilangs");
    }
    for(let i=0; i<vals.length; i++){
        valsa = valsa+vals[i];
        console.log("VALSa "+valsa);
    }
    // if(vals[5]==1||vals[0]==0){
    //     titiks.classList.toggle("hilangs");
    // }
    if(valsa==10){
        ketz.classList.toggle("hilangs");
        geo.classList.toggle("hilangs");
        ketz2.classList.toggle("hilangs");
    }
}
function coord2(){
    valsa=0;
    let coord=document.getElementById("coord2").value;
    if(coord==""){
        document.getElementById("coord2").style.borderColor="red";
        titiks.classList.remove("hilangs");
    }
    else if(coord=="0,9"||coord=="0.9"){
        document.getElementById("coord2").style.borderColor="#006A4E";
        titiks.classList.toggle("hilangs");
        vals[6]= 1;
    }
    else{
        document.getElementById("coord2").style.borderColor="red";
        titiks.classList.remove("hilangs");
    }
    for(let i=0; i<vals.length; i++){
        valsa = valsa+vals[i];
        console.log("VALSa "+valsa);
    }
    if(valsa==10){
        ketz.classList.toggle("hilangs");
        geo.classList.toggle("hilangs");
        ketz.classList2.toggle("hilangs");
    }
}
function coord3(){
    valsa=0;
    let coord=document.getElementById("coord3").value;
    if(coord==""){
        document.getElementById("coord3").style.borderColor="red";
        titiks.classList.remove("hilangs");
    }
    else if(coord=="1,12"||coord=="1.12"){
        document.getElementById("coord3").style.borderColor="#006A4E";
        titiks.classList.toggle("hilangs");
        vals[7]= 1;
    }
    else{
        document.getElementById("coord3").style.borderColor="red";
        titiks.classList.remove("hilangs");
    }
    for(let i=0; i<vals.length; i++){
        valsa = valsa+vals[i];
        console.log("VALSa "+valsa);
    }
    if(valsa==10){
        ketz.classList.toggle("hilangs");
        geo.classList.toggle("hilangs");
        ketz2.classList.toggle("hilangs");
    }
}
function coord4(){
    valsa=0;
    let coord=document.getElementById("coord4").value;
    if(coord==""){
        document.getElementById("coord4").style.borderColor="red";
        titiks.classList.remove("hilangs");
    }
    else if(coord=="2,9"||coord=="2.9"){
        document.getElementById("coord4").style.borderColor="#006A4E";
        titiks.classList.toggle("hilangs");
        vals[8]= 1;
    }
    else{
        document.getElementById("coord4").style.borderColor="red";
        titiks.classList.remove("hilangs");
    }
    for(let i=0; i<vals.length; i++){
        valsa = valsa+vals[i];
        console.log("VALSa "+valsa);
    }
    if(valsa==10){
        ketz.classList.toggle("hilangs");
        geo.classList.toggle("hilangs");
        ketz2.classList.toggle("hilangs");
    }
}
function coord5(){
    valsa=0;
    let coord=document.getElementById("coord5").value;
    if(coord==""){
        document.getElementById("coord5").style.borderColor="red";
        titiks.classList.remove("hilangs");
    }
    else if(coord=="3,0"||coord=="3.0"){
        document.getElementById("coord5").style.borderColor="#006A4E";
        titiks.classList.toggle("hilangs");
        vals[9]= 1;
    }
    else{
        document.getElementById("coord5").style.borderColor="red";
        titiks.classList.remove("hilangs");
    }
    for(let i=0; i<vals.length; i++){
        valsa = valsa+vals[i];
        console.log("VALSa "+valsa);
    }
    
    if(valsa==10){
        ketz.classList.toggle("hilangs");
        geo.classList.toggle("hilangs");
        ketz2.classList.toggle("hilangs");
    }
}

let p2kal1=document.getElementById("p2kal1");
let kalkul1=document.getElementById("kalkul1");
p2kal1.addEventListener('click', function(){
    kalkul1.classList.toggle("hilangkal");
});
let p2kal2=document.getElementById("p2kal2");
let kalkul2=document.getElementById("kalkul2");
p2kal2.addEventListener('click', function(){
    kalkul2.classList.toggle("hilangkal");
});

function s2p2(){
    let soal1p2=document.getElementById("soal1p2");
    let soal2p2=document.getElementById("soal2p2");

    soal1p2.classList.toggle("hilangs");
    soal2p2.classList.toggle("hilangs");
}

let vals2=["0","0","0","0","0","0","0","0","0","0"];
let valsa2=0;
let geo2=document.getElementById("pp203");
let titiks2=document.getElementById("inputitik2");
let ketz3=document.getElementById("ketz3");
let ketz4=document.getElementById("ketz4");

function t2tk1(){
    valsa2=0;
    let ttk=document.getElementById("2ttk1").value;
    console.log(ttk)
    if(ttk==""){
        document.getElementById("2ttk1").style.borderColor="red";
    }
    else if(ttk==0){
        document.getElementById("2ttk1").style.borderColor="#006A4E";
        vals2[0]= 1;
        console.log("TES VALs "+vals2);
    }
    else{
        document.getElementById("2ttk1").style.borderColor="red";
    }
    for(let i=0; i<vals2.length; i++){
        valsa2 = valsa2+vals2[i];
        console.log("TES VALSA "+valsa2);
    }
    if(valsa2==10){
        ketz3.classList.toggle("hilangs");
        ketz4.classList.toggle("hilangs");
        geo2.classList.toggle("hilangs");
    }
}
function t2tk2(){
    valsa2=0;
    let ttk=document.getElementById("2ttk2").value;
    if(ttk==""){
        document.getElementById("2ttk2").style.borderColor="red";
    }
    else if(ttk=="-6"){
        document.getElementById("2ttk2").style.borderColor="#006A4E";
        vals2[1]= 1;
    }
    else{
        document.getElementById("2ttk2").style.borderColor="red";
    }
    for(let i=0; i<vals2.length; i++){
        valsa2 = valsa2+vals2[i];
    }
    if(valsa2==10){
        ketz3.classList.toggle("hilangs");
        ketz4.classList.toggle("hilangs");
        geo2.classList.toggle("hilangs");
    }
}
function t2tk3(){
    valsa2=0;
    let ttk=document.getElementById("2ttk3").value;
    if(ttk==""){
        document.getElementById("2ttk3").style.borderColor="red";
    }
    else if(ttk=="-8"){
        document.getElementById("2ttk3").style.borderColor="#006A4E";
        vals2[2]= 1;
    }
    else{
        document.getElementById("2ttk3").style.borderColor="red";
    }
    for(let i=0; i<vals2.length; i++){
        valsa2 = valsa2+vals2[i];
    }
    if(valsa2==10){
        ketz3.classList.toggle("hilangs");
        ketz4.classList.toggle("hilangs");
        geo2.classList.toggle("hilangs");
    }
}
function t2tk4(){
    valsa2=0;
    let ttk=document.getElementById("2ttk4").value;
    if(ttk==""){
        document.getElementById("2ttk4").style.borderColor="red";
    }
    else if(ttk=="-6"){
        document.getElementById("2ttk4").style.borderColor="#006A4E";
        vals2[3]= 1;
    }
    else{
        document.getElementById("2ttk4").style.borderColor="red";
    }
    for(let i=0; i<vals2.length; i++){
        valsa2 = valsa2+vals2[i];
    }
    if(valsa2==10){
        ketz3.classList.toggle("hilangs");
        ketz4.classList.toggle("hilangs");
        geo2.classList.toggle("hilangs");
    }
}
function t2tk5(){
    valsa2=0;
    let ttk=document.getElementById("2ttk5").value;
    if(ttk==""){
        document.getElementById("2ttk5").style.borderColor="red";
    }
    else if(ttk=="0"){
        document.getElementById("2ttk5").style.borderColor="#006A4E";
        vals2[4]= 1;
    }
    else{
        document.getElementById("2ttk5").style.borderColor="red";
    }
    for(let i=0; i<vals2.length; i++){
        valsa2 = valsa2+vals2[i];
    }
    if(valsa2==10){
        ketz3.classList.toggle("hilangs");
        ketz4.classList.toggle("hilangs");
        geo2.classList.toggle("hilangs");
    }
}

//koordinat soal 2
function co2ord1(){
    valsa2=0;
    let coord=document.getElementById("2coord1").value;
    if(coord==""){
        document.getElementById("2coord1").style.borderColor="red";
        titiks2.classList.remove("hilangs");
    }
    else if(coord=="-2,0"||coord=="-2.0"){
        document.getElementById("2coord1").style.borderColor="#006A4E";
        titiks2.classList.toggle("hilangs");
        vals2[5]= 1;
    }
    else{
        document.getElementById("2coord1").style.borderColor="red";
        titiks2.classList.remove("hilangs");
    }
    for(let i=0; i<vals2.length; i++){
        valsa2 = valsa2+vals2[i];
    }
    
    if(valsa2==10){
        ketz3.classList.toggle("hilangs");
        geo2.classList.toggle("hilangs");
        ketz4.classList.toggle("hilangs");
    }
}
function co2ord2(){
    valsa2=0;
    let coord=document.getElementById("2coord2").value;
    if(coord==""){
        document.getElementById("2coord2").style.borderColor="red";
        titiks2.classList.remove("hilangs");
    }
    else if(coord=="-1,-6"||coord=="-1.-6"){
        document.getElementById("2coord2").style.borderColor="#006A4E";
        titiks2.classList.toggle("hilangs");
        vals2[6]= 1;
    }
    else{
        document.getElementById("2coord2").style.borderColor="red";
        titiks2.classList.remove("hilangs");
    }
    for(let i=0; i<vals2.length; i++){
        valsa2 = valsa2+vals2[i];
        console.log("TES VALSA "+valsa2);
    }
    
    if(valsa2==10){
        ketz3.classList.toggle("hilangs");
        geo2.classList.toggle("hilangs");
        ketz4.classList.toggle("hilangs");
    }
}
function co2ord3(){
    valsa2=0;
    let coord=document.getElementById("2coord3").value;
    if(coord==""){
        document.getElementById("2coord3").style.borderColor="red";
        titiks2.classList.remove("hilangs");
    }
    else if(coord=="0,-8"||coord=="0.-8"){
        document.getElementById("2coord3").style.borderColor="#006A4E";
        titiks2.classList.toggle("hilangs");
        vals2[7]= 1;
    }
    else{
        document.getElementById("2coord3").style.borderColor="red";
        titiks2.classList.remove("hilangs");
    }
    for(let i=0; i<vals2.length; i++){
        valsa2 = valsa2+vals2[i];
    }
    
    if(valsa2==10){
        ketz3.classList.toggle("hilangs");
        geo2.classList.toggle("hilangs");
        ketz4.classList.toggle("hilangs");
    }
}
function co2ord4(){
    valsa2=0;
    let coord=document.getElementById("2coord4").value;
    if(coord==""){
        document.getElementById("2coord4").style.borderColor="red";
        titiks2.classList.remove("hilangs");
    }
    else if(coord=="1,-6"||coord=="1.-6"){
        document.getElementById("2coord4").style.borderColor="#006A4E";
        titiks2.classList.toggle("hilangs");
        vals2[8]= 1;
    }
    else{
        document.getElementById("2coord4").style.borderColor="red";
        titiks2.classList.remove("hilangs");
    }
    for(let i=0; i<vals2.length; i++){
        valsa2 = valsa2+vals2[i];
    }
    
    if(valsa2==10){
        ketz3.classList.toggle("hilangs");
        geo2.classList.toggle("hilangs");
        ketz4.classList.toggle("hilangs");
    }
}
function co2ord5(){
    valsa2=0;
    let coord=document.getElementById("2coord5").value;
    if(coord==""){
        document.getElementById("2coord5").style.borderColor="red";
        titiks2.classList.remove("hilangs");
    }
    else if(coord=="2,0"||coord=="2.0"){
        document.getElementById("2coord5").style.borderColor="#006A4E";
        titiks2.classList.toggle("hilangs");
        vals2[9]= 1;
    }
    else{
        document.getElementById("2coord5").style.borderColor="red";
        titiks2.classList.remove("hilangs");
    }
    for(let i=0; i<vals2.length; i++){
        valsa2 = valsa2+vals2[i];
    }
    console.log("TES VALSA "+valsa2);
    if(valsa2==10){
        ketz3.classList.toggle("hilangs");
        geo2.classList.toggle("hilangs");
        ketz4.classList.toggle("hilangs");
    }
}