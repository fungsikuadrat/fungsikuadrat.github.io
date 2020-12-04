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

let aktifklik2 = document.getElementById("aktifquiz1");
let valueaktif2 = document.getElementById("aktif1").value;
let task2 = firebase.database().ref('kontrolq1/');
let value2 = "";
let id2="1610131";
let taskz2 = firebase.database().ref('kontrolq1/' +id2);
// console.log("EVAL "+taskz)
aktifklik2.addEventListener('click', function(){
    value=valueaktif2;
    let valupdate={
        nilai:value
    }
    taskz2.set(valupdate)
    console.log("VALUE = "+ value);
})

let matiklik2 = document.getElementById("matiquiz1");
let valuemati2 = document.getElementById("mati1").value;
matiklik2.addEventListener('click', function(){
    value=valuemati2;
    let valupdate={
        nilai:value
    }
    taskz2.set(valupdate)
    console.log("VALUE = "+ value);
})


window.onload=function(){
task.on("child_added", function(data){
    let values=data.val();
    console.log("NILAI "+values.nilai)
    console.log("Task "+task2)
    if(values.nilai==0){
        document.getElementById("mati1").checked = true;
    }
    else if(values.nilai==1){
        document.getElementById("aktif1").checked = true;
    }
});
}