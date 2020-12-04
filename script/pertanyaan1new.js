let hasel;
	let x;
	let start = 0, end = 2;
        x = (Math.random() * (end - start) + start) ^ 0;
        hasel = x;
        
let soalp1=['Dari bentuk berikut yang bukan merupakan fungsi kuadrat, adalah...', 'Dari bentuk berikut yang bukan merupakan fungsi kuadrat, adalah...'];
let jwbpa=['\\[f(x)=9-3x-2x^2\\]', '\\[f(x)=6x+3x^2-9\\]'];
let jwbpb=['\\[f(x)=3x^2+6x-9\\]', '\\[f(x)=3x^3+2x\\]'];
let jwbpc=['\\[f(x)=2x+4\\]', '\\[f(x)=-4x^2+2x+12\\]'];

let kunci1=['c', 'b'];
let soalp2=['Tentukan nilai $a,b , $ dan $c$ dari fungsi kuadrat dibawah ini : <br> \\[f(x)=-x^2+5x\\]'];

document.getElementById("a1").innerHTML=jwbpa[hasel];
document.getElementById("b1").innerHTML=jwbpb[hasel];
document.getElementById("c1").innerHTML=jwbpc[hasel];

//soal2
let acak2 = new Object;
let x2;
let txt="\\[f(x)=";
let start2 = -9, end2 = 9;
for(let i=0; i<3;i++){
    x2 = (Math.random() * (end2 - start2) + start2) ^ 0;
    acak2[i] = x2;
}
console.log("acak0 " +acak2[0]);
console.log("acak1 " +acak2[1]);
console.log("acak2 " +acak2[2]);
// let txt="\\["+acak2[0]+"x^2+"+acak2[1]+"x+"+acak2[2]+"\\]";

//nilai a
if(acak2[0]==1){
    txt +="x^2 ";
}
else if(acak2[0]>0){
    txt +=+acak2[0]+"x^2 ";
}

if(acak2[0]==-1){
    txt +="-x^2 ";
}
else if(acak2[0]<0){
    txt +=acak2[0]+"x^2 ";
}
if(acak2[0]==0){
    acak2[0]=2;
    txt +=acak2[0]+"x^2 ";
}

//nilai b
if(acak2[1]==1){
    txt +="+ x ";
}
else if(acak2[1]>0){
    txt +="+ "+acak2[1]+"x ";
}

if(acak2[1]==-1){
    txt +="- x ";
}
else if(acak2[1]<0){
    txt +=acak2[1]+"x ";
}

if(acak2[1]==0){
    txt +=" ";
}

//nilai c
if(acak2[2]==0){
    txt +=" \\]";
}
else if(acak2[2]>0){
    txt +="+ "+acak2[2]+"\\]";
}
else if(acak2[2]<0){
    txt +=acak2[2]+"\\]";
}
document.getElementById("ss2").innerHTML=txt;

//soal3
let acak3 = new Object;
let x3;
let txt3="\\[f(x)=";
let start3 = -9, end3 = 9;
for(let i=0; i<3;i++){
    x3 = (Math.random() * (end3 - start3) + start3) ^ 0;
    acak3[i] = x3;
}

//nilai a3
if(acak3[0]==1){
    txt3 +="x^2 ";
}
else if(acak3[0]>0){
    txt3 +=acak3[0]+"x^2 ";
}

if(acak3[0]==-1){
    txt3 +="-x^2 ";
}
else if(acak3[0]<0){
    txt3 +=acak3[0]+"x^2 ";
}
if(acak3[0]==0){
    acak3[0]=2;
    txt3 +=acak3[0]+"x^2 ";
}

//nilai b
if(acak3[1]==1){
    txt3 +="+ x ";
}
else if(acak3[1]>0){
    txt3 +="+ "+acak3[1]+"x ";
}

if(acak3[1]==-1){
    txt3 +="- x ";
}
else if(acak3[1]<0){
    txt3 +=acak3[1]+"x ";
}

if(acak3[1]==0){
    txt3 +=" ";
}

//nilai c
if(acak3[2]==0){
    txt3 +=" \\]";
}
else if(acak3[2]>0){
    txt3 +="+ "+acak3[2]+"\\]";
}
else if(acak3[2]<0){
    txt3 +=acak3[2]+"\\]";
}
document.getElementById("ss3").innerHTML=txt3;

