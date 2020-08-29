// menguhubungkan ke firebase
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

window.load = function () {


}

let kmplanId = [];


let kuisnya = document.getElementById('kuis');


let tmp = document.querySelector('.disini');
tmp.innerHTML = "";
kelasnya = document.getElementById('kelas');
// sekolah = document.getElementById('sekolah');
let kelasfix = '';
let sekolahfix = '';

let cek11 = 0;
// kuisfix = kuisnya.value;


function readlah() {
    // kuisfix = kuisnya.value;
    // console.log(kuisfix);
    var task = firebase.database().ref('hasil/');

    tmp.innerHTML = "";
    if (kelasnya.value == "1") {
        kelasfix = "IX A";
    } else if (kelasnya.value == "2") {
        kelasfix = "IX B";
    } else if (kelasnya.value == "3") {
        kelasfix = "IX C";
    } else if (kelasnya.value == "4") {
        kelasfix = "IX D";
    } else if (kelasnya.value == "5") {
        kelasfix = "IX E";
    } else if (kelasnya.value == "6") {
        kelasfix = "IX F";
    } else if (kelasnya.value == "7") {
        kelasfix = "IX G";
    }

    if (kelasfix != '') {
        task.orderByChild("nama").on("child_added", function (data) {
            // task.on("child_added", function (data) {
            var taskvalue = data.val();
           
            if (kelasfix == taskvalue.kelas) {
                tmp.innerHTML += `<tr>
                            <td class="ukr1">${taskvalue.nama}</td>
                            <td class="ukr3">${taskvalue.kelas}</td>
                            <td class="ukr1">${taskvalue.sekolah}</td>
                            <td class="ukr3">${taskvalue.nilai}</td>
                            <td class="ukr2">${taskvalue.hari}</td>
                            <td class="ukr2">${taskvalue.waktu}</td>
                            <td class = "hps" onclick ="hapus(${taskvalue.id})"> Hapus </td>
                        </tr>`;
                kmplanId.push(taskvalue.id);
            }

            if (cek11 == 0) {
                let ssps = document.querySelector('.ha');
                ssps.innerHTML += '';
                ssps.innerHTML += `<div class="cah_semua">Hapus Data</div>`;
                cek11 += 1;

                let klikkkk = document.querySelector('.cah_semua');
                klikkkk.addEventListener('click', function () {
                    hapussemua(kmplanId);
                })
            }

        });
    } else {
        alert('Tentukan filter pencarian');
    }
}

window.onload = function () {
    kelasnya = document.getElementById('kelas');
    // sekolah = document.getElementById('sekolah');
    kuis = document.getElementById('kuis');
    kelasnya.value = value = "0";
    // sekolah.value = value = "0";
    // kuis.value = value = "kuis1/";
}



function hapus(id) {
    var yakin = confirm("Apakah kamu yakin menghapus data ?");
    if (yakin) {
        deletetask(id);
    } else {

    }
}

function deletetask(id) {
    var task = firebase.database().ref('hasil/' + id);
    task.remove();
    tmp.innerHTML = "";
    readlah();
}


function hapussemua(id) {
    var yakin = confirm("Apakah kamu yakin menghapus data ?");
    if (yakin) {
        deletesemua(id);
    } else {

    }
}

function deletesemua(id) {
    console.log(kuisfix);
    for (let i = 0; i < id.length; i++) {
        var task = firebase.database().ref(kuisfix + id[i]);
        task.remove();
    }
    tmp.innerHTML = "";
    readlah();
}


// download data

let download = document.querySelector('.download');
download.addEventListener('click', function () {
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('table_wrapper');
    var table_html = table_div.outerHTML.replace(/ /g, '%20');

    var a = document.createElement('a');
    a.href = data_type + ', ' + table_html;
    a.download = 'exported_table_' + Math.floor((Math.random() * 9999999) + 1000000) + '.xls';
    a.click();
})