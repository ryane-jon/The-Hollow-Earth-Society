function zoomGallery(colNo){
    if(document.getElementById("imgToggleAuto").checked){
        document.getElementById("imgToggleAuto").checked=false;
    }
    document.getElementById("imageTable").classList = ('row row-cols-'+colNo);
}

function toggleAuto(){
    if(!document.getElementById("imgToggleAuto").checked){
        document.getElementById("imageTable").classList = ("row row-cols-2");
    }
    else{
        document.getElementById("imageTable").classList = ("row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4");
    }
}
