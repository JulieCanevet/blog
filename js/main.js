// Affichage de la date

var date = new Date();
var jour = date.getDate();
var mois = date.getMonth()+1;
var an = date.getFullYear();
var heure = date.getHours();
var min = date.getMinutes();
document.getElementById("onverra").innerHTML = "Vous vous êtes conecté le "+jour+"/0"+mois+"/"+an+ " à "+heure+ "h"+min+"min";



// Afficher le temps de conexion
var sec = 57;
var minute = 0;

setInterval("mafonction()", 1000);
	
	function mafonction(){

	if (sec<60){
		document.getElementById("timmer").innerHTML = sec;
		sec ++;
	}

	else {

	
		minute ++;
		sec = 0;

		document.getElementById("minute").innerHTML = minute + "min";
		document.getElementById("timmer").innerHTML = sec;

		sec = 1;
	}

}

// Demander confirmation pour le formulaire
 document.getElementById('confirmer').onclick=function(){confirm("Voulez-vous continuer ?");};



// Afficher le Alt

var mesimages = document.getElementsByTagName("img");

for (var i = 0; i < mesimages.length; i++) {
 
  mesimages[i].addEventListener ("mouseover", function() {
    var alt = this.alt;
    div1.textContent = alt;
    div2.textContent = alt;
    div3.textContent = alt;
  });
}





















