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

window.onload = function () {
    readlah();


}

function readlah() {
    var task = firebase.database().ref("kontrol/");

    let tmp = document.querySelector('.hasz');
    console.log(tmp);

    task.on("child_added", function (data) {
        var taskvalue = data.val();

        if (taskvalue.nilai == 0) {
            tmp.innerHTML += `<center><p style="font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;"> ${taskvalue.Kuis} </p > <span onclick="update(${taskvalue.id},'${taskvalue.Kuis}','${taskvalue.nilai}')">
            Aktifkan</span><span style="background-color:white;color:black;cursor:unset;">Matikan</span></center>`;
        } else {
            tmp.innerHTML += `<center><p style="font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;"> ${taskvalue.Kuis} </p > <span style="background-color:white;color:black;cursor:unset;">Aktifkan</span><span onclick="update(${taskvalue.id},'${taskvalue.Kuis}','${taskvalue.nilai}')">
            Matikan</span></center>`;
        //     tmp.innerHTML += `<div class = "bgkontrol" ><p class="baris"> ${taskvalue.Kuis} </p > <label class="switch  kirinih"> <input type = "checkbox" checked onclick="update(${taskvalue.id},'${taskvalue.Kuis}','${taskvalue.nilai}')">
        // <span class = "slider round" > </span> </label> </div>`;
        }


    });

}


function update(id, Kuis, nilai) {

    if (nilai == 0) {
        nilaibaru = 1;
    } else {
        nilaibaru = 0;
    }
    var taskUpdate = {
        Kuis: Kuis,
        id: id,
        nilai: nilaibaru
    }

    let db = firebase.database().ref("kontrol/" + id);
    db.set(taskUpdate);
    window.location = "kontrolkuis.html";

}