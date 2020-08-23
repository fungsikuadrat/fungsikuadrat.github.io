var strip = document.querySelector(".pointerr");
console.log(strip);
var kiri = document.getElementById("menukiri");
strip.addEventListener('click', function(){
    kiri.classList.toggle("munculkiri");
});

function buka() {
  document.getElementById("menukiri").style.width = "250px";
}

function tutup() {
  
  kiri.classList.remove("munculkiri");
}

function buka1() {
  document.getElementById("p1").style.height = "85%";
}

function tutup1() {
  document.getElementById("p1").style.height = "0";
}