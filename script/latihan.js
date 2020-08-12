//Materi 1
function next2(){
	// let c3= 1+document.getElementById("jwb3c").value;
	// let b4= 1+document.getElementById("jwb4b").value;
	let skora1 =0;
    // let ceka1= " ";
	// let ceka2= " ";
	// let ceka3= " ";
    // let ceka4= " ";
    // let cekb1= " ";
	// let cekb2= " ";
	// let cekb3= " ";
    // let cekb4= " ";
    // let cekc1= " ";
	// let cekc2= " ";
	// let cekc3= " ";
    // let cekc4= " ";
    
	if (document.getElementById("jwb1a").value==1 ) {
		// ceka1 = "<img alt='Image' src='img/benar.png' style='width:30px;height:30px;'/>";
		skora1 += 1;
	  } 
	//   else {
	// 	ceka1 = "<img alt='Image' src='img/salah.png' style='width:30px;height:30px;'/>";
	// 	alert("Jawaban kamu masih salah!");
    //   }
      if (document.getElementById("jwb1b").value==-2 ) {
		// cekb1 = "<img alt='Image' src='img/benar.png' style='width:30px;height:30px;'/>";
		skora1 += 1;
	  } 
	//   else {
	// 	cekb1 = "<img alt='Image' src='img/salah.png' style='width:30px;height:30px;'/>";
    //   }
      if (document.getElementById("jwb1c").value==-3 ) {
		// cekc1 = "<img alt='Image' src='img/benar.png' style='width:30px;height:30px;'/>";
		skora1 += 1;
	  }
	//    else {
	// 	cekc1 = "<img alt='Image' src='img/salah.png' style='width:30px;height:30px;'/>";
	//   }
	if(skora1==3){
		document.getElementById("nonav1").style.backgroundColor="#00FF00";
		document.getElementById("nonav1").style.color="#006A4E";
		document.getElementById("lat1").style.height = "0";
		// document.getElementById("lat1").style.width = "0";
		document.getElementById("lat1").style.zIndex = "0";
		
		document.getElementById("lat2").style.height = "210px";
		document.getElementById("lat2").style.zIndex = "1";
	}
	else{
		document.getElementById("nonav1").style.backgroundColor="red";
		document.getElementById("nonav1").style.color="white";
		document.getElementById("lat1").style.height = "0";
		document.getElementById("lat1").style.zIndex = "0";
		
		document.getElementById("lat2").style.height = "210px";
		document.getElementById("lat2").style.zIndex = "1";
	}
	}
function back1(){
	let skor2=0;
	if (document.getElementById("jwb2a").value==-2 ) {
		skor2 += 1;
	  } 
      if (document.getElementById("jwb2b").value==2 ) {
		skor2 += 1;
	  }
      if (document.getElementById("jwb2c").value==4 ) {
		skor2 += 1;
	  }

	  if(skor2==3){
		document.getElementById("nonav2").style.backgroundColor="#00FF00";
		document.getElementById("nonav2").style.color="#006A4E";
		// document.getElementById("lat1").style.display="inline-block";
		document.getElementById("lat2").style.height = "0";
		// document.getElementById("lat1").style.width = "0";
		document.getElementById("lat2").style.zIndex = "0";
		
		document.getElementById("lat1").style.height = "210px";
		document.getElementById("lat1").style.zIndex = "1";
	}
	else{
		document.getElementById("nonav2").style.backgroundColor="red";
		document.getElementById("nonav2").style.color="white";
		document.getElementById("lat2").style.height = "0";
		// document.getElementById("lat1").style.width = "0";
		document.getElementById("lat2").style.zIndex = "0";
		
		document.getElementById("lat1").style.height = "210px";
		document.getElementById("lat1").style.zIndex = "1";
	}
}

function next3(){
	let skor2=0;
	if (document.getElementById("jwb2a").value==-2 ) {
		skor2 += 1;
	  } 
      if (document.getElementById("jwb2b").value==2 ) {
		skor2 += 1;
	  }
      if (document.getElementById("jwb2c").value==4 ) {
		skor2 += 1;
	  }

	  if(skor2==3){
		document.getElementById("nonav2").style.backgroundColor="#00FF00";
		document.getElementById("nonav2").style.color="#006A4E";
		document.getElementById("lat2").style.height = "0";
		// document.getElementById("lat1").style.width = "0";
		document.getElementById("lat2").style.zIndex = "0";
		
		document.getElementById("lat3").style.height = "210px";
		document.getElementById("lat3").style.zIndex = "1";
	}
	else{
		document.getElementById("nonav2").style.backgroundColor="red";
		document.getElementById("nonav2").style.color="white";
		document.getElementById("lat2").style.height = "0";
		// document.getElementById("lat1").style.width = "0";
		document.getElementById("lat2").style.zIndex = "0";
		
		document.getElementById("lat3").style.height = "210px";
		document.getElementById("lat3").style.zIndex = "1";
	}
}

