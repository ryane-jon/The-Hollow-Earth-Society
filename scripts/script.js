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
        alert("Form has been sent successfully!");
    }
}


document.getElementById("gallery-img").addEventListener("mouseover",highlight());
document.getElementById("gallery-img").addEventListener("mouseout", delight());


function highlight() {
    document.getElementById("gallery-img").style="border: solid blue 2px;"
}
function delight() {
    document.getElementById("gallery-img").style="border: none;"
}
    