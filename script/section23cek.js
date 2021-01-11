function koefisienx2(){
    let benar = "<img src='../img/benar.png' width='30' height='30'>";
    let salah = "<img src='../img/salah.png' width='30' height='30'>";
    let atas = document.getElementById("alebih").value;
    let bawah = document.getElementById("akurang").value;

    if(atas=="atas"){
        document.getElementById("ceklebih").innerHTML=benar;
    }
    else{
        document.getElementById("ceklebih").innerHTML=salah;
    }

    if(bawah=="bawah"){
        document.getElementById("cekkurang").innerHTML=benar;
    }
    else{
        document.getElementById("cekkurang").innerHTML=salah;
    }
}

function diskriminan(){
    let benar = "<img src='../img/benar.png' width='30' height='30'>";
    let salah = "<img src='../img/salah.png' width='30' height='30'>";
    let satu = document.getElementById("satu").value;
    let dua = document.getElementById("dua").value;
    let tidak = document.getElementById("tidak").value;

    if(satu=="satu"){
        document.getElementById("cekdis2").innerHTML=benar;
    }
    else{
        document.getElementById("cekdis2").innerHTML=salah;
    }

    if(dua=="dua"){
        document.getElementById("cekdis1").innerHTML=benar;
    }
    else{
        document.getElementById("cekdis1").innerHTML=salah;
    }

    if(tidak=="tidak"){
        document.getElementById("cekdis3").innerHTML=benar;
    }
    else{
        document.getElementById("cekdis3").innerHTML=salah;
    }
}

function koefisienx(){
    let benar = "<img src='../img/benar.png' width='30' height='30'>";
    let salah = "<img src='../img/salah.png' width='30' height='30'>";
    let positif = document.getElementById("clebih").value;
    let negatif = document.getElementById("ckurang").value;

    if(positif=="positif"){
        document.getElementById("ccek1").innerHTML=benar;
    }
    else{
        document.getElementById("ccek1").innerHTML=salah;
    }

    if(negatif=="negatif"){
        document.getElementById("ccek2").innerHTML=benar;
    }
    else{
        document.getElementById("ccek2").innerHTML=salah;
    }
}

function koefisien(){
    let benar = "<img src='../img/benar.png' width='30' height='30'>";
    let salah = "<img src='../img/salah.png' width='30' height='30'>";
    let koef1 = document.getElementById("1simetri").value;
    let koef2 = document.getElementById("2simetri").value;
    let koef3 = document.getElementById("3simetri").value;
    let koef4 = document.getElementById("4simetri").value;

    if(koef1=="negatif"){
        document.getElementById("koef1").innerHTML=benar;
    }
    else{
        document.getElementById("koef1").innerHTML=salah;
    }

    if(koef2=="positif"){
        document.getElementById("koef2").innerHTML=benar;
    }
    else{
        document.getElementById("koef2").innerHTML=salah;
    }

    if(koef3=="negatif"){
        document.getElementById("koef3").innerHTML=benar;
    }
    else{
        document.getElementById("koef3").innerHTML=salah;
    }

    if(koef4=="positif"){
        document.getElementById("koef4").innerHTML=benar;
    }
    else{
        document.getElementById("koef4").innerHTML=salah;
    }
}