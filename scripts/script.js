//Image gallery zoom controls
function enableAllZoomButtons(){                                //loops through each zoom button and enables each
    for(i=1; i<=4; i++){
        document.getElementById("zoomButton"+i).disabled=false;
    }
}

function zoomGallery(colNo){                                    //zooms the image gallery to a specific number of images per row
    document.getElementById("imgToggleAuto").checked=false;                     //make sure auto toggle is unchecked
    enableAllZoomButtons()
    document.getElementById("zoomButton"+colNo).disabled=true;                  //disable the button for the current zoom setting
    document.getElementById("imageTable").classList = ('row row-cols-'+colNo);  //set the image table to the chosen zoom setting
}

function toggleAuto(){                                          //toggles automatic zooming (Changes zoom setting with window size using bootstrap)
    if(!document.getElementById("imgToggleAuto").checked){              //if the auto button is already checked when clicked, zoom the gallery to 3 per row
        zoomGallery(3);
    }
    else{                                                               //if the zoom button is unchecked when clicked, turn on auto zooming
        enableAllZoomButtons()                                                  
        document.getElementById("imageTable").classList = ("row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4");
    }
}
//log in
function login(){
    if(document.getElementById("loginButton").innerHTML=="Log in"){
        if(document.getElementById("login").checkValidity()){
            alert('You have been logged in!');
            document.getElementById("logInEmail").hidden=true;
            document.getElementById("password").hidden=true;
            document.getElementById("logInEmail").value="";
            document.getElementById("password").value="";
            document.getElementById("loginButton").innerHTML="Log out";
        }
        else{
            alert("Form invalid")
        }
    }
    else {
        alert('You have been logged out!');
        document.getElementById("logInEmail").hidden=false;
        document.getElementById("password").hidden=false;
        document.getElementById("loginButton").innerHTML="Log in"
    }
    counter += 1;
}

//image gallery image highlight
function highlight(imgNo) {                                     //highlights the image
    document.getElementById("gallery-img"+imgNo).style="filter:saturate(100%); width: 99%; border: solid 4px white; box-shadow: 0px 0px 16px black;";
}

function delight(imgNo) {                                       //un-highlights the image
    document.getElementById("gallery-img"+imgNo).style="filter:saturate(20%); width: 100%; border: none; box-shadow: none;";}


//contact form "send"
function sendForm(){                                            //Checks if the values entered unto the form are valid before alerting the user of their queue position
    if(document.getElementById("contactUsForm").checkValidity()){
        alert("Form has been sent successfully! You have been placed in the queue at No. "+Math.round(100+Math.random()*900));
    }
}

//wiki page
function showWikiPage(){                                        //toggles whether or not the embeded wiki page is shown
    if(document.getElementById("wiki-page").hidden){                    //if the page is hidden, show it and change the button accordingly
        document.getElementById("wiki-page").hidden=false;
        document.getElementById("show-wiki-button").innerHTML="Hide Wikipedia Page";
    }
    else{
        document.getElementById("wiki-page").hidden=true;               //if the page is shown, hide it and change the button accordingly
        document.getElementById("show-wiki-button").innerHTML="Show Wikipedia Page";
    }
}


    
    