function zoomGallery(colNo){
    document.getElementById("imgToggleAuto").checked=false;
    document.getElementById("zoomButton4").disabled=false;
    document.getElementById("zoomButton3").disabled=false;
    document.getElementById("zoomButton2").disabled=false;
    document.getElementById("zoomButton1").disabled=false;
    document.getElementById("zoomButton"+colNo).disabled=true;
    document.getElementById("imageTable").classList = ('row row-cols-'+colNo);
}

function toggleAuto(){
    if(!document.getElementById("imgToggleAuto").checked){
        document.getElementById("zoomButton3").disabled=true;
        document.getElementById("imageTable").classList = ("row row-cols-3");
    }
    else{
        document.getElementById("zoomButton4").disabled=false;
        document.getElementById("zoomButton3").disabled=false;
        document.getElementById("zoomButton2").disabled=false;
        document.getElementById("zoomButton1").disabled=false;
        document.getElementById("imageTable").classList = ("row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4");
    }
}

function sendForm(){
    if(document.getElementById("contactUsForm").checkValidity()){
        alert("Form has been sent successfully! You have been placed in the queue at No. "+Math.round(100+Math.random()*100));
    }
}

function highlight(imgNo) {
    document.getElementById("gallery-img"+imgNo).style="filter:saturate(100%); width: 99%; border: solid 4px white; box-shadow: 0px 0px 16px black;";
}
                                                                                                  
function delight() {
    for(i=0; i<=9; i++){
        document.getElementById("gallery-img"+i).style="filter:saturate(20%); width: 100%; border: none; box-shadow: none;";
    }
}
    
    