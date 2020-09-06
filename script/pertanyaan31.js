
// let jawaban1="";
// let jawaban2="";
// let jawaban3="";
// let jawaban4="";
function ipuncak1(){
    let ipuncak1=document.getElementById("ipuncak1");
    let wpuncak1=document.getElementById("wpuncak1");
    // let korpuncak=document.getElementById("korpuncaknav1");
    if(ipuncak1.value==""){
        wpuncak1.classList.remove("hilang");
        // ipuncak1.style.borderColor="red";
        // korpuncak.style.backgroundColor="red";
        // korpuncak.style.color="white";
    }
    else if(ipuncak1.value=="-2x^2-4x+6"){
        wpuncak1.classList.toggle("hilang");
        // ipuncak1.style.borderColor="#006A4E";
        // korpuncak.style.backgroundColor="#00FF00";
        // korpuncak.style.color="#006A4E";
    }
    else{
        wpuncak1.classList.remove("hilang");
        // ipuncak1.style.borderColor="red";
        // korpuncak.style.backgroundColor="red";
        // korpuncak.style.color="white";
    }
}

function cekipuncak1(){
    MathJax.typeset();
    let ipuncak1=document.getElementById("ipuncak1");
    let jawaban1=document.getElementById("jawab1");
    let korpuncak=document.getElementById("korpuncaknav1")
    if(ipuncak1.value==""){
        ipuncak1.style.borderColor="red";
        jawaban1.innerHTML="Kamu tidak menginputkan jawaban!";
        korpuncak.style.backgroundColor="red";
        korpuncak.style.color="white";
    }
    else if(ipuncak1.value=="-2x^2-4x+6"){
        ipuncak1.style.borderColor="#006A4E";
        jawaban1.innerHTML="Jawaban anda : \\[f(x)="+ipuncak1.value+"\\] <img src=../img/benar.png width=25px height=25px>";
        korpuncak.style.backgroundColor="#00FF00";
        korpuncak.style.color="#006A4E";
    }
    else{
        ipuncak1.style.borderColor="red";
        jawaban1.innerHTML="Jawaban anda : \\[f(x)"+ipuncak1.value+"\\] <img src=../img/salah.png width=25px height=25px>";
        korpuncak.style.backgroundColor="red";
        korpuncak.style.color="white";
    }
    MathJax.typeset();
}

function korpuncak2(){
    let ipuncak1=document.getElementById("ipuncak1");
    let jawaban1=document.getElementById("jawab1");
    let korpuncak=document.getElementById("korpuncaknav1");
    let korpuncak1=document.getElementById("korpuncak1");
    let korpuncak2=document.getElementById("korpuncak2");
    if(ipuncak1.value==""){
        ipuncak1.style.borderColor="red";
        jawaban1.innerHTML="Kamu tidak menginputkan jawaban!";
        korpuncak.style.backgroundColor="red";
        korpuncak.style.color="white";
    }
    else if(ipuncak1.value=="-2x^2-4x+6"){
        ipuncak1.style.borderColor="#006A4E";
        jawaban1.innerHTML="Jawaban anda : \\[f(x)="+ipuncak1.value+"\\] <img src=../img/benar.png width=25px height=25px>";
        korpuncak.style.backgroundColor="#00FF00";
        korpuncak.style.color="#006A4E";
    }
    else{
        ipuncak1.style.borderColor="red";
        jawaban1.innerHTML="Jawaban anda : \\[f(x)"+ipuncak1.value+"\\] <img src=../img/salah.png width=25px height=25px>";
        korpuncak.style.backgroundColor="red";
        korpuncak.style.color="white";
    }
    korpuncak1.classList.toggle("hilang");
    korpuncak2.classList.toggle("hilang");
    MathJax.typeset();
}


//Pertanyaan no 2
function ipuncak2(){
    let ipuncak2=document.getElementById("ipuncak2");
    let wpuncak2=document.getElementById("wpuncak2");
    if(ipuncak2.value==""){
        wpuncak2.classList.remove("hilang");
        // ipuncak2.style.borderColor="red";
    }
    else if(ipuncak2.value=="-x^2+6x-8"){
        wpuncak2.classList.toggle("hilang");
        // ipuncak2.style.borderColor="#006A4E";
    }
    else{
        wpuncak2.classList.remove("hilang");
        // ipuncak2.style.borderColor="red";
    }
}

