function hilangs(){
    let hilang=document.getElementById("koma1");
    hilang.classList.toggle("hilang");

}
function ceksimetri1(){
    let potongx1=document.getElementById("potongx1");
    let potongx2=document.getElementById("potongx2");
    let potongy1=document.getElementById("potongy1");
    let simetrii=document.getElementById("simetrii");
    let puncaak=document.getElementById("puncaak");
    let simetrinav1=document.getElementById("simetrinav1");
    let val,val1,val2,val3,val4,val5=0;
    //x1
    if(potongx1.value==""){
        potongx1.style.borderColor="red";
    }
    else if(potongx1.value=="1.0"||potongx1.value=="1,0"){
        potongx1.style.borderColor="#006A4E";
        val1=1;
    }
    else{
        potongx1.style.borderColor="red";
    }

    //x2
    if(potongx2.value==""){
        potongx2.style.borderColor="red";
    }
    else if(potongx2.value=="3.0"||potongx1.value=="3,0"){
        potongx2.style.borderColor="#006A4E";
        val2=1;
    }
    else{
        potongx2.style.borderColor="red";
    }

    //y
    if(potongy1.value==""){
        potongy1.style.borderColor="red";
    }
    else if(potongy1.value=="0.3"||potongx1.value=="0,3"){
        potongy1.style.borderColor="#006A4E";
        val3=1;
    }
    else{
        potongy1.style.borderColor="red";
    }

    //simetri
    if(simetrii.value==""){
        simetrii.style.borderColor="red";
    }
    else if(simetrii.value=="2"){
        simetrii.style.borderColor="#006A4E";
        val4=1;
    }
    else{
        simetrii.style.borderColor="red";
    }

    //titikpuncak
    if(puncaak.value==""){
        puncaak.style.borderColor="red";
    }
    else if(puncaak.value=="-1.2"||puncaak.value=="-1,2"){
        puncaak.style.borderColor="#006A4E";
        val5=1;
    }
    else{
        puncaak.style.borderColor="red";
    }
    val=val1+val2+val3+val4+val5;
    if(val==5){
        simetrinav1.style.backgroundColor="#00FF00";
        simetrinav1.style.color="#006A4E";
    }
    else{
        simetrinav1.style.backgroundColor="red";
        simetrinav1.style.color="white";
    }
}
function simetri2(){
    let potongx1=document.getElementById("potongx1");
    let potongx2=document.getElementById("potongx2");
    let potongy1=document.getElementById("potongy1");
    let simetrii=document.getElementById("simetrii");
    let puncaak=document.getElementById("puncaak");
    let simetrinav1=document.getElementById("simetrinav1");
    let val,val1,val2,val3,val4,val5=0;
    //x1
    if(potongx1.value==""){
        potongx1.style.borderColor="red";
    }
    else if(potongx1.value=="1.0"||potongx1.value=="1,0"){
        potongx1.style.borderColor="#006A4E";
        val1=1;
    }
    else{
        potongx1.style.borderColor="red";
    }

    //x2
    if(potongx2.value==""){
        potongx2.style.borderColor="red";
    }
    else if(potongx2.value=="3.0"||potongx1.value=="3,0"){
        potongx2.style.borderColor="#006A4E";
        val2=1;
    }
    else{
        potongx2.style.borderColor="red";
    }

    //y
    if(potongy1.value==""){
        potongy1.style.borderColor="red";
    }
    else if(potongy1.value=="0.3"||potongx1.value=="0,3"){
        potongy1.style.borderColor="#006A4E";
        val3=1;
    }
    else{
        potongy1.style.borderColor="red";
    }

    //simetri
    if(simetrii.value==""){
        simetrii.style.borderColor="red";
    }
    else if(simetrii.value=="2"){
        simetrii.style.borderColor="#006A4E";
        val4=1;
    }
    else{
        simetrii.style.borderColor="red";
    }

    //titikpuncak
    if(puncaak.value==""){
        puncaak.style.borderColor="red";
    }
    else if(puncaak.value=="-1.2"||puncaak.value=="-1,2"){
        puncaak.style.borderColor="#006A4E";
        val5=1;
    }
    else{
        puncaak.style.borderColor="red";
    }
    val=val1+val2+val3+val4+val5;
    if(val==5){
        simetrinav1.style.backgroundColor="#00FF00";
        simetrinav1.style.color="#006A4E";
    }
    else{
        simetrinav1.style.backgroundColor="red";
        simetrinav1.style.color="white";
    }
    let simetri1=document.getElementById("simetri1");
    let simetri2=document.getElementById("simetri2");
    simetri1.classList.toggle("hilang");
    simetri2.classList.toggle("hilang");
}


