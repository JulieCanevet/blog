

var img = document.getElementsByTagName("img");
// var text = document.getElementsByClassName("text");  
var text = document.getElementById("text");

for (var i = 0; i < img.length; i++) {
  img[i].addEventListener("mouseover", function() {
    var alt = this.alt;
    text.textContent = alt;
  });
  img[i].addEventListener("mouseleave", function() {
    text.textContent = '';
  });
}



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
		sec++;
	}
	else{
	
		minute++;
		sec = 0;
		document.getElementById("minute").innerHTML = minute + "min" + sec;

	}

}
















