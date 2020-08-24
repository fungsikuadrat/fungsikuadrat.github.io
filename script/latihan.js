//Materi 1
// function next2(){
// 	// let c3= 1+document.getElementById("jwb3c").value;
// 	// let b4= 1+document.getElementById("jwb4b").value;
// 	let skora1 =0;
//     // let ceka1= " ";
// 	// let ceka2= " ";
// 	// let ceka3= " ";
//     // let ceka4= " ";
//     // let cekb1= " ";
// 	// let cekb2= " ";
// 	// let cekb3= " ";
//     // let cekb4= " ";
//     // let cekc1= " ";
// 	// let cekc2= " ";
// 	// let cekc3= " ";
//     // let cekc4= " ";
    
// 	if (document.getElementById("jwb1a").value==1 ) {
// 		// ceka1 = "<img alt='Image' src='img/benar.png' style='width:30px;height:30px;'/>";
// 		skora1 += 1;
// 	  } 
// 	//   else {
// 	// 	ceka1 = "<img alt='Image' src='img/salah.png' style='width:30px;height:30px;'/>";
// 	// 	alert("Jawaban kamu masih salah!");
//     //   }
//       if (document.getElementById("jwb1b").value==-2 ) {
// 		// cekb1 = "<img alt='Image' src='img/benar.png' style='width:30px;height:30px;'/>";
// 		skora1 += 1;
// 	  } 
// 	//   else {
// 	// 	cekb1 = "<img alt='Image' src='img/salah.png' style='width:30px;height:30px;'/>";
//     //   }
//       if (document.getElementById("jwb1c").value==-3 ) {
// 		// cekc1 = "<img alt='Image' src='img/benar.png' style='width:30px;height:30px;'/>";
// 		skora1 += 1;
// 	  }
// 	//    else {
// 	// 	cekc1 = "<img alt='Image' src='img/salah.png' style='width:30px;height:30px;'/>";
// 	//   }
// 	if(skora1==3){
// 		document.getElementById("nonav1").style.backgroundColor="#00FF00";
// 		document.getElementById("nonav1").style.color="#006A4E";
// 		document.getElementById("lat1").style.height = "0";
// 		// document.getElementById("lat1").style.width = "0";
// 		document.getElementById("lat1").style.zIndex = "0";
		
// 		document.getElementById("lat2").style.height = "210px";
// 		document.getElementById("lat2").style.zIndex = "1";
// 	}
// 	else{
// 		document.getElementById("nonav1").style.backgroundColor="red";
// 		document.getElementById("nonav1").style.color="white";
// 		document.getElementById("lat1").style.height = "0";
// 		document.getElementById("lat1").style.zIndex = "0";
		
// 		document.getElementById("lat2").style.height = "210px";
// 		document.getElementById("lat2").style.zIndex = "1";
// 	}
// 	}
function next2(){
	let rbs = document.querySelectorAll('input[name="pertanyaan1"]');
	let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
			}
			console.log("SELECTED "+selectedValue);
			if(selectedValue=="c"){
				document.getElementById("nonav1").style.backgroundColor="#00FF00";
				document.getElementById("nonav1").style.color="#006A4E";
				document.getElementById("lat1").style.height = "0";
				document.getElementById("lat1").style.zIndex = "0";

				document.getElementById("lat1").classList.toggle("hilangi");

				document.getElementById("lat2").style.height = "240px";
				document.getElementById("lat2").style.zIndex = "1";
				document.getElementById("lat2").classList.remove("hilangi");
			}
			else{
				document.getElementById("nonav1").style.backgroundColor="red";
				document.getElementById("nonav1").style.color="white";
				document.getElementById("lat1").style.height = "0";
				document.getElementById("lat1").style.zIndex = "0";

				document.getElementById("lat1").classList.toggle("hilangi");

				document.getElementById("lat2").style.height = "240px";
				document.getElementById("lat2").style.zIndex = "1";
				document.getElementById("lat2").classList.remove("hilangi");
			}
}
function m1cek1(){
	let rbs = document.querySelectorAll('input[name="pertanyaan1"]');
	let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
			}
			console.log("SELECTED "+selectedValue);
			if(selectedValue=="c"){
				document.getElementById("nonav1").style.backgroundColor="#00FF00";
				document.getElementById("nonav1").style.color="#006A4E";
			}
			else{
				document.getElementById("nonav1").style.backgroundColor="red";
				document.getElementById("nonav1").style.color="white";
}
}
function back1(){
	// let skor2=0;
	// if (document.getElementById("jwb2a").value==-2 ) {
	// 	skor2 += 1;
	//   } 
    //   if (document.getElementById("jwb2b").value==2 ) {
	// 	skor2 += 1;
	//   }
    //   if (document.getElementById("jwb2c").value==4 ) {
	// 	skor2 += 1;
	//   }
	let rbs = document.querySelectorAll('input[name="pertanyaan2"]');
	let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
			}

	  if(selectedValue=="b"){
		document.getElementById("nonav2").style.backgroundColor="#00FF00";
		document.getElementById("nonav2").style.color="#006A4E";
		// document.getElementById("lat1").style.display="inline-block";
		document.getElementById("lat2").style.height = "0";
		// document.getElementById("lat1").style.width = "0";
		document.getElementById("lat2").classList.toggle("hilangi");

		document.getElementById("lat2").style.zIndex = "0";
		
		document.getElementById("lat1").style.height = "210px";
		document.getElementById("lat1").style.zIndex = "1";
		document.getElementById("lat1").classList.toggle("hilangi");
	}
	else{
		document.getElementById("nonav2").style.backgroundColor="red";
		document.getElementById("nonav2").style.color="white";
		document.getElementById("lat2").style.height = "0";
		// document.getElementById("lat1").style.width = "0";
		document.getElementById("lat2").style.zIndex = "0";
		document.getElementById("lat2").classList.toggle("hilangi");
		
		document.getElementById("lat1").style.height = "210px";
		document.getElementById("lat1").style.zIndex = "1";
		document.getElementById("lat1").classList.toggle("hilangi");
	}
}
function m1cek1(){
	let rbs = document.querySelectorAll('input[name="pertanyaan1"]');
	let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
			}
			console.log("SELECTED "+selectedValue);
			if(selectedValue=="c"){
				document.getElementById("nonav1").style.backgroundColor="#00FF00";
				document.getElementById("nonav1").style.color="#006A4E";
			}
			else{
				document.getElementById("nonav1").style.backgroundColor="red";
				document.getElementById("nonav1").style.color="white";
}
}