function cekipuncak2(){
    let ipuncak2=document.getElementById("ipuncak2");
    let jawaban2=document.getElementById("jawab2");
    let korpuncak=document.getElementById("korpuncaknav2")
    if(ipuncak2.value==""){
        ipuncak2.style.borderColor="red";
        jawaban2.innerHTML="Kamu tidak menginputkan jawaban!";
        korpuncak.style.backgroundColor="red";
        korpuncak.style.color="white";
    }
    else if(ipuncak2.value=="-x^2+6x-8"){
        ipuncak2.style.borderColor="#006A4E";
        jawaban2.innerHTML="Jawaban anda : \\[f(x)="+ipuncak2.value+"\\] <img src=../img/benar.png width=25px height=25px>";
        korpuncak.style.backgroundColor="#00FF00";
        korpuncak.style.color="#006A4E";
    }
    else{
        ipuncak2.style.borderColor="red";
        jawaban2.innerHTML="Jawaban anda : \\[f(x)"+ipuncak2.value+"\\] <img src=../img/salah.png width=25px height=25px>";
        korpuncak.style.backgroundColor="red";
        korpuncak.style.color="white";
    }
    MathJax.typeset();
}

function backkorpuncak1(){
    let ipuncak2=document.getElementById("ipuncak2");
    let jawaban2=document.getElementById("jawab2");
    let korpuncak=document.getElementById("korpuncaknav2");
    let korpuncak1=document.getElementById("korpuncak1");
    let korpuncak2=document.getElementById("korpuncak2");
    if(ipuncak2.value==""){
        ipuncak2.style.borderColor="red";
        jawaban2.innerHTML="Kamu tidak menginputkan jawaban!";
        korpuncak.style.backgroundColor="red";
        korpuncak.style.color="white";
    }
    else if(ipuncak2.value=="-x^2+6x-8"){
        ipuncak2.style.borderColor="#006A4E";
        jawaban2.innerHTML="Jawaban anda : \\[f(x)="+ipuncak2.value+"\\] <img src=../img/benar.png width=25px height=25px>";
        korpuncak.style.backgroundColor="#00FF00";
        korpuncak.style.color="#006A4E";
    }
    else{
        ipuncak2.style.borderColor="red";
        jawaban2.innerHTML="Jawaban anda : \\[f(x)"+ipuncak2.value+"\\] <img src=../img/salah.png width=25px height=25px>";
        korpuncak.style.backgroundColor="red";
        korpuncak.style.color="white";
    }
    korpuncak1.classList.toggle("hilang");
    korpuncak2.classList.toggle("hilang");
    MathJax.typeset();
}

function korpuncak3(){
    let ipuncak2=document.getElementById("ipuncak2");
    let jawaban2=document.getElementById("jawab2");
    let korpuncak=document.getElementById("korpuncaknav2");
    let korpuncak3=document.getElementById("korpuncak3");
    let korpuncak2=document.getElementById("korpuncak2");
    if(ipuncak2.value==""){
        ipuncak2.style.borderColor="red";
        jawaban2.innerHTML="Kamu tidak menginputkan jawaban!";
        korpuncak.style.backgroundColor="red";
        korpuncak.style.color="white";
    }
    else if(ipuncak2.value=="-x^2+6x-8"){
        ipuncak2.style.borderColor="#006A4E";
        jawaban2.innerHTML="Jawaban anda : \\[f(x)="+ipuncak2.value+"\\] <img src=../img/benar.png width=25px height=25px>";
        korpuncak.style.backgroundColor="#00FF00";
        korpuncak.style.color="#006A4E";
    }
    else{
        ipuncak2.style.borderColor="red";
        jawaban2.innerHTML="Jawaban anda : \\[f(x)"+ipuncak2.value+"\\] <img src=../img/salah.png width=25px height=25px>";
        korpuncak.style.backgroundColor="red";
        korpuncak.style.color="white";
    }
    korpuncak3.classList.toggle("hilang");
    korpuncak2.classList.toggle("hilang");
    MathJax.typeset();
}


