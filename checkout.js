///////////////////////////Cart Bandge Set///////////////

var cartcheckr = localStorage.getItem("cartcheckr");

if(cartcheckr==null || cartcheckr==0){

  }

  else{
    document.getElementById("cardbandge").style.display = "block";
    document.getElementById("cardbandge").innerHTML = cartcheckr;
  }

  
  var MenuItems = document.getElementById("MenuItems");

  MenuItems.style.maxHeight = "0px";

  function menutoggle(){

if(MenuItems.style.maxHeight == "0px"){
  MenuItems.style.maxHeight = "200px";

}

else{


  MenuItems.style.maxHeight = "0px";
}

  }