function next3(){
	// let skor2=0;
	// if (document.getElementById("jwb2a").value==-2 ) {
	// 	skor2 += 1;
	//   } 
    //   if (document.getElementById("jwb2b").value==2 ) {
	// 	skor2 += 1;
	//   }
    //   if (document.getElementById("jwb2c").value==4 ) {
	// 	skor2 += 1;
	//   }
	let rbs = document.querySelectorAll('input[name="pertanyaan2"]');
	let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
			}
	  if(selectedValue=="b"){
		document.getElementById("nonav2").style.backgroundColor="#00FF00";
		document.getElementById("nonav2").style.color="#006A4E";
		document.getElementById("lat2").style.height = "0";
		// document.getElementById("lat1").style.width = "0";
		document.getElementById("lat2").style.zIndex = "0";
		document.getElementById("lat2").classList.toggle("hilangi");
		
		document.getElementById("lat3").style.height = "260px";
		document.getElementById("lat3").style.zIndex = "1";
		document.getElementById("lat3").classList.remove("hilangi");
	}
	else{
		document.getElementById("nonav2").style.backgroundColor="red";
		document.getElementById("nonav2").style.color="white";
		document.getElementById("lat2").style.height = "0";
		// document.getElementById("lat1").style.width = "0";
		document.getElementById("lat2").style.zIndex = "0";
		document.getElementById("lat2").classList.toggle("hilangi");
		
		document.getElementById("lat3").style.height = "260px";
		document.getElementById("lat3").style.zIndex = "1";
		document.getElementById("lat3").classList.remove("hilangi");
	}
}
function m1cek2(){
	let rbs = document.querySelectorAll('input[name="pertanyaan2"]');
	let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
			}
	  if(selectedValue=="b"){
		document.getElementById("nonav2").style.backgroundColor="#00FF00";
		document.getElementById("nonav2").style.color="#006A4E";
	}
	else{
		document.getElementById("nonav2").style.backgroundColor="red";
		document.getElementById("nonav2").style.color="white";
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
		document.getElementById("lat3").classList.toggle("hilangi");

		document.getElementById("lat2").style.height = "240px";
		document.getElementById("lat2").style.zIndex = "1";
		document.getElementById("lat2").classList.toggle("hilangi");
	}
	else{
		document.getElementById("nonav3").style.backgroundColor="red";
		document.getElementById("nonav3").style.color="white";
		document.getElementById("lat3").style.height = "0";
		// document.getElementById("lat1").style.width = "0";
		document.getElementById("lat3").style.zIndex = "0";
		document.getElementById("lat3").classList.toggle("hilangi");
		
		document.getElementById("lat2").style.height = "240px";
		document.getElementById("lat2").style.zIndex = "1";
		document.getElementById("lat2").classList.toggle("hilangi");
	}
}
function m1cek3(){
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
	}
	else{
		document.getElementById("nonav3").style.backgroundColor="red";
		document.getElementById("nonav3").style.color="white";
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
		document.getElementById("lat3").classList.toggle("hilangi");

		document.getElementById("lat4").style.height = "260px";
		document.getElementById("lat4").style.zIndex = "1";
		document.getElementById("lat4").classList.remove("hilangi");
	}
	else{
		document.getElementById("nonav3").style.backgroundColor="red";
		document.getElementById("nonav3").style.color="white";
		document.getElementById("lat3").style.height = "0";
		// document.getElementById("lat1").style.width = "0";
		document.getElementById("lat3").style.zIndex = "0";
		document.getElementById("lat3").classList.toggle("hilangi");
		
		document.getElementById("lat4").style.height = "260px";
		document.getElementById("lat4").style.zIndex = "1";
		document.getElementById("lat4").classList.remove("hilangi");
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
		document.getElementById("lat4").classList.toggle("hilangi");

		document.getElementById("lat3").style.height = "260px";
		document.getElementById("lat3").style.zIndex = "1";
		document.getElementById("lat3").classList.toggle("hilangi");
	}
	else{
		document.getElementById("nonav4").style.backgroundColor="red";
		document.getElementById("nonav4").style.color="white";
		document.getElementById("lat4").style.height = "0";
		// document.getElementById("lat1").style.width = "0";
		document.getElementById("lat4").style.zIndex = "0";
		document.getElementById("lat4").classList.toggle("hilangi");

		document.getElementById("lat3").style.height = "260px";
		document.getElementById("lat3").style.zIndex = "1";
		document.getElementById("lat3").classList.toggle("hilangi");
	}
}
function m1cek4(){
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
		document.getElementById("lat4").style.height = "0";
		document.getElementById("lat4").style.zIndex = "0";
		document.getElementById("lat4").classList.toggle("hilangi");
		
		document.getElementById("lat5").style.height = "260px";
		document.getElementById("lat5").style.zIndex = "1";
		document.getElementById("lat5").classList.remove("hilangi");
	}
	else{
		document.getElementById("nonav4").style.backgroundColor="red";
		document.getElementById("nonav4").style.color="white";
		document.getElementById("lat4").style.height = "0";
		document.getElementById("lat4").style.zIndex = "0";
		document.getElementById("lat4").classList.toggle("hilangi");

		document.getElementById("lat5").style.height = "260px";
		document.getElementById("lat5").style.zIndex = "1";
		document.getElementById("lat5").classList.remove("hilangi");
	}
}
function back4(){
	let skor5=0;
	if (document.getElementById("jwb5a").value==2 ) {
		skor5 += 1;
	} 
	if (document.getElementById("jwb5b").value==5 ) {
		skor5 += 1;
	} 
	if (document.getElementById("jwb5c").value==-8 ) {
		skor5 += 1;
	}
	if(skor5==3){
		document.getElementById("nonav5").style.backgroundColor="#00FF00";
		document.getElementById("nonav5").style.color="#006A4E";
		document.getElementById("lat5").style.height = "0";
		document.getElementById("lat5").style.zIndex = "0";
		document.getElementById("lat5").classList.toggle("hilangi");

		document.getElementById("lat4").style.height = "260px";
		document.getElementById("lat4").style.zIndex = "1";
		document.getElementById("lat4").classList.toggle("hilangi");
	}
	else{
		document.getElementById("nonav5").style.backgroundColor="red";
		document.getElementById("nonav5").style.color="white";
		document.getElementById("lat5").style.height = "0";
		document.getElementById("lat5").style.zIndex = "0";
		document.getElementById("lat5").classList.toggle("hilangi");

		document.getElementById("lat4").style.height = "260px";
		document.getElementById("lat4").style.zIndex = "1";
		document.getElementById("lat4").classList.toggle("hilangi");
	}
}

function m1cek5(){
	let skor5=0;
	if (document.getElementById("jwb5a").value==2 ) {
		skor5 += 1;
	} 
	if (document.getElementById("jwb5b").value==5 ) {
		skor5 += 1;
	} 
	if (document.getElementById("jwb5c").value==-8 ) {
		skor5 += 1;
	}
	if(skor5==3){
		document.getElementById("nonav5").style.backgroundColor="#00FF00";
		document.getElementById("nonav5").style.color="#006A4E";
	}
	else{
		document.getElementById("nonav5").style.backgroundColor="red";
		document.getElementById("nonav5").style.color="white";
	}
}

// function next6(){
// 	let skor5=0;
// 	if (document.getElementById("jwb5a").value==2 ) {
// 		skor5 += 1;
// 	} 
// 	if (document.getElementById("jwb5b").value==5 ) {
// 		skor5 += 1;
// 	} 
// 	if (document.getElementById("jwb5c").value==-8 ) {
// 		skor5 += 1;
// 	}
// 	if(skor5==3){
// 		document.getElementById("nonav5").style.backgroundColor="#00FF00";
// 		document.getElementById("nonav5").style.color="#006A4E";
// 		document.getElementById("lat5").style.height = "0";
// 		document.getElementById("lat5").style.zIndex = "0";
		
// 		document.getElementById("lat6").style.height = "260px";
// 		document.getElementById("lat6").style.zIndex = "1";
// 	}
// 	else{
// 		document.getElementById("nonav5").style.backgroundColor="red";
// 		document.getElementById("nonav5").style.color="white";
// 		document.getElementById("lat5").style.height = "0";
// 		document.getElementById("lat5").style.zIndex = "0";
		
// 		document.getElementById("lat6").style.height = "260px";
// 		document.getElementById("lat6").style.zIndex = "1";
// 	}
// }
// function back5(){
// 	let skor5=0;
// 	if (document.getElementById("jwb6a").value==4 ) {
// 		skor5 += 1;
// 	} 
// 	if (document.getElementById("jwb6b").value==2 ) {
// 		skor5 += 1;
// 	} 
// 	if (document.getElementById("jwb6c").value==-2 ) {
// 		skor5 += 1;
// 	}
// 	if(skor5==3){
// 		document.getElementById("nonav6").style.backgroundColor="#00FF00";
// 		document.getElementById("nonav6").style.color="#006A4E";
// 		document.getElementById("lat6").style.height = "0";
// 		document.getElementById("lat6").style.zIndex = "0";
		
// 		document.getElementById("lat5").style.height = "260px";
// 		document.getElementById("lat5").style.zIndex = "1";
// 	}
// 	else{
// 		document.getElementById("nonav6").style.backgroundColor="red";
// 		document.getElementById("nonav6").style.color="white";
// 		document.getElementById("lat6").style.height = "0";
// 		document.getElementById("lat6").style.zIndex = "0";
		
// 		document.getElementById("lat5").style.height = "260px";
// 		document.getElementById("lat5").style.zIndex = "1";
// 	}
// }

