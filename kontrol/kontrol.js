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

let aktifklik = document.getElementById("aktifkuis1");
let valueaktif = document.getElementById("aktif").value;
let task = firebase.database().ref('kontrol/');
let value = "";
let id="161013";
let taskz = firebase.database().ref('kontrol/'+ id);
aktifklik.addEventListener('click', function(){
    value=valueaktif;
    let valupdate={
        nilai:value
    }
    taskz.set(valupdate)
    console.log("VALUE = "+ value);
})

let matiklik = document.getElementById("matikuis1");
let valuemati = document.getElementById("mati").value;
matiklik.addEventListener('click', function(){
    value=valuemati;
    let valupdate={
        nilai:value
    }
    taskz.set(valupdate)
    console.log("VALUE = "+ value);
})


// //Kuis 2
// let aktifklik2 = document.getElementById("aktifkuis2");
// let valueaktif2 = document.getElementById("aktif2").value;
// let task2 = firebase.database().ref('kontrol/');
// let value2 = "";
// let id2="1610132";
// let taskz2 = firebase.database().ref('kontrol/'+ id2);
// aktifklik2.addEventListener('click', function(){
//     value2=valueaktif2;
//     let valupdate2={
//         nilai:value2
//     }
//     taskz2.set(valupdate2)
//     console.log("VALUE = "+ value2);
// })

// let matiklik2 = document.getElementById("matikuis2");
// let valuemati2 = document.getElementById("mati2").value;
// matiklik.addEventListener('click', function(){
//     value2=valuemati2;
//     let valupdate2={
//         nilai:value2
//     }
//     taskz2.set(valupdate2)
//     console.log("VALUE = "+ value2);
// })

window.onload=function(){
task.on("child_added", function(data){
    let values=data.val();
    console.log("NILAI "+values.nilai)
    console.log("Task "+task)
    if(values.nilai==0){
        document.getElementById("mati").checked = true;
    }
    else if(values.nilai==1){
        document.getElementById("aktif").checked = true;
    }
});
}