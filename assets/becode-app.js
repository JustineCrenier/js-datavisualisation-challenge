/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 

Your name :     
Date :  
Contact information : 

What does this script do ? 
...

*/

// Your scripting goes here...

//Récupérer mes tableaux
const tab1 = document.getElementsByTagName('table')[0];
const tab2 = document.getElementsByTagName('table')[1];

//insérer un graphique dans le DOM
const graphique1 = document.createElement('div');
graphique1.id ="dimple1";
tab1.parentNode.insertBefore( graphique1, tab1);

//creer dimple
let svg = dimple.newSvg("#dimple1", 640, 480);
let data = [
  	{ "Année":"2002", "Infractions":500, "Pays": "Belgique" },
  	{ "Année":"2003", "Infractions":750, "Pays": "Belgique" },
  	{ "Année":"2004", "Infractions":500, "Pays": "Belgique" },
  	{ "Année":"2005", "Infractions":1000, "Pays": "Belgique" },
  	{ "Année":"2006", "Infractions":1200, "Pays": "Belgique" },
  	{ "Année":"2007", "Infractions":1100, "Pays": "Belgique" },
  	{ "Année":"2008", "Infractions":1700, "Pays": "Belgique" },
  	{ "Année":"2009", "Infractions":2000, "Pays": "Belgique" },
  	{ "Année":"2010", "Infractions":2200, "Pays": "Belgique" },
  	{ "Année":"2011", "Infractions":2500, "Pays": "Belgique" },
  	{ "Année":"2012", "Infractions":2300, "Pays": "Belgique" },
  	{ "Année":"2002", "Infractions":400, "Pays": "France" },
  	{ "Année":"2003", "Infractions":650, "Pays": "France" },
  	{ "Année":"2004", "Infractions":400, "Pays": "France" },
  	{ "Année":"2005", "Infractions":900, "Pays": "France" },
  	{ "Année":"2006", "Infractions":1100, "Pays": "France" },
  	{ "Année":"2007", "Infractions":1000, "Pays": "France" },
  	{ "Année":"2008", "Infractions":1800, "Pays": "France" },
  	{ "Année":"2009", "Infractions":2200, "Pays": "France" },
  	{ "Année":"2010", "Infractions":2400, "Pays": "France" },
  	{ "Année":"2011", "Infractions":2300, "Pays": "France" },
  	{ "Année":"2012", "Infractions":2500, "Pays": "France" }
];
let chart = new dimple.chart(svg, data);
chart.addCategoryAxis("x", "Année");
chart.addMeasureAxis("y", "Infractions");
chart.addSeries("Pays", dimple.plot.line);
chart.addLegend(60, 10, 500, 100, "right");
chart.draw();


//function data-graph
function DataGraph(annee, infractions, pays){
	this.annee = annee,
	this.infractions = infractions,
	this.pays
}

//selection des elements dans le domain

//boucle construction data
for (let i=0; i<11; i++){
	let data = new DataGraph(annee[i], infractions[i], pays[i]);
}