// function m1cek6(){
// 	let skor5=0;
// 	if (document.getElementById("jwb6a").value==4 ) {
// 		skor5 += 1;
// 	} 
// 	if (document.getElementById("jwb6b").value==2 ) {
// 		skor5 += 1;
// 	} 
// 	if (document.getElementById("jwb6c").value==-2 ) {
// 		skor5 += 1;
// 	}
// 	if(skor5==3){
// 		document.getElementById("nonav6").style.backgroundColor="#00FF00";
// 		document.getElementById("nonav6").style.color="#006A4E";
// 	}
// 	else{
// 		document.getElementById("nonav6").style.backgroundColor="red";
// 		document.getElementById("nonav6").style.color="white";
// 	}
// }

// function next7(){
// 	let skor6=0;
// 	if (document.getElementById("jwb6a").value==4 ) {
// 		skor6 += 1;
// 	} 
// 	if (document.getElementById("jwb6b").value==2 ) {
// 		skor6 += 1;
// 	} 
// 	if (document.getElementById("jwb6c").value==-2 ) {
// 		skor6 += 1;
// 	}
// 	if(skor6==3){
// 		document.getElementById("nonav6").style.backgroundColor="#00FF00";
// 		document.getElementById("nonav6").style.color="#006A4E";
// 		document.getElementById("lat6").style.height = "0";
// 		document.getElementById("lat6").style.zIndex = "0";
		
// 		document.getElementById("lat7").style.height = "260px";
// 		document.getElementById("lat7").style.zIndex = "1";
// 	}
// 	else{
// 		document.getElementById("nonav6").style.backgroundColor="red";
// 		document.getElementById("nonav6").style.color="white";
// 		document.getElementById("lat6").style.height = "0";
// 		document.getElementById("lat6").style.zIndex = "0";
		
// 		document.getElementById("lat7").style.height = "260px";
// 		document.getElementById("lat7").style.zIndex = "1";
// 	}
// }
// function back6(){
// 	let skor6=0;
// 	if (document.getElementById("jwb7a").value==-2 ) {
// 		skor6 += 1;
// 	} 
// 	if (document.getElementById("jwb7b").value==-1 ) {
// 		skor6 += 1;
// 	} 
// 	if (document.getElementById("jwb7c").value==6 ) {
// 		skor6 += 1;
// 	}
// 	if(skor6==3){
// 		document.getElementById("nonav7").style.backgroundColor="#00FF00";
// 		document.getElementById("nonav7").style.color="#006A4E";
// 		document.getElementById("lat7").style.height = "0";
// 		document.getElementById("lat7").style.zIndex = "0";
		
// 		document.getElementById("lat6").style.height = "260px";
// 		document.getElementById("lat6").style.zIndex = "1";
// 	}
// 	else{
// 		document.getElementById("nonav7").style.backgroundColor="red";
// 		document.getElementById("nonav7").style.color="white";
// 		document.getElementById("lat7").style.height = "0";
// 		document.getElementById("lat7").style.zIndex = "0";
		
// 		document.getElementById("lat6").style.height = "260px";
// 		document.getElementById("lat6").style.zIndex = "1";
// 	}
// }

// function m1cek7(){
// 	let skor6=0;
// 	if (document.getElementById("jwb7a").value==-2 ) {
// 		skor6 += 1;
// 	} 
// 	if (document.getElementById("jwb7b").value==-1 ) {
// 		skor6 += 1;
// 	} 
// 	if (document.getElementById("jwb7c").value==6 ) {
// 		skor6 += 1;
// 	}
// 	if(skor6==3){
// 		document.getElementById("nonav7").style.backgroundColor="#00FF00";
// 		document.getElementById("nonav7").style.color="#006A4E";
// 	}
// 	else{
// 		document.getElementById("nonav7").style.backgroundColor="red";
// 		document.getElementById("nonav7").style.color="white";
// 	}
// }

// function next8(){
// 	let skor8=0;
// 	if (document.getElementById("jwb7a").value==-2 ) {
// 		skor8 += 1;
// 	} 
// 	if (document.getElementById("jwb7b").value==-1 ) {
// 		skor8 += 1;
// 	} 
// 	if (document.getElementById("jwb7c").value==6 ) {
// 		skor8 += 1;
// 	}
// 	if(skor8==3){
// 		document.getElementById("nonav7").style.backgroundColor="#00FF00";
// 		document.getElementById("nonav7").style.color="#006A4E";
// 		document.getElementById("lat7").style.height = "0";
// 		document.getElementById("lat7").style.zIndex = "0";
		
// 		document.getElementById("lat8").style.height = "260px";
// 		document.getElementById("lat8").style.zIndex = "1";
// 	}
// 	else{
// 		document.getElementById("nonav7").style.backgroundColor="red";
// 		document.getElementById("nonav7").style.color="white";
// 		document.getElementById("lat7").style.height = "0";
// 		document.getElementById("lat7").style.zIndex = "0";
		
// 		document.getElementById("lat8").style.height = "260px";
// 		document.getElementById("lat8").style.zIndex = "1";
// 	}
// }
// function back7(){
// 	let skor7=0;
// 	if (document.getElementById("jwb8a").value==-4 ) {
// 		skor7 += 1;
// 	} 
// 	if (document.getElementById("jwb8b").value==1 ) {
// 		skor7 += 1;
// 	} 
// 	if (document.getElementById("jwb8c").value==3 ) {
// 		skor7 += 1;
// 	}
// 	if(skor7==3){
// 		document.getElementById("nonav8").style.backgroundColor="#00FF00";
// 		document.getElementById("nonav8").style.color="#006A4E";
// 		document.getElementById("lat8").style.height = "0";
// 		document.getElementById("lat8").style.zIndex = "0";
		
// 		document.getElementById("lat7").style.height = "260px";
// 		document.getElementById("lat7").style.zIndex = "1";
// 	}
// 	else{
// 		document.getElementById("nonav8").style.backgroundColor="red";
// 		document.getElementById("nonav8").style.color="white";
// 		document.getElementById("lat8").style.height = "0";
// 		document.getElementById("lat8").style.zIndex = "0";
		
// 		document.getElementById("lat7").style.height = "260px";
// 		document.getElementById("lat7").style.zIndex = "1";
// 	}
// }


// function next9(){
// 	let skor9=0;
// 	if (document.getElementById("jwb8a").value==-4 ) {
// 		skor9 += 1;
// 	} 
// 	if (document.getElementById("jwb8b").value==1 ) {
// 		skor9 += 1;
// 	} 
// 	if (document.getElementById("jwb8c").value==3 ) {
// 		skor9 += 1;
// 	}
// 	if(skor9==3){
// 		document.getElementById("nonav8").style.backgroundColor="#00FF00";
// 		document.getElementById("nonav8").style.color="#006A4E";

// 	}
// 	else{
// 		document.getElementById("nonav8").style.backgroundColor="red";
// 		document.getElementById("nonav8").style.color="white";
// 	}
// }

//Materi 2
let isi = new Object;
function randomx(){
	let x;
	let start = -5, end = 5;
	for(let i=0; i<5;i++){
		x = (Math.random() * (end - start) + start) ^ 0;
		isi[i] = x;
	}
	document.getElementById("x0").innerHTML=isi[0];
	document.getElementById("x1x0").innerHTML=isi[0];
	document.getElementById("xx0").innerHTML=isi[0];
}

let cek = new Object;
let a = new Object;
let b = new Object;
let c = new Object;
let lan = 0;
let lan1 = 0;
let lan2 = 0;
let lan3 = 0;
a[0]= -1;
a[1]=2;
a[2]=3;
a[3]=1;
a[4]=3;

b[0]=2;
b[1]=1;
b[2]=0;
b[3]=1;
b[4]=-6

c[0]=3;
c[1]=0;
c[2]=-1;
c[3]=-2;
c[4]=2;


function dx4(val){
	lan1 = 1;
	let hhas=isi[4]-1;
	if(val==""){
		document.getElementById("dx4").style.borderColor="red";
	}
	else if(val==hhas){
		document.getElementById("dx4").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("dx4").style.borderColor="red";
	}
	lan = lan1+lan2+lan3;

	if(lan=="3"){
		let lanjut1 = document.getElementById("f251");
		lanjut1.classList.remove("hilangi");
		lan=0;
		lan2=0;
		lan1=0;
		lan3=0;
	}
}

