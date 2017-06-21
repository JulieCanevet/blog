// Affichage de la date

var date = new Date();
var jour = date.getDate();
var mois = date.getMonth()+1;
var an = date.getFullYear();
var heure = date.getHours();
var min = date.getMinutes();
document.getElementById("onverra").innerHTML = "Vous vous êtes conecté le "+jour+"/0"+mois+"/"+an+ " à "+heure+ "h"+min+"min";



// Afficher le temps de conexion
var sec = 1;
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
 document.getElementById('confirmer').onclick=function()
 {confirm("Voulez-vous continuer ?");};



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


// Tableau interactif

function show(){
	document.getElementById('nom').style.visibility = 'visible';
	document.getElementById('age').style.visibility = 'collapse';
	document.getElementById('natio').style.visibility = 'collapse';
	document.getElementById('titre').style.backgroundColor = '#D9CE00';
	document.getElementById('titre1').style.backgroundColor = '#565B7B';
	document.getElementById('titre2').style.backgroundColor = '#565B7B';
}

function show1(){
	document.getElementById('nom').style.visibility = 'collapse';
	document.getElementById('age').style.visibility = 'visible';
	document.getElementById('natio').style.visibility = 'collapse';
	document.getElementById('titre1').style.backgroundColor = '#D9CE00';
	document.getElementById('titre').style.backgroundColor = '#565B7B';
	document.getElementById('titre2').style.backgroundColor = '#565B7B';
}

function show2(){
	document.getElementById('nom').style.visibility = 'collapse';
	document.getElementById('age').style.visibility = 'collapse';
	document.getElementById('natio').style.visibility = 'visible';
	document.getElementById('titre2').style.backgroundColor = '#D9CE00';
	document.getElementById('titre1').style.backgroundColor = '#565B7B';
	document.getElementById('titre').style.backgroundColor = '#565B7B';
}













