


	//Creamos contenedor de mapa con funcionalidades con manipulacion con la superclase L que nos permitira
var map = L.map('map', {
    center: [-34.6244626, -56.5843198],  //Default position
    zoom: 13
});



//Metodos de configuracion


//Aniadiendo una imagen de mapa como capa y definiendo atributos de funcionalidad,por ejemplo el zoom maximo que se puede hacer

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {    
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
maxZoom: 19
}).addTo(map);


L.control.scale().addTo(map);  //Anadimos un control de escala para visualizar altura y a que escala se esta viendo 



//Function que cambia la posicion y el marcador a una nuevas cordenadas
function setMap(corX,corY){

	map.setView([corX , corY]);
	L.marker([corX , corY]).addTo(map);

}