function cx4(val){
	lan2 = 1;
	let hhas=isi[4]-1;
	if(val==""){
		document.getElementById("cx4").style.borderColor="red";
	}
	else if(val==hhas){
		document.getElementById("cx4").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("cx4").style.borderColor="red";
	}
	lan = lan1+lan2+lan3;

	if(lan=="3"){
		let lanjut1 = document.getElementById("f251");
		lanjut1.classList.remove("hilangi");
		lan=0;
		lan2=0;
		lan1=0;
		lan3=0;
	}
}

function ax4(val){
	lan1 = 1;
	let hhas=a[4]*((isi[4]-1)*(isi[4]-1));
	if(val==""){
		document.getElementById("ax4").style.borderColor="red";
	}
	if(val==hhas){
		document.getElementById("ax4").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("ax4").style.borderColor="red";
	}
	lan = lan1+lan2;
	if(lan=="2"){
		let lanjut1 = document.getElementById("xj4");
		lanjut1.classList.remove("hilangi");
		lan=0;
		lan2=0;
		lan1=0;
		lan3=0;
	}
}
function bx42(val){
	lan2 = 1;
	if(val==""){
		document.getElementById("bx42").style.borderColor="red";
	}
	else if(val=="1"){
		document.getElementById("bx42").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("bx42").style.borderColor="red";
	}
	lan = lan1+lan2;

	if(lan=="2"){
		let lanjut1 = document.getElementById("xj4");
	
		lanjut1.classList.remove("hilangi");
		lan=0;
		lan=0;
		lan2=0;
		lan1=0;
		lan3=0;
	}
}

function bx4(val){
	lan3 = 1;
	if(val==""){
		document.getElementById("bx4").style.borderColor="red";
	}
	else if(val=="1"){
		document.getElementById("bx4").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("bx4").style.borderColor="red";
	}
	lan = lan1+lan2+lan3;

	if(lan=="3"){
		let lanjut1 = document.getElementById("f251");
	
		lanjut1.classList.remove("hilangi");
		lan=0;
		lan2=0;
		lan1=0;
		lan3=0;
	}
}

function ax41(val){
	lan1 = 1;
	let hhas=isi[4]-1;
	let hhas1=hhas*hhas;
	if(val==""){
		document.getElementById("ax41").style.borderColor="red";
	}
	else if(val==hhas1){
		document.getElementById("ax41").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("ax41").style.borderColor="red";
	}
	lan = lan1+lan2;

	if(lan=="2"){
		let lanjut1 = document.getElementById("f252");
		lanjut1.classList.remove("hilangi");
		lan=0;
		lan2=0;
		lan1=0;
		lan3=0;
	}
}
function bx41(val){
	lan2 = 1;
	if(val==""){
		document.getElementById("bx41").style.borderColor="red";
	}
	else if(val=="1"){
		document.getElementById("bx41").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("bx41").style.borderColor="red";
	}
	lan = lan1+lan2;

	if(lan=="2"){
		let lanjut1 = document.getElementById("f252");
	
		lanjut1.classList.remove("hilangi");
		lan=0;
		lan2=0;
		lan1=0;
		lan3=0;
	}
}

function ax0(val){
	lan1 = 1;
	let hhas=a[0]*(isi[0]*isi[0]);
	if(val==hhas){
		document.getElementById("ax0").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("ax0").style.borderColor="red";
	}
	lan = lan1+lan2+lan3;

	if(lan=="3"){
		let lanjut1 = document.getElementById("xj0");
	
		lanjut1.classList.remove("hilangi");
	}
}
function bx0(val){
	lan2 = 1;
	let hhas=b[0]*isi[0];
	if(val==hhas){
		document.getElementById("bx0").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("bx0").style.borderColor="red";
	}
	lan = lan1+lan2+lan3;

	if(lan=="3"){
		let lanjut1 = document.getElementById("xj0");
	
		lanjut1.classList.remove("hilangi");
	}
}
function cx0(val){
	lan3 = 1;
	if(val==c[0]){
		document.getElementById("cx0").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("cx0").style.borderColor="red";
	}
	lan = lan1+lan2+lan3;

	if(lan=="3"){
		let lanjut1 = document.getElementById("xj0");
	
		lanjut1.classList.remove("hilangi");
	}
}
function ax1(val){
	lan1 = 1;
	let hhas=a[1]*(isi[1]*isi[1]);
	if(val==hhas){
		document.getElementById("ax1").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("ax1").style.borderColor="red";
	}
	lan = lan1+lan2+lan3;

	if(lan=="3"){
		let lanjut1 = document.getElementById("xj1");
	
		lanjut1.classList.remove("hilangi");
	}
}
function bx1(val){
	lan2 = 1;
	let hhas=b[1]*isi[1];
	if(val==hhas){
		document.getElementById("bx1").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("bx1").style.borderColor="red";
	}
	lan = lan1+lan2+lan3;

	if(lan=="3"){
		let lanjut1 = document.getElementById("xj1");
	
		lanjut1.classList.remove("hilangi");
	}
}
function cx1(val){
	lan3 = 1;
	if(val==c[1]){
		document.getElementById("cx1").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("cx1").style.borderColor="red";
	}
	lan = lan1+lan2+lan3;

	if(lan=="3"){
		let lanjut1 = document.getElementById("xj1");
	
		lanjut1.classList.remove("hilangi");
	}
}

function ax2(val){
	lan1 = 1;
	let hhas=a[2]*(isi[2]*isi[2]);
	if(val==hhas){
		document.getElementById("ax2").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("ax2").style.borderColor="red";
	}
	lan = lan1+lan2+lan3;

	if(lan=="3"){
		let lanjut1 = document.getElementById("xj2");
	
		lanjut1.classList.remove("hilangi");
	}
}
function bx2(val){
	lan2 = 1;
	let hhas=b[2]*isi[2];
	if(val==hhas){
		document.getElementById("bx2").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("bx2").style.borderColor="red";
	}
	lan = lan1+lan2+lan3;

	if(lan=="3"){
		let lanjut1 = document.getElementById("xj2");
	
		lanjut1.classList.remove("hilangi");
	}
}
function cx2(val){
	lan3 = 1;
	if(val=="1"){
		document.getElementById("cx2").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("cx2").style.borderColor="red";
	}
	lan = lan1+lan2+lan3;

	if(lan=="3"){
		let lanjut1 = document.getElementById("xj2");
	
		lanjut1.classList.remove("hilangi");
	}
}

function ax3(val){
	lan1 = 1;
	let hhas=a[3]*(isi[3]*isi[3]);
	if(val==hhas){
		document.getElementById("ax3").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("ax3").style.borderColor="red";
	}
	lan = lan1+lan2+lan3;

	if(lan=="3"){
		let lanjut1 = document.getElementById("xj3");
	
		lanjut1.classList.remove("hilangi");
	}
}
function bx3(val){
	lan2 = 1;
	let hhas=b[3]*isi[3];
	if(val==hhas){
		document.getElementById("bx3").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("bx3").style.borderColor="red";
	}
	lan = lan1+lan2+lan3;

	if(lan=="3"){
		let lanjut1 = document.getElementById("xj3");
	
		lanjut1.classList.remove("hilangi");
	}
}
function cx3(val){
	lan3 = 1;
	if(val=="2"){
		document.getElementById("cx3").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("cx3").style.borderColor="red";
	}
	lan = lan1+lan2+lan3;

	if(lan=="3"){
		let lanjut1 = document.getElementById("xj3");
	
		lanjut1.classList.remove("hilangi");
	}
}