//Pertanyaan no 3
function ipuncak3(){
    let ipuncak3=document.getElementById("ipuncak3");
    let wpuncak3=document.getElementById("wpuncak3");
    if(ipuncak3.value==""){
        wpuncak3.classList.remove("hilang");
        // ipuncak2.style.borderColor="red";
    }
    else if(ipuncak3.value=="3x^2-6x-9"){
        wpuncak3.classList.toggle("hilang");
        // ipuncak2.style.borderColor="#006A4E";
    }
    else{
        wpuncak3.classList.remove("hilang");
        // ipuncak2.style.borderColor="red";
    }
}

function cekipuncak3(){
    let ipuncak3=document.getElementById("ipuncak3");
    let jawaban3=document.getElementById("jawab3");
    let korpuncak=document.getElementById("korpuncaknav3");
    if(ipuncak3.value==""){
        ipuncak3.style.borderColor="red";
        jawaban3.innerHTML="Kamu tidak menginputkan jawaban!";
        korpuncak.style.backgroundColor="red";
        korpuncak.style.color="white";
    }
    else if(ipuncak3.value=="3x^2-6x-9"){
        ipuncak3.style.borderColor="#006A4E";
        jawaban3.innerHTML="Jawaban anda : \\[f(x)="+ipuncak3.value+"\\] <img src=../img/benar.png width=25px height=25px>";
        korpuncak.style.backgroundColor="#00FF00";
        korpuncak.style.color="#006A4E";
    }
    else{
        ipuncak3.style.borderColor="red";
        jawaban3.innerHTML="Jawaban anda : \\[f(x)"+ipuncak3.value+"\\] <img src=../img/salah.png width=25px height=25px>";
        korpuncak.style.backgroundColor="red";
        korpuncak.style.color="white";
    }
    MathJax.typeset();
}

function backkorpuncak2(){
    let ipuncak3=document.getElementById("ipuncak3");
    let jawaban3=document.getElementById("jawab3");
    let korpuncak=document.getElementById("korpuncaknav3");
    let korpuncak3=document.getElementById("korpuncak3");
    let korpuncak2=document.getElementById("korpuncak2");
    if(ipuncak3.value==""){
        ipuncak3.style.borderColor="red";
        jawaban3.innerHTML="Kamu tidak menginputkan jawaban!";
        korpuncak.style.backgroundColor="red";
        korpuncak.style.color="white";
    }
    else if(ipuncak3.value=="3x^2-6x-9"){
        ipuncak3.style.borderColor="#006A4E";
        jawaban3.innerHTML="Jawaban anda : \\[f(x)="+ipuncak3.value+"\\] <img src=../img/benar.png width=25px height=25px>";
        korpuncak.style.backgroundColor="#00FF00";
        korpuncak.style.color="#006A4E";
    }
    else{
        ipuncak3.style.borderColor="red";
        jawaban3.innerHTML="Jawaban anda : \\[f(x)"+ipuncak3.value+"\\] <img src=../img/salah.png width=25px height=25px>";
        korpuncak.style.backgroundColor="red";
        korpuncak.style.color="white";
    }
    korpuncak3.classList.toggle("hilang");
    korpuncak2.classList.toggle("hilang");
    MathJax.typeset();
}

