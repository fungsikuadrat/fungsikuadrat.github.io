function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  let data1;
  let data2;
  let data3;
  let data4;
  function drop1(ev) {
    ev.preventDefault();
    data1 = ev.dataTransfer.getData("text");
    console.log(data1);
    ev.target.appendChild(document.getElementById(data1));
  }

  function drop2(ev) {
    ev.preventDefault();
    data2 = ev.dataTransfer.getData("text");
    console.log(data2);
    ev.target.appendChild(document.getElementById(data2));
  }

  function drop3(ev) {
    ev.preventDefault();
    data3 = ev.dataTransfer.getData("text");
    console.log(data3);
    ev.target.appendChild(document.getElementById(data3));
  }

  function drop4(ev) {
    ev.preventDefault();
    data4 = ev.dataTransfer.getData("text");
    console.log(data4);
    ev.target.appendChild(document.getElementById(data4));

  }

  function cekjawab(){
    let sk=0;
    if(data1 != "variabel"){
      document.getElementById("kotak1").style.borderColor="red";
    }
    else{
      sk +=1;
    }

    if(data2 != "koefisien1"){
      document.getElementById("kotak2").style.borderColor="red";
    }
    else{
      sk +=1;
    }

    if(data3 != "koefisien2"){
      document.getElementById("kotak3").style.borderColor="red";
    }
    else{
      sk +=1;
    }

    if(data4 != "konstanta"){
      document.getElementById("kotak4").style.borderColor="red";
    }
    else{
      sk +=1;
    }
    console.log(sk);
    if(sk==4){
      document.getElementById("sel").innerHTML = "<form method='get' action='/materi1.html'><button action='materi1.html'> Selanjutnya </button></form>";
    }
    else{
      alert("Jawaban kamu masih salah, coba periksa lagi!");
    }

  }