function next22(){
	let aa=((isi[0]*isi[0])*(a[0]));
	let bb=(b[0]*isi[0]);
	let hasil=aa+bb+c[0];

	lan=0;
	lan1=0;
	lan2=0;
	lan3=0;
	//input a1
	if (document.getElementById("ax0").value=="" ){
		document.getElementById("ax0").style.borderColor="red";
	}
	else if (document.getElementById("ax0").value==aa ){
		document.getElementById("ax0").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("ax0").style.borderColor="red";
	}

	//input b1
	if (document.getElementById("bx0").value=="" ){
		document.getElementById("bx0").style.borderColor="red";
	}
	else if (document.getElementById("bx0").value==bb ){
		document.getElementById("bx0").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("bx0").style.borderColor="red";
	}

	//input c1
	if (document.getElementById("cx0").value=="" ){
		document.getElementById("cx0").style.borderColor="red";
	}
	else if (document.getElementById("cx0").value==c[0] ){
		document.getElementById("cx0").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("cx0").style.borderColor="red";
	}

	//input jawab1
	if (document.getElementById("jwb0").value=="" ){
		document.getElementById("nonav21").style.backgroundColor="red";
		document.getElementById("nonav21").style.color="white";
		document.getElementById("lat21").style.height = "0";
		document.getElementById("lat21").style.zIndex = "0";

		document.getElementById("lat21").classList.toggle("hilangi");
		
		document.getElementById("jwb0").style.borderColor="red";

		document.getElementById("lat22").style.height = "180px";
		document.getElementById("lat22").style.zIndex = "1";
		document.getElementById("lat22").classList.remove("hilangi");
		document.getElementById("x1").innerHTML=isi[1];
		document.getElementById("x2x0").innerHTML=isi[1];
		document.getElementById("xx1").innerHTML=isi[1];
		lan = 0;
	}
	else if (document.getElementById("jwb0").value==hasil ){
		document.getElementById("nonav21").style.backgroundColor="#00FF00";
		document.getElementById("nonav21").style.color="#006A4E";
		document.getElementById("lat21").style.height = "0";
		document.getElementById("lat21").style.zIndex = "0";

		document.getElementById("lat21").classList.toggle("hilangi");
		
		document.getElementById("jwb0").style.borderColor="#006A4E";

		document.getElementById("lat22").style.height = "180px";
		document.getElementById("lat22").style.zIndex = "1";
		document.getElementById("lat22").classList.remove("hilangi");
		document.getElementById("x1").innerHTML=isi[1];
		document.getElementById("x2x0").innerHTML=isi[1];
		document.getElementById("xx1").innerHTML=isi[1];
		lan = 0;
	}
	else{
		document.getElementById("nonav21").style.backgroundColor="red";
		document.getElementById("nonav21").style.color="white";
		document.getElementById("lat21").style.height = "0";
		document.getElementById("lat21").style.zIndex = "0";
		
		document.getElementById("jwb0").style.borderColor="red";

		document.getElementById("lat21").classList.toggle("hilangi");

		document.getElementById("lat22").style.height = "180px";
		document.getElementById("lat22").style.zIndex = "1";
		document.getElementById("lat22").classList.remove("hilangi");
		document.getElementById("x1").innerHTML=isi[1];
		document.getElementById("x2x0").innerHTML=isi[1];
		document.getElementById("xx1").innerHTML=isi[1];
		lan = 0;
	}
}
function m2cek1(){
	let aa=((isi[0]*isi[0])*(a[0]));
	let bb=(b[0]*isi[0]);
	let hasil=aa+bb+c[0];
	//input jwb1
	if (document.getElementById("jwb0").value=="" ){
		document.getElementById("nonav21").style.backgroundColor="red";
		document.getElementById("nonav21").style.color="white";
		document.getElementById("jwb0").style.borderColor="red";
	}

	else if (document.getElementById("jwb0").value==hasil ){
		document.getElementById("nonav21").style.backgroundColor="#00FF00";
		document.getElementById("nonav21").style.color="#006A4E";
		document.getElementById("jwb0").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("nonav21").style.backgroundColor="red";
		document.getElementById("nonav21").style.color="white";
		document.getElementById("jwb0").style.borderColor="red";
	}

	//input a1
	if (document.getElementById("ax0").value=="" ){
		document.getElementById("ax0").style.borderColor="red";
	}
	else if (document.getElementById("ax0").value==aa ){
		document.getElementById("ax0").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("ax0").style.borderColor="red";
	}

	//input b1
	if (document.getElementById("bx0").value=="" ){
		document.getElementById("bx0").style.borderColor="red";
	}
	else if (document.getElementById("bx0").value==bb ){
		document.getElementById("bx0").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("bx0").style.borderColor="red";
	}

	//input c1
	if (document.getElementById("cx0").value=="" ){
		document.getElementById("cx0").style.borderColor="red";
	}
	else if (document.getElementById("cx0").value==c[0] ){
		document.getElementById("cx0").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("cx0").style.borderColor="red";
	}
}

function back21(){
	let aa=((isi[1]*isi[1])*(a[1]));
	let bb=(b[1]*isi[1]);
	let hasil=aa+bb+c[1];

	lan=0;
	lan1=0;
	lan2=0;
	lan3=0;

	if (document.getElementById("ax1").value==aa ){
		document.getElementById("ax1").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("ax1").style.borderColor="red";
	}

	if (document.getElementById("bx1").value==bb ){
		document.getElementById("bx1").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("bx1").style.borderColor="red";
	}

	if (document.getElementById("cx1").value==""){
		document.getElementById("cx1").style.borderColor="blue";
	}
	else if (document.getElementById("cx1").value==c[1] ){
		document.getElementById("cx1").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("cx1").style.borderColor="red";
	}

	if (document.getElementById("jwb1").value==hasil ){
		document.getElementById("nonav22").style.backgroundColor="#00FF00";
		document.getElementById("nonav22").style.color="#006A4E";
		document.getElementById("lat22").style.height = "0";
		document.getElementById("lat22").style.zIndex = "0";
		
		document.getElementById("lat22").classList.toggle("hilangi");

		document.getElementById("jwb1").style.borderColor="red";

		document.getElementById("lat21").style.height = "180px";
		document.getElementById("lat21").style.zIndex = "1";
		document.getElementById("lat21").classList.toggle("hilangi");
	}
	else if (document.getElementById("jwb1").value==hasil ){
		document.getElementById("nonav22").style.backgroundColor="#00FF00";
		document.getElementById("nonav22").style.color="#006A4E";
		document.getElementById("lat22").style.height = "0";
		document.getElementById("lat22").style.zIndex = "0";
		
		document.getElementById("lat22").classList.toggle("hilangi");

		document.getElementById("jwb1").style.borderColor="#006A4E";

		document.getElementById("lat21").style.height = "180px";
		document.getElementById("lat21").style.zIndex = "1";
		document.getElementById("lat21").classList.toggle("hilangi");
	}
	else{
		document.getElementById("nonav22").style.backgroundColor="red";
		document.getElementById("nonav22").style.color="white";
		document.getElementById("lat22").style.height = "0";
		document.getElementById("lat22").style.zIndex = "0";
		
		document.getElementById("jwb1").style.borderColor="red";

		document.getElementById("lat22").classList.toggle("hilangi");

		document.getElementById("lat21").style.height = "180px";
		document.getElementById("lat21").style.zIndex = "1";
		document.getElementById("lat21").classList.toggle("hilangi");
	}
}
function m2cek2(){
	let aa=((isi[1]*isi[1])*(a[1]));
	let bb=(b[1]*isi[1]);
	let hasil=aa+bb+c[1]

	//input jawab2
	if (document.getElementById("jwb1").value=="" ){
		document.getElementById("nonav22").style.backgroundColor="red";
		document.getElementById("nonav22").style.color="white";
		document.getElementById("jwb1").style.borderColor="red";
	}
	else if (document.getElementById("jwb1").value==hasil ){
		document.getElementById("nonav22").style.backgroundColor="#00FF00";
		document.getElementById("nonav22").style.color="#006A4E";
		document.getElementById("jwb1").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("nonav22").style.backgroundColor="red";
		document.getElementById("nonav22").style.color="white";

		document.getElementById("jwb1").style.borderColor="red";
	}

	//input a2
	if (document.getElementById("ax1").value=="" ){
		document.getElementById("ax1").style.borderColor="red";
	}
	else if (document.getElementById("ax1").value==aa ){
		document.getElementById("ax1").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("ax1").style.borderColor="red";
	}

	//input b2
	if (document.getElementById("bx1").value=="" ){
		document.getElementById("bx1").style.borderColor="red";
	}
	else if (document.getElementById("bx1").value==bb ){
		document.getElementById("bx1").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("bx1").style.borderColor="red";
	}

	//input c2
	if (document.getElementById("cx1").value=="" ){
		document.getElementById("cx1").style.borderColor="red";
	}
	else if (document.getElementById("cx1").value==c[1] ){
		document.getElementById("cx1").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("cx1").style.borderColor="red";
	}
}

