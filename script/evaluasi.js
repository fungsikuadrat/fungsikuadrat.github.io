var firebaseConfig = {
    apiKey: "AIzaSyBUk5OBTKOCbIJaOtiEJ468i6MW0B1l4TU",
    authDomain: "cobakuis212.firebaseapp.com",
    databaseURL: "https://cobakuis212.firebaseio.com",
    projectId: "cobakuis212",
    storageBucket: "cobakuis212.appspot.com",
    messagingSenderId: "214752206020",
    appId: "1:214752206020:web:892016045a0b05df85bd91"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

window.onload=function(){
    let temp = document.querySelector(".full");
    let id = '1610132';
    let task = firebase.database().ref('kontrol/' + id);
    task.on("child_added", function(data){
        let values=data.val();
        console.log("NILAI "+values.Kuis)
        console.log("Task "+task)
        if(values.nilai==0){
            temp.classList.remove("hilang");
        }
    });
}
let nama;
let sekolah;
let kelas;
function mulaikuis(){
    MathJax.typeset();
    let indikator=0;
    nama = document.getElementById("nama").value;
    sekolah =  document.getElementById("sekolah").value;
    kelas =  document.getElementById("kelas").value;
    console.log("nama = "+nama);
    if(nama==""){
        document.getElementById("nama").style.borderColor="red";
        indikator +=1;
    }
    else{
        document.getElementById("nama").style.borderColor="black";
        document.getElementById("nama").style.borderWidth="0.9px";
    }
    if(sekolah==""){
        document.getElementById("sekolah").style.borderColor="red";
        indikator +=1;
    }
    else{
        document.getElementById("sekolah").style.borderColor="black";
        document.getElementById("sekolah").style.borderWidth="0.9px";
    }
    if(kelas==0){
        document.getElementById("kelas").style.borderColor="red";
        indikator +=1;
    }
    else{
        document.getElementById("kelas").style.borderColor="black";
        document.getElementById("kelas").style.borderWidth="0.9px";
    }
    console.log("indikator "+indikator)
    if(indikator==0){
        let element = document.getElementById("kuis0");
        element.classList.remove("hilang0");
        element.className += "kuis11";
        document.getElementById("formkuis").style.display="none";
        let element2 = document.getElementById("kuiss12");
        element2.classList.remove("hilang2");
        element2.className += "kuis12";
    }
}

let dat = new XMLHttpRequest();
dat.onreadystatechange = function () {
    var txt = " ";
    cek = [];
    jwb_benar = [];
    var no=0;

    if (dat.readyState == 4 && dat.status == 200) {
        let dataku = JSON.parse(this.responseText);

        //random urutan
        for (var x = 0; x < 100; x++) {
            // acak angka dengan batas length.data dan minimum 0
            var xx = Math.floor(Math.random() * dataku.length) + 0;
            cek.push(xx);
        }
        cek = Array.from(new Set(cek));

        console.log(cek);

        //pengambilan 10 data
        for (var y = 0; y < 20; y++) {

            var x = cek[y];
            console.log(x);

            let soal = dataku[x]['soal' + x]['lat'];
                   let a = dataku[x]['soal' + x]['a'];
                     let b = dataku[x]['soal' + x]['b'];
                     let c = dataku[x]['soal' + x]['c'];
                     let d = dataku[x]['soal' + x]['d'];
                     let bnr = dataku[x]['soal' + x]['jawab'];

            // jawaban array
            jwb_benar.push(bnr);
            no = y+1;
            txt += "<ol start='"+no+"' class=soalno>";
            txt += "<li>";
            txt += "<p>" + soal + "</p>";
            txt += "</li>";

            txt += "<p><form name=soall id='soall" + x + "'>";

            txt += "<label class=container > ";
            txt += "<input type=radio name='soal" + x + "' onclick='checkk()' value=a>"
            txt += "<span class=checkmark >"+a+"</span></label><br/>"

            txt += "<label class=container > " ;
            txt += "<input type=radio name='soal" + x + "' onclick='checkk()' value=b>"
            txt += "<span class=checkmark >"+b+"</span> </label><br/>"

            txt += "<label class=container > ";
            txt += "<input type=radio name='soal" + x + "' onclick='checkk()' value=c>"
            txt += "<span class=checkmark >"+c+"</span> </label><br/>"

            txt += "<label class=container > ";
            txt += "<input type=radio name='soal"+ x + "' onclick='checkk()' value=d>"
            txt += "<span class=checkmark >"+d+"</span> </label><br/>"
            txt += "</form></p>"

            txt += "<br><center>"
            if(y == 19){
                txt += "<div style='display:inline'><button type='button' onclick='backk()'>Sebelumnya</button>"
                txt +="<button type='button' style='cursor: unset;background-color: #bcbcbc;border-color: #bcbcbc;'>Selanjutnya</button><br/>"
                txt += "<button type='button' onclick='pengingat()'>SELESAI</button></div>"
            }
            else if(y == 0){
                txt +="<div style='display:inline'><button type='button' style='cursor: unset;background-color: #bcbcbc;border-color: #bcbcbc;'>Sebelumnya</button>"
                txt += "<button type='button' id='lanjut"+no+"' onclick='next()'>Selanjutnya</button></center></div>"
            }
            else if(y!=0||y!=19){
                txt += "<div style='display:inline'><button type='button' onclick='backk()'>Sebelumnya</button>"
                txt += "<button type='button' id='lanjut"+no+"' onclick='next()'>Selanjutnya</button></center></div>"
            }
            // txt += "<button type='button' onclick='ragu()'>Ragu - Ragu</button>"

            txt += "</ol>";
            document.getElementById("soal"+y).innerHTML = txt;
            txt = "";
        }

    }
}
dat.open('GET', '../db/evaluasi.json', true);
dat.send();


let skor1 = 0;
let n=1;
let z=0;
    // let klik = document.getElementById("lanjut"+n);
    // klik.addEventListener("click", function (){
function pengingat(){
    var txt;
    var r = confirm("Apakah kamu yakin?");
    if (r == true) {
      skor();
    }
}
function checkk(){
    let pilgan = document.getElementById("soal"+z)
    let soal_nav = document.getElementById("k"+z);
    soal_nav.style.backgroundColor="#00FF00";
}
function ragu(){
    let pilgan = document.getElementById("soal"+z)
    let soal_nav = document.getElementById("k"+z);
    soal_nav.style.backgroundColor="#A9A9A9";
}
function next(){
    console.log("z"+z);
    console.log("n"+n);
    let lanjut = document.getElementById("kuis"+z);
    // if(lanjut.className=="kuis11"){
    lanjut.classList.remove("kuis11");
    lanjut.className += "hilang"+z;
    let lanjut2 = document.getElementById("kuis"+n);
    lanjut2.classList.remove("hilang"+n);
    lanjut2.className = "kuis11";
    // let x= cek[z];
    // let form = document.querySelector("#soall"+x);
    // let data = new FormData(form);
    // let jwb = '';
    // for (const entry of data) {
    //     jwb = entry[1];
    //     console.log("jawaban dipilih = "+jwb);
    //     console.log("jawaban benar = "+jwb_benar[z]);
    //     if(jwb==jwb_benar[z]){
    //         skor1 += 10;
    //     }
    // }
    n += 1;
    z += 1;
}

function backk(){
    n -= 2;
    console.log("nn"+n);
    console.log("zz"+z);
    let lanjut3 = document.getElementById("kuis"+z);
    lanjut3.classList.remove("kuis11");
    lanjut3.className += "hilang"+z;
    let lanjut4 = document.getElementById("kuis"+n);
    lanjut4.classList.remove("hilang"+n);
    lanjut4.className += "kuis11";
    // let x= cek[z];
    // let form = document.querySelector("#soall"+x);
    // let data = new FormData(form);
    // let jwb = '';
    // for (const entry of data) {
    //     jwb = entry[1];
    //     console.log("jawaban dipilih = "+jwb);
    //     console.log("jawaban benar = "+jwb_benar[z]);
    //         if(jwb==jwb_benar[z]){
    //             skor1 += 10;
    //         }
    // }
    // console.log("SEKOR = "+skor1);

    z -= 1;
    n += 1;
}

function skor(){
    let skor1 = 0;
    let cek11 = 0;
    let pil_user = [];
    new_jwb_urut = [];
    new_jwb_urut_no = [];
    for(d=0;d<20;d++){
        let x= cek[d];
        let form = document.querySelector("#soall"+x);
        let data = new FormData(form);
        let jwb = '';
        for (const entry of data) {
            jwb = entry[1];
            pil_user.push(jwb);
            if(jwb!=''){
                cek11+=1;
            }
            // console.log("jawaban dipilih = "+jwb);
            // console.log("jawaban benar = "+jwb_benar[d]);
            if(jwb==jwb_benar[d]){
                skor1 += 5;
            }
        }
    }
    if(cek11==20){
        let lanjut = document.getElementById("kuis"+z);
        lanjut.classList.remove("kuis11");
        lanjut.className += "hilang0";
    
    let element2 = document.getElementById("kuiss12");
    element2.classList.remove("kuis12");
    element2.className += "hilang2";

    let lanjut2 = document.getElementById("hasil");
    lanjut2.classList.remove("hilang");
    lanjut2.className = "formkuis";
    document.getElementById("namaa").innerHTML=nama;
    document.getElementById("sekolahh").innerHTML=sekolah;
    document.getElementById("kelass").innerHTML=kelas;
    document.getElementById("skorr").innerHTML=skor1;
    let waktunya = waktu();
    let harinya = hari();
    for (let i = 0; i < cek.length; i++) {
        for (let j = 0; j < cek.length; j++) {
            if (i == cek[j]) {
                new_jwb_urut.push(pil_user[j]);
                new_jwb_urut_no.push(cek[j]);
            }
        }
    }
    createTask(sekolah, nama, kelas, skor1, waktunya, harinya, new_jwb_urut);
    }
    else{
        alert("Masih Ada Soal Yang Belum Dijawab!");
    }

    // console.log("PIL USEER "+pil_user);
    // console.log("NOMOR ACAKX "+cek);
    // console.log("NOMOR JAWAB URUT "+new_jwb_urut_no);
    // console.log("JAWAB URUT "+new_jwb_urut);
}

function no10(){
    n=9;
    console.log("z"+z);
    console.log("n"+n);
    let lanjut = document.getElementById("kuis"+z);
    lanjut.classList.remove("kuis11");
    lanjut.className += "hilang"+z;
    let lanjut2 = document.getElementById("kuis"+n);
    lanjut2.classList.remove("hilang"+n);
    lanjut2.className = "kuis11";
    z=9;
    n=10;
}
function no1(){
    n=0;
    console.log("z"+z);
    console.log("n"+n);
    let lanjut = document.getElementById("kuis"+z);
    lanjut.classList.remove("kuis11");
    lanjut.className += "hilang"+z;
    let lanjut2 = document.getElementById("kuis"+n);
    lanjut2.classList.remove("hilang"+n);
    lanjut2.className = "kuis11";
    z=0;
    n=1;
}
function no2(){
    n=1;
    console.log("z"+z);
    console.log("n"+n);
    let lanjut = document.getElementById("kuis"+z);
    lanjut.classList.remove("kuis11");
    lanjut.className += "hilang"+z;
    let lanjut2 = document.getElementById("kuis"+n);
    lanjut2.classList.remove("hilang"+n);
    lanjut2.className = "kuis11";
    z=1;
    n=2;
}
function no3(){
    n=2;
    console.log("z"+z);
    console.log("n"+n);
    let lanjut = document.getElementById("kuis"+z);
    lanjut.classList.remove("kuis11");
    lanjut.className += "hilang"+z;
    let lanjut2 = document.getElementById("kuis"+n);
    lanjut2.classList.remove("hilang"+n);
    lanjut2.className = "kuis11";
    z=2;
    n=3;
}
function no4(){
    n=3;
    console.log("z"+z);
    console.log("n"+n);
    let lanjut = document.getElementById("kuis"+z);
    lanjut.classList.remove("kuis11");
    lanjut.className += "hilang"+z;
    let lanjut2 = document.getElementById("kuis"+n);
    lanjut2.classList.remove("hilang"+n);
    lanjut2.className = "kuis11";
    z=3;
    n=4;
}
function no5(){
    n=4;
    console.log("z"+z);
    console.log("n"+n);
    let lanjut = document.getElementById("kuis"+z);
    lanjut.classList.remove("kuis11");
    lanjut.className += "hilang"+z;
    let lanjut2 = document.getElementById("kuis"+n);
    lanjut2.classList.remove("hilang"+n);
    lanjut2.className = "kuis11";
    z=4;
    n=5;
}
function no6(){
    n=5;
    console.log("z"+z);
    console.log("n"+n);
    let lanjut = document.getElementById("kuis"+z);
    lanjut.classList.remove("kuis11");
    lanjut.className += "hilang"+z;
    let lanjut2 = document.getElementById("kuis"+n);
    lanjut2.classList.remove("hilang"+n);
    lanjut2.className = "kuis11";
    z=5;
    n=6;
}
function no7(){
    n=6;
    console.log("z"+z);
    console.log("n"+n);
    let lanjut = document.getElementById("kuis"+z);
    lanjut.classList.remove("kuis11");
    lanjut.className += "hilang"+z;
    let lanjut2 = document.getElementById("kuis"+n);
    lanjut2.classList.remove("hilang"+n);
    lanjut2.className = "kuis11";
    z=6;
    n=7;
}
function no8(){
    n=7;
    console.log("z"+z);
    console.log("n"+n);
    let lanjut = document.getElementById("kuis"+z);
    lanjut.classList.remove("kuis11");
    lanjut.className += "hilang"+z;
    let lanjut2 = document.getElementById("kuis"+n);
    lanjut2.classList.remove("hilang"+n);
    lanjut2.className = "kuis11";
    z=7;
    n=8;
}
function no9(){
    n=8;
    console.log("z"+z);
    console.log("n"+n);
    let lanjut = document.getElementById("kuis"+z);
    lanjut.classList.remove("kuis11");
    lanjut.className += "hilang"+z;
    let lanjut2 = document.getElementById("kuis"+n);
    lanjut2.classList.remove("hilang"+n);
    lanjut2.className = "kuis11";
    z=8;
    n=9;
}

function no10(){
    n=9;
    console.log("z"+z);
    console.log("n"+n);
    let lanjut = document.getElementById("kuis"+z);
    lanjut.classList.remove("kuis11");
    lanjut.className += "hilang"+z;
    let lanjut2 = document.getElementById("kuis"+n);
    lanjut2.classList.remove("hilang"+n);
    lanjut2.className = "kuis11";
    z=9;
    n=10;
}

function no11(){
    n=10;
    console.log("z"+z);
    console.log("n"+n);
    let lanjut = document.getElementById("kuis"+z);
    lanjut.classList.remove("kuis11");
    lanjut.className += "hilang"+z;
    let lanjut2 = document.getElementById("kuis"+n);
    lanjut2.classList.remove("hilang"+n);
    lanjut2.className = "kuis11";
    z=10;
    n=11;
}

function no12(){
    n=11;
    console.log("z"+z);
    console.log("n"+n);
    let lanjut = document.getElementById("kuis"+z);
    lanjut.classList.remove("kuis11");
    lanjut.className += "hilang"+z;
    let lanjut2 = document.getElementById("kuis"+n);
    lanjut2.classList.remove("hilang"+n);
    lanjut2.className = "kuis11";
    z=11;
    n=12;
}

function no13(){
    n=12;
    console.log("z"+z);
    console.log("n"+n);
    let lanjut = document.getElementById("kuis"+z);
    lanjut.classList.remove("kuis11");
    lanjut.className += "hilang"+z;
    let lanjut2 = document.getElementById("kuis"+n);
    lanjut2.classList.remove("hilang"+n);
    lanjut2.className = "kuis11";
    z=12;
    n=13;
}

function no14(){
    n=13;
    console.log("z"+z);
    console.log("n"+n);
    let lanjut = document.getElementById("kuis"+z);
    lanjut.classList.remove("kuis11");
    lanjut.className += "hilang"+z;
    let lanjut2 = document.getElementById("kuis"+n);
    lanjut2.classList.remove("hilang"+n);
    lanjut2.className = "kuis11";
    z=13;
    n=14;
}

function no15(){
    n=14;
    console.log("z"+z);
    console.log("n"+n);
    let lanjut = document.getElementById("kuis"+z);
    lanjut.classList.remove("kuis11");
    lanjut.className += "hilang"+z;
    let lanjut2 = document.getElementById("kuis"+n);
    lanjut2.classList.remove("hilang"+n);
    lanjut2.className = "kuis11";
    z=14;
    n=15;
}

function no16(){
    n=15;
    console.log("z"+z);
    console.log("n"+n);
    let lanjut = document.getElementById("kuis"+z);
    lanjut.classList.remove("kuis11");
    lanjut.className += "hilang"+z;
    let lanjut2 = document.getElementById("kuis"+n);
    lanjut2.classList.remove("hilang"+n);
    lanjut2.className = "kuis11";
    z=15;
    n=16;
}

function no17(){
    n=16;
    console.log("z"+z);
    console.log("n"+n);
    let lanjut = document.getElementById("kuis"+z);
    lanjut.classList.remove("kuis11");
    lanjut.className += "hilang"+z;
    let lanjut2 = document.getElementById("kuis"+n);
    lanjut2.classList.remove("hilang"+n);
    lanjut2.className = "kuis11";
    z=16;
    n=17;
}

function no18(){
    n=17;
    console.log("z"+z);
    console.log("n"+n);
    let lanjut = document.getElementById("kuis"+z);
    lanjut.classList.remove("kuis11");
    lanjut.className += "hilang"+z;
    let lanjut2 = document.getElementById("kuis"+n);
    lanjut2.classList.remove("hilang"+n);
    lanjut2.className = "kuis11";
    z=17;
    n=18;
}

function no19(){
    n=18;
    console.log("z"+z);
    console.log("n"+n);
    let lanjut = document.getElementById("kuis"+z);
    lanjut.classList.remove("kuis11");
    lanjut.className += "hilang"+z;
    let lanjut2 = document.getElementById("kuis"+n);
    lanjut2.classList.remove("hilang"+n);
    lanjut2.className = "kuis11";
    z=18;
    n=19;
}

function no20(){
    n=19;
    console.log("z"+z);
    console.log("n"+n);
    let lanjut = document.getElementById("kuis"+z);
    lanjut.classList.remove("kuis11");
    lanjut.className += "hilang"+z;
    let lanjut2 = document.getElementById("kuis"+n);
    lanjut2.classList.remove("hilang"+n);
    lanjut2.className = "kuis11";
    z=19;
    n=20;
}
// menyimpan ke dalam databasenya

var d = new Date();
var t = d.getTime();
var counter = t;

// ambil jamnya
window.setTimeout("waktu()", 1000);

function waktu() {
    var tanggal = new Date();
    setTimeout("waktu()", 1000);
    return (tanggal.getHours() + ":" + tanggal.getMinutes() + ":" + tanggal.getSeconds());
}

// harinya
function hari() {
    tanggallengkap = new String();
    namahari = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu");
    namahari = namahari.split(" ");
    namabulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
    namabulan = namabulan.split(" ");
    tgl = new Date();
    hari = tgl.getDay();
    tanggal = tgl.getDate();
    bulan = tgl.getMonth();
    tahun = tgl.getFullYear();
    tanggallengkap = namahari[hari] + ", " + tanggal + " " + namabulan[bulan] + " " + tahun;
    return (tanggallengkap);
}




function createTask(sekolah, nama, kelas, nilai, waktunya, hari, jwb) {
    counter += 1;
    var task = {
        id: counter,
        sekolah: sekolah,
        nama: nama,
        kelas: kelas,
        nilai: nilai,
        waktu: waktunya,
        hari: hari,
        jawabannya: jwb
    }

    let db = firebase.database().ref("evaluasi/" + counter);
    db.set(task);

}
// function skor() {
//     let skor=0;
//     let jwb;
//     let tex = "";
//     for (let i = 0; i < 10; i++) {
//         let x = cek[i];
//         console.log("benar "+jwb_benar[i])
//         for(let d=0;d<10;d++){
//         if (cek[i]==d){
//             jwb = document.querySelectorAll("input[name='soal"+d+"']");
//             console.log("jwb "+jwb);
//         }
//         let selectedValue;
//             for (let rb of jwb) {
//                 if (rb.checked) {
//                     selectedValue = rb.value;}}}
//         // if (cek[i]==d){
//         // if (jwb[d].checked) {
//         //     jwb = jwb[i].value;
//         //     console.log("jwb2 "+jwb);
//         // }}
//         // jwb = document.querySelectorAll("input[name='soal"+x+"']");
//         // console.log("jwb2 "+jwb);
//         console.log("jwb2 "+selectedValue)
//         if (selectedValue == jwb_benar[i]) {
//             //console.log("benar");
//             skor += 10;
//     }
//     console.log("nyekor "+i+" "+skor);
// }
// }

// let skor1 = 0;
// function skor(){
//     for (let d=0; d<10; d++){
//         let x= cek[d];
//         let form = document.querySelector("soall"+x);
//         let data = new FormData(form);
//         let jwb = '';
//         for (const entry of data) {
//             jwb = entry[1];
//             console.log("jawaban dipilih = "+jwb);
//             console.log("jawaban benar = "+jwb_benar[d]);
//             if(jwb==jwb_benar[d]){
//                 skor1 += 10;
//             }
//         }
//     }
// }