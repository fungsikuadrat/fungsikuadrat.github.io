function cekatas1(){
    let atas1a=document.getElementById("atas1a");
    let atas1b=document.getElementById("atas1b");
    let atas1c=document.getElementById("atas1c");
    let sifatnav=document.getElementById("sifatnav1");

    let val,val1,val2,val3=0;
    if(atas1a.value==""){
        atas1a.style.borderColor="red";
    }
    else if(atas1a.value>0){
        atas1a.style.borderColor="#006A4E";
        val1=1;
    }
    else{
        atas1a.style.borderColor="red";
    }

    if(atas1b.value==""){
        atas1b.style.borderColor="red";
    }
    else{
        atas1b.style.borderColor="#006A4E";
        val2=1;
    }

    if(atas1c.value==""){
        atas1c.style.borderColor="red";
    }
    else{
        atas1c.style.borderColor="#006A4E";
        val3=1;
    }

    val=val1+val2+val3;
    if(val==3){
        sifatnav.style.backgroundColor="#00FF00";
        sifatnav.style.color="#006A4E";
    }
    else{
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
    }
}


function sifat2(){
    let atas1a=document.getElementById("atas1a");
    let atas1b=document.getElementById("atas1b");
    let atas1c=document.getElementById("atas1c");
    let sifatnav=document.getElementById("sifatnav1");

    let val,val1,val2,val3=0;
    if(atas1a.value==""){
        atas1a.style.borderColor="red";
    }
    else if(atas1a.value>0){
        atas1a.style.borderColor="#006A4E";
        val1=1;
    }
    else{
        atas1a.style.borderColor="red";
    }

    if(atas1b.value==""){
        atas1b.style.borderColor="red";
    }
    else{
        atas1b.style.borderColor="#006A4E";
        val2=1;
    }

    if(atas1c.value==""){
        atas1c.style.borderColor="red";
    }
    else{
        atas1c.style.borderColor="#006A4E";
        val3=1;
    }

    val=val1+val2+val3;
    if(val==3){
        sifatnav.style.backgroundColor="#00FF00";
        sifatnav.style.color="#006A4E";
    }
    else{
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
    }
    let sifat1=document.getElementById("sifat1");
    let sifat2=document.getElementById("sifat2");
    sifat1.classList.toggle("hilang");
    sifat2.classList.toggle("hilang");
}

function ceksifat2(){
    let atas2a=document.getElementById("atas2a");
    let atas2b=document.getElementById("atas2b");
    let atas2c=document.getElementById("atas2c");
    let sifatnav=document.getElementById("sifatnav2");
    let determinan=(atas2b.value*atas2b.value)-(4*atas2a.value*atas2c.value);
    console.log("det "+determinan);
    if(atas2a.value==""){
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
        atas2a.style.borderColor="red";
    }
    else if(atas2b.value==""){
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
        atas2b.style.borderColor="red";
    }
    else if(atas2c.value==""){
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
        atas2c.style.borderColor="red";
    }
    else if(determinan==0){
        sifatnav.style.backgroundColor="#00FF00";
        sifatnav.style.color="#006A4E";
    }
    else{
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
    }
}