function back2(){
	let c3= 1+document.getElementById("jwb3c").value;
	let skor3=0;
	  if (document.getElementById("jwb3a").value==-1 ) {
		skor3 += 1;
	  }
      if (document.getElementById("jwb3b").value==5 ) {
		skor3 += 1;
	  }
      if (c3==10 ) {
		skor3 += 1;
	  }
	  if(skor3==3){
		document.getElementById("nonav3").style.backgroundColor="#00FF00";
		document.getElementById("nonav3").style.color="#006A4E";
		document.getElementById("lat3").style.height = "0";
		// document.getElementById("lat1").style.width = "0";
		document.getElementById("lat3").style.zIndex = "0";
		
		document.getElementById("lat2").style.height = "210px";
		document.getElementById("lat2").style.zIndex = "1";
	}
	else{
		document.getElementById("nonav3").style.backgroundColor="red";
		document.getElementById("nonav3").style.color="white";
		document.getElementById("lat3").style.height = "0";
		// document.getElementById("lat1").style.width = "0";
		document.getElementById("lat3").style.zIndex = "0";
		
		document.getElementById("lat2").style.height = "210px";
		document.getElementById("lat2").style.zIndex = "1";
	}
}

function next4(){
	let c3= 1+document.getElementById("jwb3c").value;
	let skor3=0;
	  if (document.getElementById("jwb3a").value==-1 ) {
		skor3 += 1;
	  }
      if (document.getElementById("jwb3b").value==5 ) {
		skor3 += 1;
	  }
      if (c3==10 ) {
		skor3 += 1;
	  }
	  if(skor3==3){
		document.getElementById("nonav3").style.backgroundColor="#00FF00";
		document.getElementById("nonav3").style.color="#006A4E";
		document.getElementById("lat3").style.height = "0";
		// document.getElementById("lat1").style.width = "0";
		document.getElementById("lat3").style.zIndex = "0";
		
		document.getElementById("lat4").style.height = "210px";
		document.getElementById("lat4").style.zIndex = "1";
	}
	else{
		document.getElementById("nonav3").style.backgroundColor="red";
		document.getElementById("nonav3").style.color="white";
		document.getElementById("lat3").style.height = "0";
		// document.getElementById("lat1").style.width = "0";
		document.getElementById("lat3").style.zIndex = "0";
		
		document.getElementById("lat4").style.height = "210px";
		document.getElementById("lat4").style.zIndex = "1";
	}
}
function back3(){
	let b4= 1+document.getElementById("jwb4b").value;
	let skor4=0;
	if (document.getElementById("jwb4a").value==-2 ) {
		skor4 += 1;
	} 
	if (b4==10 ) {
		skor4 += 1;
	} 
	if (document.getElementById("jwb4c").value==8 ) {
		skor4 += 1;
	}
	if(skor4==3){
		document.getElementById("nonav4").style.backgroundColor="#00FF00";
		document.getElementById("nonav4").style.color="#006A4E";
		document.getElementById("lat4").style.height = "0";
		// document.getElementById("lat1").style.width = "0";
		document.getElementById("lat4").style.zIndex = "0";
		
		document.getElementById("lat3").style.height = "210px";
		document.getElementById("lat3").style.zIndex = "1";
	}
	else{
		document.getElementById("nonav4").style.backgroundColor="red";
		document.getElementById("nonav4").style.color="white";
		document.getElementById("lat4").style.height = "0";
		// document.getElementById("lat1").style.width = "0";
		document.getElementById("lat4").style.zIndex = "0";
		
		document.getElementById("lat3").style.height = "210px";
		document.getElementById("lat3").style.zIndex = "1";
	}
}
function next5(){
	let b4= 1+document.getElementById("jwb4b").value;
	let skor4=0;
	if (document.getElementById("jwb4a").value==-2 ) {
		skor4 += 1;
	} 
	if (b4==10 ) {
		skor4 += 1;
	} 
	if (document.getElementById("jwb4c").value==8 ) {
		skor4 += 1;
	}
	if(skor4==3){
		document.getElementById("nonav4").style.backgroundColor="#00FF00";
		document.getElementById("nonav4").style.color="#006A4E";
	}
	else{
		document.getElementById("nonav4").style.backgroundColor="red";
		document.getElementById("nonav4").style.color="white";
	}
}
//Materi 2
let isi = new Object;
function randomx(){
	let x;
	let start = 1, end = 10;
	for(let i=0; i<4;i++){
		x = (Math.random() * (end - start) + start) ^ 0;
		isi[i] = x;
	}
	document.getElementById("x0").innerHTML=isi[0];
	document.getElementById("xx0").innerHTML=isi[0];
	console.log(isi[0]);
	console.log(isi[1]);
	console.log(isi[2]);
	console.log(isi[3]);	
}

