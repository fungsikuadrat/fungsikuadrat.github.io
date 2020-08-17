// function mat11(){
//     let mat = document.getElementById("mat11");
//     mat.className += ' matisi';
//     document.getElementById("mat12").style.display="none";
//     document.getElementById("mat13").style.display="none";
// }
// function mat12(){
//     let mat = document.getElementById("mat12");
//     mat.className += ' matisi';
//     document.getElementById("mat11").style.display="none";
//     document.getElementById("mat13").style.display="none";
// }
// function mat13(){
//     let mat = document.getElementById("mat13");
//     mat.className += ' matisi';
//     document.getElementById("mat11").style.display="none";
//     document.getElementById("mat12").style.display="none";
// }

function mat11(){
    let mat121 = document.querySelector('#mat12');
    mat121.className += "hapus";
    mat121.style.display="none";
    let mat131 = document.querySelector("#mat13");
    mat131.className += "hapus";
    mat131.style.display="none";
    let mat111 = document.querySelector("#mat11");
    mat111.style.display="inline-block";
    let mat = document.getElementById("mat11");
    mat.className += " matisi";
    
}

function mat12(){
    let mat111 = document.querySelector('#mat11');
    mat111.className += "hapus";
    mat111.style.display="none";
    let mat131 = document.querySelector("#mat13");
    mat131.className += "hapus";
    mat131.style.display="none";
    let mat = document.getElementById("mat12");
    mat.className += " matisi";
}

function mat13(){
    let mat111 = document.querySelector('#mat11');
    mat111.className += "hapus";
    mat111.style.display="none";
    let mat121 = document.querySelector("#mat12");
    mat121.className += "hapus";
    mat121.style.display="none";
    let mat = document.getElementById("mat13");
    mat.className += " matisi";
}

// let mat1 = document.querySelector(".m1");
// let mat2 = document.querySelector(".m2");
// mat1.addEventListener('click', mat11);
// let mat3 = document.querySelector(".m3");
// mat2.addEventListener('click', mat12);
// mat3.addEventListener('click', mat13);

var klick = document.getElementById("klik1");
var napakah = document.getElementById("hilang1");
klick.addEventListener('click', function(){
    napakah.classList.toggle("hide")
    console.log("bujur")
})

var klick2 = document.getElementById("kurang");
console.log(klick2)
var napakah2 = document.getElementById("hilang2");
console.log(napakah2)
klick2.addEventListener('click', function(){
    napakah2.classList.toggle("hide")
    console.log("bujur")
});


function bukakikd() {
    document.getElementById("kikd").style.height = "100%";
    document.getElementById("kikd").style.border = "2px solid #006A4E";
    
}
  
function tutupkikd() {
    document.getElementById("kikd").style.height = "0";
    document.getElementById("kikd").style.border = "none";
}

function bukaapaitu() {
    document.getElementById("apaitu").style.height = "100%";
    document.getElementById("apaitu").style.border = "2px solid #006A4E";
    
}
  
function tutupapaitu() {
    document.getElementById("apaitu").style.height = "0";
    document.getElementById("apaitu").style.border = "none";
}

function csoal1(){
    let mat121 = document.querySelector('#csoal2');
    mat121.className += "hapus";
    mat121.style.display="none";
    let mat = document.getElementById("csoal1");
    mat.className += " matisi";
    
}

function csoal2(){
    let mat111 = document.querySelector('#csoal1');
    mat111.className += "hapus";
    mat111.style.display="none";
    let mat = document.getElementById("csoal2");
    mat.className += " matisi";
}

function s21(){
    let mat121 = document.querySelector('#ss22');
    console.log(mat121);
    mat121.className = "hapus";
    mat121.style.display="none";
    let mat = document.getElementById("ss21");
    console.log(mat);
    mat.className = "matisi";
    
}

function s22(){
    let mat111 = document.querySelector('#ss21');
    console.log(mat111);
    mat111.className = "hapus";
    mat111.style.display="none";
    let mat121 = document.querySelector('#ss22');
    console.log(mat121);
    mat121.className = "matisi";
}