function next23(){
	let aa=((isi[1]*isi[1])*(a[1]));
	let bb=(b[1]*isi[1]);
	let hasil=aa+bb+c[1];

	lan=0;
	lan1=0;
	lan2=0;
	lan3=0;

	//input a2
	if (document.getElementById("ax1").value=="" ){
		document.getElementById("ax1").style.borderColor="red";
	}
	else if (document.getElementById("ax1").value==aa ){
		document.getElementById("ax1").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("ax1").style.borderColor="red";
	}

	//input b2
	if (document.getElementById("bx1").value=="" ){
		document.getElementById("bx1").style.borderColor="red";
	}
	else if (document.getElementById("bx1").value==bb ){
		document.getElementById("bx1").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("bx1").style.borderColor="red";
	}

	//input c2
	if (document.getElementById("cx1").value=="" ){
		document.getElementById("cx1").style.borderColor="red";
	}
	else if (document.getElementById("cx1").value==c[1] ){
		document.getElementById("cx1").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("cx1").style.borderColor="red";
	}

	//input jawab2
	if (document.getElementById("jwb1").value==""){
		document.getElementById("nonav22").style.backgroundColor="red";
		document.getElementById("nonav22").style.color="white";
		document.getElementById("lat22").style.height = "0";
		document.getElementById("lat22").style.zIndex = "0";
		
		document.getElementById("lat22").classList.toggle("hilangi");

		document.getElementById("jwb1").style.borderColor="red";

		document.getElementById("lat23").style.height = "180px";
		document.getElementById("lat23").style.zIndex = "1";
		document.getElementById("lat23").classList.remove("hilangi");
		document.getElementById("x2").innerHTML=isi[2];
		document.getElementById("x3x0").innerHTML=isi[2];
		document.getElementById("xx2").innerHTML=isi[2];
		lan=0;
	}
	else if (document.getElementById("jwb1").value==hasil ){
		document.getElementById("nonav22").style.backgroundColor="#00FF00";
		document.getElementById("nonav22").style.color="#006A4E";
		document.getElementById("lat22").style.height = "0";
		document.getElementById("lat22").style.zIndex = "0";
		
		document.getElementById("lat22").classList.toggle("hilangi");

		document.getElementById("jwb1").style.borderColor="#006A4E";

		document.getElementById("lat23").style.height = "180px";
		document.getElementById("lat23").style.zIndex = "1";
		document.getElementById("lat23").classList.remove("hilangi");
		document.getElementById("x2").innerHTML=isi[2];
		document.getElementById("x3x0").innerHTML=isi[2];
		document.getElementById("xx2").innerHTML=isi[2];
		lan=0;
	}
	else{
		document.getElementById("nonav22").style.backgroundColor="red";
		document.getElementById("nonav22").style.color="white";
		document.getElementById("lat22").style.height = "0";
		document.getElementById("lat22").style.zIndex = "0";
		
		document.getElementById("jwb1").style.borderColor="red";

		document.getElementById("lat22").classList.toggle("hilangi");

		document.getElementById("lat23").style.height = "180px";
		document.getElementById("lat23").style.zIndex = "1";
		document.getElementById("lat23").classList.remove("hilangi");
		document.getElementById("x2").innerHTML=isi[2];
		document.getElementById("x3x0").innerHTML=isi[2];
		document.getElementById("xx2").innerHTML=isi[2];
		lan=0;
	}
}

function back22(){
	let aa=((isi[2]*isi[2])*(a[2]));
	let bb=(b[2]*isi[2]);
	let hasil=aa+bb+c[2];

	lan=0;
	lan1=0;
	lan2=0;
	lan3=0;

	//input a3
	if (document.getElementById("ax2").value=="" ){
		document.getElementById("ax2").style.borderColor="red";
	}
	else if (document.getElementById("ax2").value==aa ){
		document.getElementById("ax2").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("ax2").style.borderColor="red";
	}

	//input b3
	if (document.getElementById("bx2").value=="" ){
		document.getElementById("bx2").style.borderColor="red";
	}
	else if (document.getElementById("bx2").value==bb ){
		document.getElementById("bx2").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("bx2").style.borderColor="red";
	}

	//input c3
	if (document.getElementById("cx2").value=="" ){
		document.getElementById("cx2").style.borderColor="red";
	}
	else if (document.getElementById("cx2").value=="1" ){
		document.getElementById("cx2").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("cx2").style.borderColor="red";
	}

	//input jawab3
	if (document.getElementById("jwb2").value=="" ){
		document.getElementById("nonav23").style.backgroundColor="red";
		document.getElementById("nonav23").style.color="white";
		document.getElementById("lat23").style.height = "0";
		document.getElementById("lat23").style.zIndex = "0";
		
		document.getElementById("lat23").classList.toggle("hilangi");

		document.getElementById("jwb2").style.borderColor="red";

		document.getElementById("lat22").style.height = "180px";
		document.getElementById("lat22").style.zIndex = "1";
		document.getElementById("lat22").classList.toggle("hilangi");
	}
	else if (document.getElementById("jwb2").value==hasil ){
		document.getElementById("nonav23").style.backgroundColor="#00FF00";
		document.getElementById("nonav23").style.color="#006A4E";
		document.getElementById("lat23").style.height = "0";
		document.getElementById("lat23").style.zIndex = "0";
		
		document.getElementById("lat23").classList.toggle("hilangi");

		document.getElementById("jwb2").style.borderColor="#006A4E";

		document.getElementById("lat22").style.height = "180px";
		document.getElementById("lat22").style.zIndex = "1";
		document.getElementById("lat22").classList.toggle("hilangi");
	}
	else{
		document.getElementById("nonav23").style.backgroundColor="red";
		document.getElementById("nonav23").style.color="white";
		document.getElementById("lat23").style.height = "0";
		document.getElementById("lat23").style.zIndex = "0";
		
		document.getElementById("jwb2").style.borderColor="red";

		document.getElementById("lat23").classList.toggle("hilangi");

		document.getElementById("lat22").style.height = "180px";
		document.getElementById("lat22").style.zIndex = "1";
		document.getElementById("lat22").classList.toggle("hilangi");
	}
}

function m2cek3(){
	let aa=((isi[2]*isi[2])*(a[2]));
	let bb=(b[2]*isi[2]);
	let hasil=aa+bb+c[2];

	//input jawab3
	if (document.getElementById("jwb2").value==""){
		document.getElementById("nonav23").style.backgroundColor="red";
		document.getElementById("nonav23").style.color="white";
		document.getElementById("jwb2").style.borderColor="red";
	}
	else if (document.getElementById("jwb2").value==hasil ){
		document.getElementById("nonav23").style.backgroundColor="#00FF00";
		document.getElementById("nonav23").style.color="#006A4E";
		document.getElementById("jwb2").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("nonav23").style.backgroundColor="red";
		document.getElementById("nonav23").style.color="white";

		document.getElementById("jwb2").style.borderColor="red";
	}

	//input a3
	if (document.getElementById("ax2").value=="" ){
		document.getElementById("ax2").style.borderColor="red";
	}
	else if (document.getElementById("ax2").value==aa ){
		document.getElementById("ax2").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("ax2").style.borderColor="red";
	}

	//input b3
	if (document.getElementById("bx2").value=="" ){
		document.getElementById("bx2").style.borderColor="red";
	}
	else if (document.getElementById("bx2").value==bb ){
		document.getElementById("bx2").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("bx2").style.borderColor="red";
	}

	//input c3
	if (document.getElementById("cx2").value=="" ){
		document.getElementById("cx2").style.borderColor="red";
	}
	else if (document.getElementById("cx2").value=="1" ){
		document.getElementById("cx2").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("cx2").style.borderColor="red";
	}
}