// function latihan2(){
// 	let cek = new Object;
// 	let a = new Object;
// 	let b = new Object;
// 	let c = new Object;
// 	a[0]= -1;
// 	a[1]=5;
// 	a[2]=3;
// 	a[3]=1;

// 	b[0]=2;
// 	b[1]=3;
// 	b[2]=0;
// 	b[3]=1;

// 	c[0]=3;
// 	c[1]=-2;
// 	c[2]=-1;
// 	c[3]=-2;
// 	for(let i=0; i<4; i++){
// 		let aa=((isi[i]*isi[i])*(a[i]));
// 		let bb=(b[i]*isi[i]);
// 		let hasil=aa+bb+c[i];
// 		if (document.getElementById("jwb"+i).value==hasil ) {
// 			cek[i] = "<img alt='Image' src='img/benar.png' style='width:30px;height:30px;'/>";
// 		  } else {
// 			cek[i] = "<img alt='Image' src='img/salah.png' style='width:30px;height:30px;'/>";
// 		  }
// 	}
// 	for(let i=0; i<4; i++){
// 		document.getElementById("cek"+i).innerHTML=cek[i];
// 	}
	
// }

let cek = new Object;
let a = new Object;
let b = new Object;
let c = new Object;
a[0]= -1;
a[1]=5;
a[2]=3;
a[3]=1;

b[0]=2;
b[1]=3;
b[2]=0;
b[3]=1;

c[0]=3;
c[1]=-2;
c[2]=-1;
c[3]=-2;
function next22(){
	let aa=((isi[0]*isi[0])*(a[0]));
	let bb=(b[0]*isi[0]);
	let hasil=aa+bb+c[0];
	if (document.getElementById("jwb0").value==hasil ){
		document.getElementById("nonav21").style.backgroundColor="#00FF00";
		document.getElementById("nonav21").style.color="#006A4E";
		document.getElementById("lat21").style.height = "0";
		document.getElementById("lat21").style.zIndex = "0";
		
		document.getElementById("lat22").style.height = "180px";
		document.getElementById("lat22").style.zIndex = "1";
		document.getElementById("x1").innerHTML=isi[1];
		document.getElementById("xx1").innerHTML=isi[1];
	}
	else{
		document.getElementById("nonav21").style.backgroundColor="red";
		document.getElementById("nonav21").style.color="white";
		document.getElementById("lat21").style.height = "0";
		document.getElementById("lat21").style.zIndex = "0";
		
		document.getElementById("lat22").style.height = "180px";
		document.getElementById("lat22").style.zIndex = "1";
		document.getElementById("x1").innerHTML=isi[1];
		document.getElementById("xx1").innerHTML=isi[1];
	}
}

function back21(){
	let aa=((isi[1]*isi[1])*(a[1]));
	let bb=(b[1]*isi[1]);
	let hasil=aa+bb+c[1];
	if (document.getElementById("jwb1").value==hasil ){
		document.getElementById("nonav22").style.backgroundColor="#00FF00";
		document.getElementById("nonav22").style.color="#006A4E";
		document.getElementById("lat22").style.height = "0";
		document.getElementById("lat22").style.zIndex = "0";
		
		document.getElementById("lat21").style.height = "180px";
		document.getElementById("lat21").style.zIndex = "1";
	}
	else{
		document.getElementById("nonav22").style.backgroundColor="red";
		document.getElementById("nonav22").style.color="white";
		document.getElementById("lat22").style.height = "0";
		document.getElementById("lat22").style.zIndex = "0";
		
		document.getElementById("lat21").style.height = "180px";
		document.getElementById("lat21").style.zIndex = "1";
	}
}