//soal 2
function ceksimetri2(){
    let bola=document.getElementById("bola1");
    let meter=document.getElementById("meter1");
    let simetrinav2=document.getElementById("simetrinav2");
    let val,val1,val2=0;
    if(bola.value==""){
        bola.style.borderColor="red"
    }
    else if(bola.value=2){
        bola.style.borderColor="#006A4E";
        val1=1;
    }
    else{
        bola.style.borderColor="red"
    }

    if(meter.value==""){
        meter.style.borderColor="red"
    }
    else if(meter.value=30){
        meter.style.borderColor="#006A4E";
        val2=1;
    }
    else{
        meter.style.borderColor="red"
    }

    val=val1+val2;
    if(val==2){
        simetrinav2.style.backgroundColor="#00FF00";
        simetrinav2.style.color="#006A4E";
    }
    else{
        simetrinav2.style.backgroundColor="red";
        simetrinav2.style.color="white";
    }
}
function backsimetri1(){
    let bola=document.getElementById("bola1");
    let meter=document.getElementById("meter1");
    let simetrinav2=document.getElementById("simetrinav2");
    let val,val1,val2=0;
    if(bola.value==""){
        bola.style.borderColor="red"
    }
    else if(bola.value=2){
        bola.style.borderColor="#006A4E";
        val1=1;
    }
    else{
        bola.style.borderColor="red"
    }

    if(meter.value==""){
        meter.style.borderColor="red"
    }
    else if(meter.value=30){
        meter.style.borderColor="#006A4E";
        val2=1;
    }
    else{
        meter.style.borderColor="red"
    }

    val=val1+val2;
    if(val==2){
        simetrinav2.style.backgroundColor="#00FF00";
        simetrinav2.style.color="#006A4E";
    }
    else{
        simetrinav2.style.backgroundColor="red";
        simetrinav2.style.color="white";
    }
    let simetri1=document.getElementById("simetri1");
    let simetri2=document.getElementById("simetri2");
    simetri1.classList.toggle("hilang");
    simetri2.classList.toggle("hilang");
}

function simetri23(){
    let bola=document.getElementById("bola1");
    let meter=document.getElementById("meter1");
    let simetrinav2=document.getElementById("simetrinav2");
    let val,val1,val2=0;
    if(bola.value==""){
        bola.style.borderColor="red"
    }
    else if(bola.value=2){
        bola.style.borderColor="#006A4E";
        val1=1;
    }
    else{
        bola.style.borderColor="red"
    }

    if(meter.value==""){
        meter.style.borderColor="red"
    }
    else if(meter.value=30){
        meter.style.borderColor="#006A4E";
        val2=1;
    }
    else{
        meter.style.borderColor="red"
    }

    val=val1+val2;
    if(val==2){
        simetrinav2.style.backgroundColor="#00FF00";
        simetrinav2.style.color="#006A4E";
    }
    else{
        simetrinav2.style.backgroundColor="red";
        simetrinav2.style.color="white";
    }
    let simetri3=document.getElementById("simetri3");
    let simetri2=document.getElementById("simetri2");
    simetri3.classList.toggle("hilang");
    simetri2.classList.toggle("hilang");
}

