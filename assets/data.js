let inlineData = (idContent, idTable, idGraph, donnees) => {
	//création de la div pour le graphique
	let divGraphique = document.createElement('div');
	let content = document.getElementById(`${idContent}`);
	let table = document.getElementById(`${idTable}`);
	content.insertBefore(divGraphique,table);
	divGraphique.setAttribute('id', `${idGraph}`);

	//récupération des données
	let tbody = table.getElementsByTagName('tbody');
	let tr = tbody[0].getElementsByTagName('tr');
	
	for(let i=1; i<tr.length; i++){
		let pays = [];
		let th = tr[i].getElementsByTagName('th');
		let div = th[0].getElementsByTagName('div');
		let number = div[0].innerHTML;
		pays.push(number);
		let td = tr[i].getElementsByTagName('td');
		for(let y=0; y<td.length; y++){
			let contenu = td[y].innerHTML;
			pays.push(contenu);
		}
		donnees.push(pays);
	}
}
//premier tableau de données
let donnees1=[];
inlineData("mw-content-text","table1","divTable1", donnees1);

//deuxième tableau de données
let donnees2=[];
inlineData("mw-content-text","table2","divTable2", donnees2);

//Creer les graphiques
let createDimple = (x, y, series, chart) => {
	chart.addCategoryAxis("x", `${x}`);
	chart.addMeasureAxis("y", `${y}`);
	chart.addSeries(`${series}`, dimple.plot.line);
	chart.addLegend(60, 10, 500, 120, "right");
	chart.setBounds('20px', "150px", "80%", "70%"); 
	chart.draw();	
}

//creer dimple1
let svg1 = dimple.newSvg("#divTable1", 640, 600);
let data1 = [];
for (i=0;i<donnees1.length;i++){
    for (let y=2002;y<2013;y++){
      	let dataDetail = {"Année":y, "Infractions":donnees1[i][y-2000], "Pays":donnees1[i][1]};
      	if(dataDetail.Infractions != ':'){
      		data1.push(dataDetail);
      	}
    }
}
let chart1 = new dimple.chart(svg1, data1);
createDimple("Année", "Infractions", "Pays", chart1);


//creer dimple2
let svg2 = dimple.newSvg("#divTable2", 640, 600);
let data2 = [];
for (i=0;i<donnees2.length;i++){
    for (let y=2;y<4;y++){
      	let dataDetail2 = {"Année":y, "Population":donnees2[i][y], "Pays":donnees2[i][1]};
      	if(dataDetail2.Année == 2){
      		dataDetail2.Année = "2007-09";
      	}else if (dataDetail2.Année == 3){
      		dataDetail2.Année = "2010-12";
      	}
		data2.push(dataDetail2);
    }
}
let chart2 = new dimple.chart(svg2, data2);
createDimple("Année", "Population", "Pays", chart2);

///////////////////////////////////////////////////////////////////
//trouver et inserer avant h1
let divGraphique3 = document.createElement("div");
let content = document.getElementById("content");
let bodyC = document.getElementById("bodyContent");
content.insertBefore(divGraphique3,bodyC);
divGraphique3.setAttribute("id","divTable3");
//AJAX
let object = {};
let xhr = new XMLHttpRequest;
    //Call the open function, GET-type of request, url, true-asynchronous
    xhr.open('GET', 'https://inside.becode.org/api/v1/data/random.json', true)
    //call the onload 
    xhr.onload = function() 
        {
            //check if the status is 200(means everything is okay)
            if (this.status === 200) {
                    //return server response as an object with JSON.parse
                    object = JSON.parse(this.responseText);
                    
                    //creer dimple3
					let svg3 = dimple.newSvg("#divTable3", 400, 200);
					let data3 = [];
					for (i=0;i<object.length;i++){
					    let dataDetail3 = {"x":object[i][0], "y":object[i][1], "Données": "données"};
						data3.push(dataDetail3);
					}

					let chart3 = new dimple.chart(svg3, data3);
					chart3.addCategoryAxis("x", "x");
					chart3.addMeasureAxis("y", "y");
					chart3.addSeries("Données", dimple.plot.line); 
					chart3.draw();
			}
		}
    //call send
    xhr.send();