function next24(){
	let aa=((isi[2]*isi[2])*(a[2]));
	let bb=(b[2]*isi[2]);
	let hasil=aa+bb+c[2];

	lan=0;
	lan1=0;
	lan2=0;
	lan3=0;

	//input a3
	if (document.getElementById("ax2").value==""){
		document.getElementById("ax2").style.borderColor="red";
	}
	else if (document.getElementById("ax2").value==aa ){
		document.getElementById("ax2").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("ax2").style.borderColor="red";
	}

	//input b3
	if (document.getElementById("bx2").value==""){
		document.getElementById("bx2").style.borderColor="red";
	}
	else if (document.getElementById("bx2").value==bb ){
		document.getElementById("bx2").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("bx2").style.borderColor="red";
	}

	//input c3
	if (document.getElementById("cx2").value==""){
		document.getElementById("cx2").style.borderColor="red";
	}
	else if (document.getElementById("cx2").value=="1" ){
		document.getElementById("cx2").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("cx2").style.borderColor="red";
	}

	//input jawab3
	if (document.getElementById("jwb2").value==""){
		document.getElementById("nonav23").style.backgroundColor="red";
		document.getElementById("nonav23").style.color="white";
		document.getElementById("lat23").style.height = "0";
		document.getElementById("lat23").style.zIndex = "0";
		
		document.getElementById("lat23").classList.toggle("hilangi");

		document.getElementById("jwb2").style.borderColor="red";

		document.getElementById("lat24").style.height = "180px";
		document.getElementById("lat24").style.zIndex = "1";
		document.getElementById("lat24").classList.remove("hilangi");
		document.getElementById("x3").innerHTML=isi[3];
		document.getElementById("x4x0").innerHTML=isi[3];
		document.getElementById("xx3").innerHTML=isi[3];
		lan=0;
	}
	else if (document.getElementById("jwb2").value==hasil ){
		document.getElementById("nonav23").style.backgroundColor="#00FF00";
		document.getElementById("nonav23").style.color="#006A4E";
		document.getElementById("lat23").style.height = "0";
		document.getElementById("lat23").style.zIndex = "0";
		
		document.getElementById("lat23").classList.toggle("hilangi");

		document.getElementById("jwb2").style.borderColor="#006A4E";

		document.getElementById("lat24").style.height = "180px";
		document.getElementById("lat24").style.zIndex = "1";
		document.getElementById("lat24").classList.remove("hilangi");
		document.getElementById("x3").innerHTML=isi[3];
		document.getElementById("x4x0").innerHTML=isi[3];
		document.getElementById("xx3").innerHTML=isi[3];
		lan=0;
	}
	else{
		document.getElementById("nonav23").style.backgroundColor="red";
		document.getElementById("nonav23").style.color="white";
		document.getElementById("lat23").style.height = "0";
		document.getElementById("lat23").style.zIndex = "0";
		
		document.getElementById("jwb2").style.borderColor="red";
		document.getElementById("lat23").classList.toggle("hilangi");

		document.getElementById("lat24").style.height = "180px";
		document.getElementById("lat24").style.zIndex = "1";
		document.getElementById("lat24").classList.remove("hilangi");
		document.getElementById("x3").innerHTML=isi[3];
		document.getElementById("x4x0").innerHTML=isi[3];
		document.getElementById("xx3").innerHTML=isi[3];
		lan=0;
	}
}

function back23(){
	let aa=((isi[3]*isi[3])*(a[3]));
	let bb=(b[3]*isi[3]);
	let hasil=aa+bb+c[3];

	lan=0;
	lan1=0;
	lan2=0;
	lan3=0;

	//input a4
	if (document.getElementById("ax3").value==""){
		document.getElementById("ax3").style.borderColor="red";
	}
	else if (document.getElementById("ax3").value==aa ){
		document.getElementById("ax3").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("ax3").style.borderColor="red";
	}

	//input b4
	if (document.getElementById("bx3").value==""){
		document.getElementById("bx3").style.borderColor="red";
	}
	else if (document.getElementById("bx3").value==bb ){
		document.getElementById("bx3").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("bx3").style.borderColor="red";
	}

	//input c4
	if (document.getElementById("cx3").value=="" ){
		document.getElementById("cx3").style.borderColor="red";
	}
	else if (document.getElementById("cx3").value=="2" ){
		document.getElementById("cx3").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("cx3").style.borderColor="red";
	}

	//input jawab4
	if (document.getElementById("jwb3").value==""){
		document.getElementById("nonav24").style.backgroundColor="red";
		document.getElementById("nonav24").style.color="white";
		document.getElementById("lat24").style.height = "0";
		document.getElementById("lat24").style.zIndex = "0";
		
		document.getElementById("lat24").classList.toggle("hilangi");

		document.getElementById("jwb3").style.borderColor="red";

		document.getElementById("lat23").style.height = "180px";
		document.getElementById("lat23").style.zIndex = "1";
		document.getElementById("lat23").classList.toggle("hilangi");
	}
	else if (document.getElementById("jwb3").value==hasil ){
		document.getElementById("nonav24").style.backgroundColor="#00FF00";
		document.getElementById("nonav24").style.color="#006A4E";
		document.getElementById("lat24").style.height = "0";
		document.getElementById("lat24").style.zIndex = "0";
		
		document.getElementById("lat24").classList.toggle("hilangi");

		document.getElementById("jwb3").style.borderColor="#006A4E";

		document.getElementById("lat23").style.height = "180px";
		document.getElementById("lat23").style.zIndex = "1";
		document.getElementById("lat23").classList.toggle("hilangi");
	}
	else{
		document.getElementById("nonav24").style.backgroundColor="red";
		document.getElementById("nonav24").style.color="white";
		document.getElementById("lat24").style.height = "0";
		document.getElementById("lat24").style.zIndex = "0";
		
		document.getElementById("jwb3").style.borderColor="red";

		document.getElementById("lat24").classList.toggle("hilangi");

		document.getElementById("lat23").style.height = "180px";
		document.getElementById("lat23").style.zIndex = "1";
		document.getElementById("lat23").classList.toggle("hilangi");
	}
}