function backsifat1(){
    let atas2a=document.getElementById("atas2a");
    let atas2b=document.getElementById("atas2b");
    let atas2c=document.getElementById("atas2c");
    let sifatnav=document.getElementById("sifatnav2");
    let determinan=(atas2b.value*atas2b.value)-(4*atas2a.value*atas2c.value);
    console.log("det "+determinan);
    if(atas2a.value==""){
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
        atas2a.style.borderColor="red";
    }
    else if(atas2b.value==""){
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
        atas2b.style.borderColor="red";
    }
    else if(atas2c.value==""){
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
        atas2c.style.borderColor="red";
    }
    else if(determinan==0){
        sifatnav.style.backgroundColor="#00FF00";
        sifatnav.style.color="#006A4E";
    }
    else{
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
    }
    let sifat1=document.getElementById("sifat1");
    let sifat2=document.getElementById("sifat2");
    sifat1.classList.toggle("hilang");
    sifat2.classList.toggle("hilang");
}
function sifat3(){
    let atas2a=document.getElementById("atas2a");
    let atas2b=document.getElementById("atas2b");
    let atas2c=document.getElementById("atas2c");
    let sifatnav=document.getElementById("sifatnav2");
    let determinan=(atas2b.value*atas2b.value)-(4*atas2a.value*atas2c.value);
    console.log("det "+determinan);
    if(atas2a.value==""){
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
        atas2a.style.borderColor="red";
    }
    else if(atas2b.value==""){
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
        atas2b.style.borderColor="red";
    }
    else if(atas2c.value==""){
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
        atas2c.style.borderColor="red";
    }
    else if(determinan==0){
        sifatnav.style.backgroundColor="#00FF00";
        sifatnav.style.color="#006A4E";
    }
    else{
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
    }
    let sifat3=document.getElementById("sifat3");
    let sifat2=document.getElementById("sifat2");
    sifat3.classList.toggle("hilang");
    sifat2.classList.toggle("hilang");
}

function ceksifat3(){
    let atas3a=document.getElementById("atas3a");
    let atas3b=document.getElementById("atas3b");
    let atas3c=document.getElementById("atas3c");
    let sifatnav=document.getElementById("sifatnav3");
    let determinan=(atas3b.value*atas3b.value)-(4*atas3a.value*atas3c.value);

    if(atas3b.value==""){
        atas3b.style.borderColor="red";
    }
    else{
        atas3b.style.borderColor="#006A4E";
    }
    
    if(atas3c.value==""){
        atas3c.style.borderColor="red";
    }
    else{
        atas3c.style.borderColor="#006A4E";
    }

    if(atas3a.value==""){
        atas3a.style.borderColor="red";
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
    }
    else if(atas3a.value<0){
        atas3a.style.borderColor="#006A4E";
        if(determinan>0){
            sifatnav.style.backgroundColor="#00FF00";
            sifatnav.style.color="#006A4E";
        }
        else{
            sifatnav.style.backgroundColor="red";
            sifatnav.style.color="white";
        }
    }
    else{
        atas3a.style.borderColor="red";
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
    }
}

function backsifat2(){
    let atas3a=document.getElementById("atas3a");
    let atas3b=document.getElementById("atas3b");
    let atas3c=document.getElementById("atas3c");
    let sifatnav=document.getElementById("sifatnav3");
    let determinan=(atas3b.value*atas3b.value)-(4*atas3a.value*atas3c.value);

    if(atas3b.value==""){
        atas3b.style.borderColor="red";
    }
    else{
        atas3b.style.borderColor="#006A4E";
    }
    
    if(atas3c.value==""){
        atas3c.style.borderColor="red";
    }
    else{
        atas3c.style.borderColor="#006A4E";
    }

    if(atas3a.value==""){
        atas3a.style.borderColor="red";
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
    }
    else if(atas3a.value<0){
        atas3a.style.borderColor="#006A4E";
        if(determinan>0){
            sifatnav.style.backgroundColor="#00FF00";
            sifatnav.style.color="#006A4E";
        }
        else{
            sifatnav.style.backgroundColor="red";
            sifatnav.style.color="white";
        }
    }
    else{
        atas3a.style.borderColor="red";
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
    }
    let sifat3=document.getElementById("sifat3");
    let sifat2=document.getElementById("sifat2");
    sifat3.classList.toggle("hilang");
    sifat2.classList.toggle("hilang");
}