//soal4
let acak4 = new Object;
let x4;
let txt4="\\[f(x)=";
let start4 = -9, end4 = 9;
for(let i=0; i<3;i++){
    x4 = (Math.random() * (end4 - start4) + start4) ^ 0;
    acak4[i] = x4;
}

//nilai a3
if(acak4[0]==1){
    txt4 +="x^2 ";
}
else if(acak4[0]>0){
    txt4 +=acak4[0]+"x^2 ";
}

if(acak4[0]==-1){
    txt4 +="-x^2 ";
}
else if(acak4[0]<0){
    txt4 +=acak4[0]+"x^2 ";
}
if(acak4[0]==0){
    acak4[0]=2;
    txt4 +=acak4[0]+"x^2 ";
}

//nilai b
if(acak4[1]==1){
    txt4 +="+ x ";
}
else if(acak4[1]>0){
    txt4 +="+ "+acak4[1]+"x ";
}

if(acak4[1]==-1){
    txt4 +="- x ";
}
else if(acak4[1]<0){
    txt4 +=acak4[1]+"x ";
}

if(acak4[1]==0){
    txt4 +=" ";
}

//nilai c
if(acak4[2]==0){
    txt4 +=" \\]";
}
else if(acak4[2]>0){
    txt4 +="+ "+acak4[2]+"\\]";
}
else if(acak4[2]<0){
    txt4 +=acak4[2]+"\\]";
}
document.getElementById("ss4").innerHTML=txt4;

//soal5
let acak5 = new Object;
let x5;
let txt5="\\[f(x)=";
let start5 = -9, end5 = 9;
for(let i=0; i<3;i++){
    x5 = (Math.random() * (end5 - start5) + start5) ^ 0;
    acak5[i] = x5;
}

//nilai a
if(acak5[0]==1){
    txt5 +="x^2 ";
}
else if(acak5[0]>0){
    txt5 +=acak5[0]+"x^2 ";
}

if(acak5[0]==-1){
    txt5 +="-x^2 ";
}
else if(acak5[0]<0){
    txt5 +=acak5[0]+"x^2 ";
}
if(acak5[0]==0){
    acak5[0]=2;
    txt5 +=acak5[0]+"x^2 ";
}

//nilai b
if(acak5[1]==1){
    txt5 +="+ x ";
}
else if(acak5[1]>0){
    txt5 +="+ "+acak5[1]+"x ";
}

if(acak5[1]==-1){
    txt5 +="- x ";
}
else if(acak5[1]<0){
    txt5 +=acak5[1]+"x ";
}

if(acak5[1]==0){
    txt5 +=" ";
}

//nilai c
if(acak5[2]==0){
    txt5 +=" \\]";
}
else if(acak5[2]>0){
    txt5 +="+ "+acak5[2]+"\\]";
}
else if(acak5[2]<0){
    txt5 +=acak5[2]+"\\]";
}
document.getElementById("ss5").innerHTML=txt5;

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
			if(selectedValue==kunci1[hasel]){
				document.getElementById("nonav1").style.backgroundColor="#00FF00";
				document.getElementById("nonav1").style.color="#006A4E";
			}
			else{
				document.getElementById("nonav1").style.backgroundColor="red";
				document.getElementById("nonav1").style.color="white";
			}
}