function next25(){
	let aa=((isi[3]*isi[3])*(a[3]));
	let bb=(b[3]*isi[3]);
	let hasil=aa+bb+c[3];
	let xx4 = document.querySelectorAll(".xx4");
	//input a4
	if (document.getElementById("ax3").value==""){
		document.getElementById("ax3").style.borderColor="red";
	}
	else if (document.getElementById("ax3").value==aa ){
		document.getElementById("ax3").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("ax3").style.borderColor="red";
	}

	//input b4
	if (document.getElementById("bx3").value==""){
		document.getElementById("bx3").style.borderColor="red";
	}
	else if (document.getElementById("bx3").value==bb ){
		document.getElementById("bx3").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("bx3").style.borderColor="red";
	}

	//input c4
	if (document.getElementById("cx3").value==""){
		document.getElementById("cx3").style.borderColor="red";
	}
	else if (document.getElementById("cx3").value=="2" ){
		document.getElementById("cx3").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("cx3").style.borderColor="red";
	}

	//input jawab4
	if (document.getElementById("jwb3").value==""){
		document.getElementById("nonav24").style.backgroundColor="red";
		document.getElementById("nonav24").style.color="white";
		document.getElementById("lat24").style.height = "0";
		document.getElementById("lat24").style.zIndex = "0";
		
		document.getElementById("jwb3").style.borderColor="red";

		document.getElementById("lat24").classList.toggle("hilangi");

		document.getElementById("lat25").style.height = "180px";
		document.getElementById("lat25").style.zIndex = "1";
		document.getElementById("lat25").classList.remove("hilangi");
		document.getElementById("x4").innerHTML=isi[4];
		document.getElementById("x5x0").innerHTML=isi[4];
		// document.querySelectorAll(".xx4").innerHTML=isi[4];
		xx4[0].innerHTML=isi[4];
		xx4[1].innerHTML=isi[4];
		xx4[2].innerHTML=isi[4];
		
		lan=0;
	}
	else if (document.getElementById("jwb3").value==hasil ){
		document.getElementById("nonav24").style.backgroundColor="#00FF00";
		document.getElementById("nonav24").style.color="#006A4E";
		document.getElementById("lat24").style.height = "0";
		document.getElementById("lat24").style.zIndex = "0";
		
		document.getElementById("jwb3").style.borderColor="#006A4E";

		document.getElementById("lat24").classList.toggle("hilangi");

		document.getElementById("lat25").style.height = "180px";
		document.getElementById("lat25").style.zIndex = "1";
		document.getElementById("lat25").classList.remove("hilangi");
		document.getElementById("x4").innerHTML=isi[4];
		document.getElementById("x5x0").innerHTML=isi[4];
		// document.getElementById("xx4").innerHTML=isi[4];
		xx4[0].innerHTML=isi[4];
		xx4[1].innerHTML=isi[4];
		xx4[2].innerHTML=isi[4];
		lan=0;
	}
	else{
		document.getElementById("nonav24").style.backgroundColor="red";
		document.getElementById("nonav24").style.color="white";
		document.getElementById("lat24").style.height = "0";
		document.getElementById("lat24").style.zIndex = "0";
		
		document.getElementById("jwb3").style.borderColor="red";

		document.getElementById("lat24").classList.toggle("hilangi");

		document.getElementById("lat25").style.height = "180px";
		document.getElementById("lat25").style.zIndex = "1";
		document.getElementById("lat25").classList.remove("hilangi");
		document.getElementById("x4").innerHTML=isi[4];
		document.getElementById("x5x0").innerHTML=isi[4];
		// document.getElementById("xx4").innerHTML=isi[4];
		xx4[0].innerHTML=isi[4];
		xx4[1].innerHTML=isi[4];
		xx4[2].innerHTML=isi[4];
		lan=0;
	}
}

function m2cek4(){
	let aa=((isi[3]*isi[3])*(a[3]));
	let bb=(b[3]*isi[3]);
	let hasil=aa+bb+c[3];
	//input jawab4
	if (document.getElementById("jwb3").value==""){
		document.getElementById("nonav24").style.backgroundColor="red";
		document.getElementById("nonav24").style.color="white";
		document.getElementById("jwb3").style.borderColor="red";
	}
	else if (document.getElementById("jwb3").value==hasil ){
		document.getElementById("nonav24").style.backgroundColor="#00FF00";
		document.getElementById("nonav24").style.color="#006A4E";
		document.getElementById("jwb3").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("nonav24").style.backgroundColor="red";
		document.getElementById("nonav24").style.color="white";
		
		document.getElementById("jwb3").style.borderColor="red";

	}

	//input a4
	if (document.getElementById("ax3").value==""){
		document.getElementById("ax3").style.borderColor="red";
	}
	else if (document.getElementById("ax3").value==aa ){
		document.getElementById("ax3").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("ax3").style.borderColor="red";
	}

	//input b4
	if (document.getElementById("bx3").value==""){
		document.getElementById("bx3").style.borderColor="red";
	}
	else if (document.getElementById("bx3").value==bb ){
		document.getElementById("bx3").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("bx3").style.borderColor="red";
	}

	//input c4
	if (document.getElementById("cx3").value==""){
		document.getElementById("cx3").style.borderColor="red";
	}
	else if (document.getElementById("cx3").value=="2" ){
		document.getElementById("cx3").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("cx3").style.borderColor="red";
	}
}

function back24(){
	let aa=a[4]*((isi[4]-1)*(isi[4]-1));
	let hasil=aa-1;

	lan=0;
	lan1=0;
	lan2=0;
	lan3=0;

	//input a5
	if (document.getElementById("ax4").value==""){
		document.getElementById("ax4").style.borderColor="red";
	}
	else if (document.getElementById("ax4").value==aa ){
		document.getElementById("ax4").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("ax4").style.borderColor="red";
	}

	//input b5
	if (document.getElementById("bx4").value==""){
		document.getElementById("bx4").style.borderColor="red";
	}
	else if (document.getElementById("bx4").value==bb ){
		document.getElementById("bx4").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("bx4").style.borderColor="red";
	}

	// //input c5
	// if (document.getElementById("cx4").value==""){
	// 	document.getElementById("cx4").style.borderColor="red";
	// }
	// else if (document.getElementById("cx4").value=="1"){
	// 	document.getElementById("cx4").style.borderColor="#006A4E";
	// }
	// else{
	// 	document.getElementById("cx4").style.borderColor="red";
	// }

	//input jawab5
	if (document.getElementById("jwb4").value==""){
		document.getElementById("nonav25").style.backgroundColor="red";
		document.getElementById("nonav25").style.color="white";
		document.getElementById("lat25").style.height = "0";
		document.getElementById("lat25").style.zIndex = "0";
		
		document.getElementById("lat25").classList.toggle("hilangi");

		document.getElementById("lat24").style.height = "180px";
		document.getElementById("lat24").style.zIndex = "1";
		document.getElementById("jwb4").style.borderColor="red";
		document.getElementById("lat24").classList.toggle("hilangi");
	}
	else if (document.getElementById("jwb4").value==hasil ){
		document.getElementById("nonav25").style.backgroundColor="#00FF00";
		document.getElementById("nonav25").style.color="#006A4E";
		document.getElementById("lat25").style.height = "0";
		document.getElementById("lat25").style.zIndex = "0";
		
		document.getElementById("lat25").classList.toggle("hilangi");

		document.getElementById("lat24").style.height = "180px";
		document.getElementById("lat24").style.zIndex = "1";
		document.getElementById("jwb4").style.borderColor="#006A4E";
		document.getElementById("lat24").classList.toggle("hilangi");
	}
	else{
		document.getElementById("nonav25").style.backgroundColor="red";
		document.getElementById("nonav25").style.color="white";
		document.getElementById("lat25").style.height = "0";
		document.getElementById("lat25").style.zIndex = "0";
		
		document.getElementById("jwb4").style.borderColor="red";

		document.getElementById("lat25").classList.toggle("hilangi");

		document.getElementById("lat24").style.height = "180px";
		document.getElementById("lat24").style.zIndex = "1";
		document.getElementById("lat24").classList.toggle("hilangi");
	}
}


function m2cek5(){
	let aa=a[4]*((isi[4]-1)*(isi[4]-1));
	let hasil=aa-1;
	//input jawab5
	if (document.getElementById("jwb4").value==""){
		document.getElementById("nonav25").style.backgroundColor="red";
		document.getElementById("nonav25").style.color="white";
		document.getElementById("jwb4").style.borderColor="red";
	}
	else if (document.getElementById("jwb4").value==hasil ){
		document.getElementById("nonav25").style.backgroundColor="#00FF00";
		document.getElementById("nonav25").style.color="#006A4E";
		document.getElementById("jwb4").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("nonav25").style.backgroundColor="red";
		document.getElementById("nonav25").style.color="white";
		
		document.getElementById("jwb4").style.borderColor="red";

	}

	//input a5
	if (document.getElementById("ax4").value==""){
		document.getElementById("ax4").style.borderColor="red";
	}
	else if (document.getElementById("ax4").value==aa ){
		document.getElementById("ax4").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("ax4").style.borderColor="red";
	}

	//input b5
	if (document.getElementById("bx4").value==""){
		document.getElementById("bx4").style.borderColor="red";
	}
	else if (document.getElementById("bx4").value==bb ){
		document.getElementById("bx4").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("bx4").style.borderColor="red";
	}

	//input c5
	// if (document.getElementById("cx4").value==""){
	// 	document.getElementById("cx4").style.borderColor="red";
	// }
	// else if (document.getElementById("cx4").value=="1"){
	// 	document.getElementById("cx4").style.borderColor="#006A4E";
	// }
	// else{
	// 	document.getElementById("cx4").style.borderColor="red";
	// }
}