function simetri24(){
    let atas3a=document.getElementById("atas3a");
    let atas3b=document.getElementById("atas3b");
    let atas3c=document.getElementById("atas3c");
    let sifatnav=document.getElementById("sifatnav3");
    let determinan=(atas3b.value*atas3b.value)-(4*atas3a.value*atas3c.value);

    if(atas3b.value==""){
        atas3b.style.borderColor="red";
    }
    else{
        atas3b.style.borderColor="#006A4E";
    }
    
    if(atas3c.value==""){
        atas3c.style.borderColor="red";
    }
    else{
        atas3c.style.borderColor="#006A4E";
    }

    if(atas3a.value==""){
        atas3a.style.borderColor="red";
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
    }
    else if(atas3a.value<0){
        atas3a.style.borderColor="#006A4E";
        if(determinan>0){
            sifatnav.style.backgroundColor="#00FF00";
            sifatnav.style.color="#006A4E";
        }
        else{
            sifatnav.style.backgroundColor="red";
            sifatnav.style.color="white";
        }
    }
    else{
        atas3a.style.borderColor="red";
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
    }
    let sifat3=document.getElementById("sifat3");
    let sifat4=document.getElementById("sifat4");
    sifat3.classList.toggle("hilang");
    sifat4.classList.toggle("hilang");
}


function ceksifat4(){
    let atas4a=document.getElementById("atas4a");
    let atas4b=document.getElementById("atas4b");
    let atas4c=document.getElementById("atas4c");
    let sifatnav=document.getElementById("sifatnav4");
    let val,val1,val2,val3,val4=0;
    let determinan=(atas4b.value*atas4b.value)-(4*atas4a.value*atas4c.value);

    if(atas4b.value==""){
        atas4b.style.borderColor="red";
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
    }
    else if(atas4b.value>0){
        atas4b.style.borderColor="#006A4E";
        val1=1
    }
    else{
        atas4b.style.borderColor="red";
    }

    if(atas4c.value==""){
        atas4c.style.borderColor="red";
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
        
    }
    else if(atas4c.value<0){
        atas4c.style.borderColor="#006A4E";
        val2=1;
    }
    else{
        atas4c.style.borderColor="red";
    }

    if(atas4a.value==""){
        atas4a.style.borderColor="red";
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
    }
    else if(atas4a.value>0){
        atas4a.style.borderColor="#006A4E";
        val3=1
    }
    else{
        atas4a.style.borderColor="red";
    }
    
    if(determinan>0){
        val4=1
    }

    val=val1+val2+val3+val4;
    if(val==4){
        sifatnav.style.backgroundColor="#00FF00";
        sifatnav.style.color="#006A4E";
    }
    else{
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
    }
    // else if(atas4a.value>0){
    //     atas4a.style.borderColor="#006A4E";
    //     if(determinan>0){
    //         if(atas4c.value<0){
    //             if(atas4b>0){
    //                 sifatnav.style.backgroundColor="#00FF00";
    //                 sifatnav.style.color="#006A4E";
    //             }
    //         }
    //     }
    // }
}
function backsifat3(){
    let atas4a=document.getElementById("atas4a");
    let atas4b=document.getElementById("atas4b");
    let atas4c=document.getElementById("atas4c");
    let sifatnav=document.getElementById("sifatnav4");
    let val,val1,val2,val3,val4=0;
    let determinan=(atas4b.value*atas4b.value)-(4*atas4a.value*atas4c.value);

    if(atas4b.value==""){
        atas4b.style.borderColor="red";
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
    }
    else if(atas4b.value>0){
        atas4b.style.borderColor="#006A4E";
        val1=1
    }
    else{
        atas4b.style.borderColor="red";
    }

    if(atas4c.value==""){
        atas4c.style.borderColor="red";
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
        
    }
    else if(atas4c.value<0){
        atas4c.style.borderColor="#006A4E";
        val2=1;
    }
    else{
        atas4c.style.borderColor="red";
    }

    if(atas4a.value==""){
        atas4a.style.borderColor="red";
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
    }
    else if(atas4a.value>0){
        atas4a.style.borderColor="#006A4E";
        val3=1
    }
    else{
        atas4a.style.borderColor="red";
    }
    
    if(determinan>0){
        val4=1
    }

    val=val1+val2+val3+val4;
    if(val==4){
        sifatnav.style.backgroundColor="#00FF00";
        sifatnav.style.color="#006A4E";
    }
    else{
        sifatnav.style.backgroundColor="red";
        sifatnav.style.color="white";
    }
    let sifat3=document.getElementById("sifat3");
    let sifat4=document.getElementById("sifat4");
    sifat3.classList.toggle("hilang");
    sifat4.classList.toggle("hilang");
}