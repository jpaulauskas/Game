function message(){
alert("Please enter your Name and Email");
}

function lab(event){	
	var name = document.getElementById("name").value;
   document.getElementById("name").innerHTML = name;
     	var email = document.getElementById("email").value;
   document.getElementById("email").innerHTML = email;
	alert(name+ ", thank you for your details. We will be in touch via " +email+ " shortly."); 	
	hide();	

}
		
function hide(){
	
	document.getElementById("hiding").style.display = "none";
}