function ceksimetri3(){
    let sumbuy1=document.getElementById("sumbuy1");
    let simetrinav3=document.getElementById("simetrinav3");
    if(sumbuy1.value==""){
        sumbuy1.style.borderColor="red";
        simetrinav3.style.backgroundColor="red";
        simetrinav3.style.color="white"
    }
    else if(sumbuy1.value=="0.8"||sumbuy1.value=="0,8"){
        sumbuy1.style.borderColor="#006A4E";
        simetrinav3.style.backgroundColor="#00FF00";
        simetrinav3.style.color="#006A4E";
    }
    else{
        sumbuy1.style.borderColor="red"
        simetrinav3.style.backgroundColor="red";
        simetrinav3.style.color="white"
    }
}
function backsimetri2(){
    let sumbuy1=document.getElementById("sumbuy1");
    let simetrinav3=document.getElementById("simetrinav3");
    if(sumbuy1.value==""){
        sumbuy1.style.borderColor="red";
        simetrinav3.style.backgroundColor="red";
        simetrinav3.style.color="white"
    }
    else if(sumbuy1.value=="0.8"||sumbuy1.value=="0,8"){
        sumbuy1.style.borderColor="#006A4E";
        simetrinav3.style.backgroundColor="#00FF00";
        simetrinav3.style.color="#006A4E";
    }
    else{
        sumbuy1.style.borderColor="red"
        simetrinav3.style.backgroundColor="red";
        simetrinav3.style.color="white"
    }
    let simetri3=document.getElementById("simetri3");
    let simetri2=document.getElementById("simetri2");
    simetri3.classList.toggle("hilang");
    simetri2.classList.toggle("hilang");
}
function simetri24(){
    let sumbuy1=document.getElementById("sumbuy1");
    let simetrinav3=document.getElementById("simetrinav3");
    if(sumbuy1.value==""){
        sumbuy1.style.borderColor="red";
        simetrinav3.style.backgroundColor="red";
        simetrinav3.style.color="white"
    }
    else if(sumbuy1.value=="0.8"||sumbuy1.value=="0,8"){
        sumbuy1.style.borderColor="#006A4E";
        simetrinav3.style.backgroundColor="#00FF00";
        simetrinav3.style.color="#006A4E";
    }
    else{
        sumbuy1.style.borderColor="red"
        simetrinav3.style.backgroundColor="red";
        simetrinav3.style.color="white"
    }
    let simetri3=document.getElementById("simetri3");
    let simetri4=document.getElementById("simetri4");
    simetri3.classList.toggle("hilang");
    simetri4.classList.toggle("hilang");
}

function ceksimetri4(){
    let terbesar=document.getElementById("terbesar4");
    let simetrinav4=document.getElementById("simetrinav4");

    if(terbesar.value==""){
        terbesar.style.borderColor="red";
        simetrinav4.style.backgroundColor="red";
        simetrinav4.style.color="white";
    }
    else if(terbesar.value==121){
        terbesar.style.borderColor="#006A4E";
        simetrinav4.style.backgroundColor="#00FF00";
        simetrinav4.style.color="#006A4E";
    }
    else{
        terbesar.style.borderColor="red";
        simetrinav4.style.color="white";
    }
}

function backsimetri3(){
    let terbesar=document.getElementById("terbesar4");
    let simetrinav4=document.getElementById("simetrinav4");

    if(terbesar.value==""){
        terbesar.style.borderColor="red";
        simetrinav4.style.backgroundColor="red";
        simetrinav4.style.color="white";
    }
    else if(terbesar.value==121){
        terbesar.style.borderColor="#006A4E";
        simetrinav4.style.backgroundColor="#00FF00";
        simetrinav4.style.color="#006A4E";
    }
    else{
        terbesar.style.borderColor="red";
        simetrinav4.style.color="white";
    }
    let simetri3=document.getElementById("simetri3");
    let simetri4=document.getElementById("simetri4");
    simetri3.classList.toggle("hilang");
    simetri4.classList.toggle("hilang");
}