function next2(){
    MathJax.typeset();
	let rbs = document.querySelectorAll('input[name="pertanyaan1"]');
	let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
			}
			console.log("SELECTED "+selectedValue);
			if(selectedValue==kunci1[hasel]){
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
function m1cek2(){
	// let c3= 1+document.getElementById("jwb2c").value;
	let skor3=0;
	if (document.getElementById("jwb2a").value==acak2[0] ) {
		skor3 += 1;
		document.getElementById("jwb2a").style.borderColor="#006A4E";
	  }
	  else{
		document.getElementById("jwb2a").style.borderColor="red";
	  }

      if (document.getElementById("jwb2b").value==acak2[1] ) {
		skor3 += 1;
		document.getElementById("jwb2b").style.borderColor="#006A4E";
	  }
	  else{
		document.getElementById("jwb2b").style.borderColor="red";
	  }

      if (document.getElementById("jwb2c").value==acak2[2] ) {
		skor3 += 1;
		document.getElementById("jwb2c").style.borderColor="#006A4E";
	  }
	  else{
		document.getElementById("jwb2c").style.borderColor="red";
	  }

	  if(skor3==3){
		document.getElementById("nonav2").style.backgroundColor="#00FF00";
		document.getElementById("nonav2").style.color="#006A4E";
	}
	else{
		document.getElementById("nonav2").style.backgroundColor="red";
		document.getElementById("nonav2").style.color="white";
	}
}

function back1(){
    let skor3=0;
	if (document.getElementById("jwb2a").value==acak2[0] ) {
		skor3 += 1;
		document.getElementById("jwb2a").style.borderColor="#006A4E";
	  }
	  else{
		document.getElementById("jwb2a").style.borderColor="red";
	  }

      if (document.getElementById("jwb2b").value==acak2[1] ) {
		skor3 += 1;
		document.getElementById("jwb2b").style.borderColor="#006A4E";
	  }
	  else{
		document.getElementById("jwb2b").style.borderColor="red";
	  }

      if (document.getElementById("jwb2c").value==acak2[2] ) {
		skor3 += 1;
		document.getElementById("jwb2c").style.borderColor="#006A4E";
	  }
	  else{
		document.getElementById("jwb2c").style.borderColor="red";
	  }

	  if(skor3==3){
		document.getElementById("nonav2").style.backgroundColor="#00FF00";
		document.getElementById("nonav2").style.color="#006A4E";
		document.getElementById("lat2").style.height = "0";
		document.getElementById("lat2").style.zIndex = "0";
		document.getElementById("lat2").classList.toggle("hilangi");

		document.getElementById("lat1").style.height = "240px";
		document.getElementById("lat1").style.zIndex = "1";
		document.getElementById("lat1").classList.toggle("hilangi");
	}
	else{
		document.getElementById("nonav2").style.backgroundColor="red";
		document.getElementById("nonav2").style.color="white";
		document.getElementById("lat2").style.height = "0";
		document.getElementById("lat2").style.zIndex = "0";
		document.getElementById("lat2").classList.toggle("hilangi");
		document.getElementById("lat1").style.height = "240px";
		document.getElementById("lat1").style.zIndex = "1";
		document.getElementById("lat1").classList.toggle("hilangi");
	}
}

function next3(){
    let skor3=0;
	if (document.getElementById("jwb2a").value==acak2[0] ) {
		skor3 += 1;
		document.getElementById("jwb2a").style.borderColor="#006A4E";
	  }
	  else{
		document.getElementById("jwb2a").style.borderColor="red";
	  }

      if (document.getElementById("jwb2b").value==acak2[1] ) {
		skor3 += 1;
		document.getElementById("jwb2b").style.borderColor="#006A4E";
	  }
	  else{
		document.getElementById("jwb2b").style.borderColor="red";
	  }

      if (document.getElementById("jwb2c").value==acak2[2] ) {
		skor3 += 1;
		document.getElementById("jwb2c").style.borderColor="#006A4E";
	  }
	  else{
		document.getElementById("jwb2c").style.borderColor="red";
	  }

	  if(skor3==3){
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

function m1cek3(){
	// let c3= 1+document.getElementById("jwb3c").value;
	let skor3=0;
	if (document.getElementById("jwb3a").value==acak3[0] ) {
		skor3 += 1;
		document.getElementById("jwb3a").style.borderColor="#006A4E";
	  }
	  else{
		document.getElementById("jwb3a").style.borderColor="red";
	  }

      if (document.getElementById("jwb3b").value==acak3[1] ) {
		skor3 += 1;
		document.getElementById("jwb3b").style.borderColor="#006A4E";
	  }
	  else{
		document.getElementById("jwb3b").style.borderColor="red";
	  }

      if (document.getElementById("jwb3c").value==acak3[2] ) {
		skor3 += 1;
		document.getElementById("jwb3c").style.borderColor="#006A4E";
	  }
	  else{
		document.getElementById("jwb3c").style.borderColor="red";
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

function back2(){
	let skor3=0;
	if (document.getElementById("jwb3a").value==acak3[0] ) {
		skor3 += 1;
		document.getElementById("jwb3a").style.borderColor="#006A4E";
	  }
	  else{
		document.getElementById("jwb3a").style.borderColor="red";
	  }

      if (document.getElementById("jwb3b").value==acak3[1] ) {
		skor3 += 1;
		document.getElementById("jwb3b").style.borderColor="#006A4E";
	  }
	  else{
		document.getElementById("jwb3b").style.borderColor="red";
	  }

      if (document.getElementById("jwb3c").value==acak3[2] ) {
		skor3 += 1;
		document.getElementById("jwb3c").style.borderColor="#006A4E";
	  }
	  else{
		document.getElementById("jwb3c").style.borderColor="red";
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

function next4(){
	let skor3=0;
	if (document.getElementById("jwb3a").value==acak3[0] ) {
		skor3 += 1;
		document.getElementById("jwb3a").style.borderColor="#006A4E";
	  }
	  else{
		document.getElementById("jwb3a").style.borderColor="red";
	  }

      if (document.getElementById("jwb3b").value==acak3[1] ) {
		skor3 += 1;
		document.getElementById("jwb3b").style.borderColor="#006A4E";
	  }
	  else{
		document.getElementById("jwb3b").style.borderColor="red";
	  }

      if (document.getElementById("jwb3c").value==acak3[2] ) {
		skor3 += 1;
		document.getElementById("jwb3c").style.borderColor="#006A4E";
	  }
	  else{
		document.getElementById("jwb3c").style.borderColor="red";
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


//cekno4
function m1cek4(){
	// let b4= 1+document.getElementById("jwb4b").value;
	let skor4=0;
	if (document.getElementById("jwb4a").value==acak4[0]) {
		skor4 += 1;
		document.getElementById("jwb4a").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("jwb4a").style.borderColor="red";
	}

	if (document.getElementById("jwb4b").value==acak4[1]) {
		skor4 += 1;
		document.getElementById("jwb4b").style.borderColor="#006A4E";
	} 
	else{
		document.getElementById("jwb4b").style.borderColor="red";
	}

	if (document.getElementById("jwb4c").value==acak4[2]) {
		skor4 += 1;
		document.getElementById("jwb4c").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("jwb4c").style.borderColor="red";
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

function back3(){
	let skor4=0;
	if (document.getElementById("jwb4a").value==acak4[0]) {
		skor4 += 1;
		document.getElementById("jwb4a").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("jwb4a").style.borderColor="red";
	}

	if (document.getElementById("jwb4b").value==acak4[1]) {
		skor4 += 1;
		document.getElementById("jwb4b").style.borderColor="#006A4E";
	} 
	else{
		document.getElementById("jwb4b").style.borderColor="red";
	}

	if (document.getElementById("jwb4c").value==acak4[2]) {
		skor4 += 1;
		document.getElementById("jwb4c").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("jwb4c").style.borderColor="red";
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

function next5(){
	let skor4=0;
	if (document.getElementById("jwb4a").value==acak4[0]) {
		skor4 += 1;
		document.getElementById("jwb4a").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("jwb4a").style.borderColor="red";
	}

	if (document.getElementById("jwb4b").value==acak4[1]) {
		skor4 += 1;
		document.getElementById("jwb4b").style.borderColor="#006A4E";
	} 
	else{
		document.getElementById("jwb4b").style.borderColor="red";
	}

	if (document.getElementById("jwb4c").value==acak4[2]) {
		skor4 += 1;
		document.getElementById("jwb4c").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("jwb4c").style.borderColor="red";
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

//ceksoal5
function back4(){
	let skor5=0;
	if (document.getElementById("jwb5a").value==acak5[0]) {
		skor5 += 1;
		document.getElementById("jwb5a").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("jwb5a").style.borderColor="red";
	}

	if (document.getElementById("jwb5b").value==acak5[1]) {
		skor5 += 1;
		document.getElementById("jwb5b").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("jwb5b").style.borderColor="red";
	}

	if (document.getElementById("jwb5c").value==acak5[2]) {
		skor5 += 1;
		document.getElementById("jwb5c").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("jwb5c").style.borderColor="red";
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
	if (document.getElementById("jwb5a").value==acak5[0]) {
		skor5 += 1;
		document.getElementById("jwb5a").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("jwb5a").style.borderColor="red";
	}

	if (document.getElementById("jwb5b").value==acak5[1]) {
		skor5 += 1;
		document.getElementById("jwb5b").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("jwb5b").style.borderColor="red";
	}

	if (document.getElementById("jwb5c").value==acak5[2]) {
		skor5 += 1;
		document.getElementById("jwb5c").style.borderColor="#006A4E";
	}
	else{
		document.getElementById("jwb5c").style.borderColor="red";
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