//création de la div qui contiendra le graph et l'insert dans le HTML:
let divGraphique1 = document.createElement("div");
let x = document.getElementById("mw-content-text");
let table1 = document.getElementById("table1");
x.insertBefore(divGraphique1,table1);
divGraphique1.setAttribute("id","divTable1");
//2eme tableau
let divGraphique2 = document.createElement('div');
let table2 = document.getElementById('table2');
x.insertBefore(divGraphique2,table2);
divGraphique2.setAttribute('id', 'divTable2');

//récupération des données et création d'un tableau:
//source des données de table1m
let tbody = table1.getElementsByTagName("tbody");
let tr = tbody[0].getElementsByTagName("tr");
//tableau de données:
let donnees=[];
let fonctionTableau=()=>{
    for (i=1;i<tr.length;i++){
        let pays=[];
        let th = tr[i].getElementsByTagName("th");
        let div = th[0].getElementsByTagName("div");
        let number = div[0].innerHTML;
        pays.push(number);
        let td = tr[i].getElementsByTagName("td");
            for (y=0;y<td.length;y++){
                let contenu = td[y].innerHTML;
                pays.push(contenu);
            }
        donnees.push(pays);
    }
}
fonctionTableau();

//récupérer données tableau 2
let tbody2 = table2.getElementsByTagName('tbody');
let tr2 = tbody2[0].getElementsByTagName('tr');
//tableau de données
let donnees2=[];
let fonctionTableau2 = () => {
	 for (i=1;i<tr2.length;i++){
        let pays=[];
        let th = tr2[i].getElementsByTagName("th");
        let div = th[0].getElementsByTagName("div");
        let number = div[0].innerHTML;
        pays.push(number);
        let td = tr2[i].getElementsByTagName("td");
            for (y=0;y<td.length;y++){
                let contenu = td[y].innerHTML;
                pays.push(contenu);
            }
        donnees2.push(pays);
    }
}
fonctionTableau2();

//creer dimple1
let svg = dimple.newSvg("#divTable1", 640, 600);

let data = [];
for (i=0;i<donnees.length;i++){
    for (let y=2002;y<2013;y++){
      	let dataDetail = {"Année":y, "Infractions":donnees[i][y-2000], "Pays":donnees[i][1]};
      	if(dataDetail.Infractions != ':'){
      		data.push(dataDetail);
      	}
    }
}

let chart = new dimple.chart(svg, data);
chart.addCategoryAxis("x", "Année");
chart.addMeasureAxis("y", "Infractions");
chart.addSeries("Pays", dimple.plot.line);
chart.addLegend(60, 10, 500, 120, "right");
chart.setBounds('20px', "150px", "80%", "70%"); 
chart.draw();

//creer dimple2
let svg2 = dimple.newSvg('#divTable2', 640, 600);

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
chart2.addCategoryAxis("x", "Année");
chart2.addMeasureAxis("y", "Population");
chart2.addSeries("Pays", dimple.plot.line);
chart2.addLegend(80, 10, 500, 120, "right");
chart2.setBounds('20px', "150px", "80%", "70%"); 
chart2.draw();


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
					console.log(object[0][1]);
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