function next23(){
	let aa=((isi[1]*isi[1])*(a[1]));
	let bb=(b[1]*isi[1]);
	let hasil=aa+bb+c[1];
	if (document.getElementById("jwb1").value==hasil ){
		document.getElementById("nonav22").style.backgroundColor="#00FF00";
		document.getElementById("nonav22").style.color="#006A4E";
		document.getElementById("lat22").style.height = "0";
		document.getElementById("lat22").style.zIndex = "0";
		
		document.getElementById("lat23").style.height = "180px";
		document.getElementById("lat23").style.zIndex = "1";
		document.getElementById("x2").innerHTML=isi[2];
		document.getElementById("xx2").innerHTML=isi[2];
	}
	else{
		document.getElementById("nonav22").style.backgroundColor="red";
		document.getElementById("nonav22").style.color="white";
		document.getElementById("lat22").style.height = "0";
		document.getElementById("lat22").style.zIndex = "0";
		
		document.getElementById("lat23").style.height = "180px";
		document.getElementById("lat23").style.zIndex = "1";
		document.getElementById("x2").innerHTML=isi[2];
		document.getElementById("xx2").innerHTML=isi[2];
	}
}

function back22(){
	let aa=((isi[2]*isi[2])*(a[2]));
	let bb=(b[2]*isi[2]);
	let hasil=aa+bb+c[2];
	if (document.getElementById("jwb2").value==hasil ){
		document.getElementById("nonav23").style.backgroundColor="#00FF00";
		document.getElementById("nonav23").style.color="#006A4E";
		document.getElementById("lat23").style.height = "0";
		document.getElementById("lat23").style.zIndex = "0";
		
		document.getElementById("lat22").style.height = "180px";
		document.getElementById("lat22").style.zIndex = "1";
	}
	else{
		document.getElementById("nonav23").style.backgroundColor="red";
		document.getElementById("nonav23").style.color="white";
		document.getElementById("lat23").style.height = "0";
		document.getElementById("lat23").style.zIndex = "0";
		
		document.getElementById("lat22").style.height = "180px";
		document.getElementById("lat22").style.zIndex = "1";
	}
}

function next24(){
	let aa=((isi[2]*isi[2])*(a[2]));
	let bb=(b[2]*isi[2]);
	let hasil=aa+bb+c[2];
	if (document.getElementById("jwb2").value==hasil ){
		document.getElementById("nonav23").style.backgroundColor="#00FF00";
		document.getElementById("nonav23").style.color="#006A4E";
		document.getElementById("lat23").style.height = "0";
		document.getElementById("lat23").style.zIndex = "0";
		
		document.getElementById("lat24").style.height = "180px";
		document.getElementById("lat24").style.zIndex = "1";
		document.getElementById("x3").innerHTML=isi[3];
		document.getElementById("xx3").innerHTML=isi[3];
	}
	else{
		document.getElementById("nonav23").style.backgroundColor="red";
		document.getElementById("nonav23").style.color="white";
		document.getElementById("lat23").style.height = "0";
		document.getElementById("lat23").style.zIndex = "0";
		
		document.getElementById("lat24").style.height = "180px";
		document.getElementById("lat24").style.zIndex = "1";
		document.getElementById("x3").innerHTML=isi[3];
		document.getElementById("xx3").innerHTML=isi[3];
	}
}

function back23(){
	let aa=((isi[3]*isi[3])*(a[3]));
	let bb=(b[3]*isi[3]);
	let hasil=aa+bb+c[3];
	if (document.getElementById("jwb3").value==hasil ){
		document.getElementById("nonav24").style.backgroundColor="#00FF00";
		document.getElementById("nonav24").style.color="#006A4E";
		document.getElementById("lat24").style.height = "0";
		document.getElementById("lat24").style.zIndex = "0";
		
		document.getElementById("lat23").style.height = "180px";
		document.getElementById("lat23").style.zIndex = "1";
	}
	else{
		document.getElementById("nonav24").style.backgroundColor="red";
		document.getElementById("nonav24").style.color="white";
		document.getElementById("lat24").style.height = "0";
		document.getElementById("lat24").style.zIndex = "0";
		
		document.getElementById("lat23").style.height = "180px";
		document.getElementById("lat23").style.zIndex = "1";
	}
}

function next25(){
	let aa=((isi[3]*isi[3])*(a[3]));
	let bb=(b[3]*isi[3]);
	let hasil=aa+bb+c[3];
	if (document.getElementById("jwb3").value==hasil ){
		document.getElementById("nonav24").style.backgroundColor="#00FF00";
		document.getElementById("nonav24").style.color="#006A4E";
	}
	else{
		document.getElementById("nonav24").style.backgroundColor="red";
		document.getElementById("nonav24").style.color="white";
	}
}