function korpuncak4(){
    let ipuncak3=document.getElementById("ipuncak3");
    let jawaban3=document.getElementById("jawab3");
    let korpuncak=document.getElementById("korpuncaknav3");
    let korpuncak3=document.getElementById("korpuncak3");
    let korpuncak4=document.getElementById("korpuncak4");
    if(ipuncak3.value==""){
        ipuncak3.style.borderColor="red";
        jawaban3.innerHTML="Kamu tidak menginputkan jawaban!";
        korpuncak.style.backgroundColor="red";
        korpuncak.style.color="white";
    }
    else if(ipuncak3.value=="3x^2-6x-9"){
        ipuncak3.style.borderColor="#006A4E";
        jawaban3.innerHTML="Jawaban anda : \\[f(x)="+ipuncak3.value+"\\] <img src=../img/benar.png width=25px height=25px>";
        korpuncak.style.backgroundColor="#00FF00";
        korpuncak.style.color="#006A4E";
    }
    else{
        ipuncak3.style.borderColor="red";
        jawaban3.innerHTML="Jawaban anda : \\[f(x)"+ipuncak3.value+"\\] <img src=../img/salah.png width=25px height=25px>";
        korpuncak.style.backgroundColor="red";
        korpuncak.style.color="white";
    }
    korpuncak3.classList.toggle("hilang");
    korpuncak4.classList.toggle("hilang");
    MathJax.typeset();
}

function ipuncak4(){
    let ipuncak4=document.getElementById("ipuncak4");
    let wpuncak4=document.getElementById("wpuncak4");
    if(ipuncak4.value==""){
        wpuncak4.classList.remove("hilang");
        // ipuncak2.style.borderColor="red";
    }
    else if(ipuncak4.value=="x^2-4x+3"){
        wpuncak4.classList.toggle("hilang");
        // ipuncak2.style.borderColor="#006A4E";
    }
    else{
        wpuncak4.classList.remove("hilang");
        // ipuncak2.style.borderColor="red";
    }
}
function cekipuncak4(){
    let ipuncak4=document.getElementById("ipuncak4");
    let jawaban4=document.getElementById("jawab4");
    let korpuncak=document.getElementById("korpuncaknav4");
    if(ipuncak4.value==""){
        ipuncak4.style.borderColor="red";
        jawaban3.innerHTML="Kamu tidak menginputkan jawaban!";
        korpuncak.style.backgroundColor="red";
        korpuncak.style.color="white";
    }
    else if(ipuncak4.value=="x^2-4x+3"){
        ipuncak4.style.borderColor="#006A4E";
        jawaban4.innerHTML="Jawaban anda : \\[f(x)="+ipuncak4.value+"\\] <img src=../img/benar.png width=25px height=25px>";
        korpuncak.style.backgroundColor="#00FF00";
        korpuncak.style.color="#006A4E";
    }
    else{
        ipuncak4.style.borderColor="red";
        jawaban4.innerHTML="Jawaban anda : \\[f(x)"+ipuncak4.value+"\\] <img src=../img/salah.png width=25px height=25px>";
        korpuncak.style.backgroundColor="red";
        korpuncak.style.color="white";
    }
    MathJax.typeset();
}

function backkorpuncak3(){
    let ipuncak4=document.getElementById("ipuncak4");
    let jawaban4=document.getElementById("jawab4");
    let korpuncak=document.getElementById("korpuncaknav4");
    let korpuncak3=document.getElementById("korpuncak3");
    let korpuncak4=document.getElementById("korpuncak4");
    if(ipuncak4.value==""){
        ipuncak4.style.borderColor="red";
        jawaban3.innerHTML="Kamu tidak menginputkan jawaban!";
        korpuncak.style.backgroundColor="red";
        korpuncak.style.color="white";
    }
    else if(ipuncak4.value=="x^2-4x+3"){
        ipuncak4.style.borderColor="#006A4E";
        jawaban4.innerHTML="Jawaban anda : \\[f(x)="+ipuncak4.value+"\\] <img src=../img/benar.png width=25px height=25px>";
        korpuncak.style.backgroundColor="#00FF00";
        korpuncak.style.color="#006A4E";
    }
    else{
        ipuncak4.style.borderColor="red";
        jawaban4.innerHTML="Jawaban anda : \\[f(x)"+ipuncak4.value+"\\] <img src=../img/salah.png width=25px height=25px>";
        korpuncak.style.backgroundColor="red";
        korpuncak.style.color="white";
    }
    korpuncak3.classList.toggle("hilang");
    korpuncak4.classList.toggle("hilang");
    MathJax.typeset();
}