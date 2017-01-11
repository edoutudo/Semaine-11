var tab = function(obj)
{	
  var titre = obj.titre;
  var texteAccueil = obj.texteAccueil;
  var imageBackground = obj.imageBackground;
  return {
  	titre : titre, 
  	texteAccueil : texteAccueil,
  	imageBackground : imageBackground
  };
};


var myArray = [
  tab({ titre: "Accueil", texteAccueil: "Accueil", imageBackground: "IMG_1403.jpg"}),
  tab({ titre: "Formation", texteAccueil: "Formation", imageBackground: "IMG_1390.jpg"}),
  tab({ titre: "Contact", texteAccueil: "Travaux", imageBackground: "IMG_1387.jpg"}),
  tab({ titre: "Travaux", texteAccueil: "Contact", imageBackground: "IMG_1408.jpg"})
];
 console.log(myArray);



var CreerDiv = document.createElement('div');
CreerDiv.setAttribute("id","navigation");
var div1 = document.getElementById("root");
div1.appendChild(CreerDiv);


for (var i = 0; i < myArray.length; i++) {
  var newLink = document.createElement('a');
  newLink.setAttribute("class" , "boutonmenu");
  newLink.setAttribute('href' , "#" + myArray[i].titre);
  newLink.innerHTML = myArray[i].titre;
  var navig1 = document.getElementById("navigation");
  navig1.appendChild(newLink);
  
}


for (var i = 0; i < myArray.length; i++) {
  var objtitle = document.createElement('section');
  objtitle.setAttribute("id" , myArray[i].titre);
  objtitle.style.backgroundImage = "url(' " + myArray[i].imageBackground +" ')";
  var title = document.createElement('h1');
  title.innerHTML = myArray[i].texteAccueil;
  title.appendChild(objtitle);

  var navig = document.getElementById("root");
  navig.appendChild(objtitle);
  objtitle.appendChild(title);
  

};

