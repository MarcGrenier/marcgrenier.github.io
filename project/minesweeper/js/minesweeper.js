console.log("yo");
var demineur=null;

window.onload = function(){	
	console.log("yo");
	newGame();
};

function newGame(){
    
	demineur = new Demineur();
	tick();
}

function tick(){
	demineur.tick()
	if(demineur.isGameOver()){
		endMessage("Game Over");
	}
	else if(demineur.win()){
		endMessage("We have a winner!!!");
	}
	else{
		setTimeout(tick,30);
	}
	
}

function endMessage(message){
	var div = document.createElement("div");
	div.setAttribute("class","gameOver");
	div.appendChild(document.createTextNode(message));
	document.getElementById("minesweeper").appendChild(div);

	setTimeout(function(){
		document.getElementById("minesweeper").innerHTML = '';
		demineur = new Demineur();
		tick();
	},2000);

}

/*********************************************  Carre  *********************************************/
function Carre(id,parent){
	//-1 mine, 0 rien autour, 1 et plus mine autour
	this.div = document.createElement("div");
	this.div.setAttribute("class","carreCache");
	var carre = this;
	
	this.parent=parent;
	this.status=0;
	this.id = id;
	this.visible = false;
	this.flaged = false;
	this.change = false;

	this.setToMine = function(){
		this.status = -1;
	}

	this.tick = function(){
		if(this.change==true){
			this.change=false;

			if(this.div.childNodes.length == 0){
				if(this.visible ==true){
					if(this.status ==-1){
						this.div.setAttribute("class","mine");
					}
					else if(this.status >= 0){
						var classStyle ="carreVisible";
						
						switch(this.status){
							case 1:
								classStyle +=" one";
								break;
							case 2:
								classStyle +=" two";
								break;
							case 3:
								classStyle +=" three";
								break;
							case 4:
								classStyle +=" four";
								break;
							case 5:
								classStyle +=" five";
								break;
							case 6:
								classStyle +=" six";
								break;
						}

						this.div.setAttribute("class",classStyle);
						if (this.status!=0){
							var text = document.createTextNode(this.status);
							this.div.appendChild(text);	
						}				
					}
				}
				else if(this.visible == false){
					if(this.flaged==true){
						this.div.setAttribute("class","flag");
					}
					else if(this.flaged==false){
						this.div.setAttribute("class","carreCache");
					}
				}

			}
		}
	}
	
	this.div.onclick = function(event){
		if(event.button  == 0){//left
			if(carre.visible == false && carre.flaged ==false){
				carre.visible= true;
				carre.change=true;
				if(carre.status==0){
					carre.parent.seeEmptyCarre(carre.id);
				}
				else if (carre.status == -1){
					carre.parent.setGameOver();
				}
			}
		}
	}

	this.div.oncontextmenu = function(event){
			if(carre.visible == false){
				carre.flaged = !carre.flaged;
				if(carre.flaged ==true){
					if(carre.parent.flagPlaced()){
						carre.change=true;
					}
					else{
						carre.flaged = false;
					}
				}
				else{
					carre.parent.flagRemoved();
					carre.change=true;
				}
				
			}
		return false;
	}
}
/*******************************************  Demineur *********************************************/
function Demineur(){
	this.grille = new Array();
	this.tailleGrille = 20;
	this.nbMine = this.tailleGrille*2;
	this.posMines = new Array();
	this.temps = 0;
	this.nbFlag = this.nbMine;
	this.gameOver = false;
	
	this.initDemineur = function(){
		for(var i=0;i<this.tailleGrille*this.tailleGrille;i++){
			this.grille.push(new Carre(i,this));
		}

		this.posMines = this.generationMines();

		for(var y=0;y<this.posMines.length;y++){
			this.grille[this.posMines[y]].status=-1;
			this.ajustementValeurCase(this.posMines[y],-1); 
			this.ajustementValeurCase(this.posMines[y],1); 
			this.ajustementValeurCase(this.posMines[y],-19); 
			this.ajustementValeurCase(this.posMines[y],-20); 
			this.ajustementValeurCase(this.posMines[y],-21); 
			this.ajustementValeurCase(this.posMines[y],19); 
			this.ajustementValeurCase(this.posMines[y],20); 
			this.ajustementValeurCase(this.posMines[y],21); 
		}
	}

	this.ajustementValeurCase = function(y,posAutour){
		try{
			if(this.testFacteur(y,posAutour)){
				if(this.grille[y+posAutour].status != -1){
					this.grille[y+posAutour].status++;
				}
			}
		}
		catch(err){	}
	}

	this.generationMines =  function(){
		var posM = new Array();
		
		for(var i=0;i<this.nbMine;i++){
			for(var j=0;j<this.nbMine;j++){
				posM.push(0);
			}
		}

		var f =0;
		while(f<this.nbMine){
			var pos = Math.round(Math.random()*this.tailleGrille*this.tailleGrille);
			if(pos ==400){
				pos--;
			}
			if(posM[pos]==0){
				posM[pos]=1;
			}
			else{
				while(posM[pos]!=0){
					if(pos==this.tailleGrille*this.tailleGrille){
						pos=-1;
					}
					pos++;
				}
				posM[pos]=1;
			}
			f++;
		}

		posM = this.trimTableauMine(posM);

		return posM;
	}

	this.trimTableauMine = function(tab){
		var pos = new Array();

		for(var t=0;t<tab.length;t++){
			if(tab[t]==1){
				pos.push(t);
			}
		}

		return pos;

	}

	this.addDiv = function(nomClass){
		var div = document.createElement("div")
		div.setAttribute("class",nomClass);
		document.getElementById("minesweeper").appendChild(div);					
		
		return div;
	}

	this.addTitle = function(text){
		var h5 = document.createElement("h5");
		nodeParent.appendChild(document.createTextNode(text));

	}
	this.dessinBarre = function(parent){
		this.mineRestante = this.addDiv("infoBarre");
		this.tempsEcoule = this.addDiv("infoBarre");
		this.addDiv("clear");

		this.textInfoTemps = document.createElement("h5");
		this.textInfoTemps.appendChild(document.createTextNode("Temps écoulé"));
		this.textInfoFlag = document.createElement("h5");
		this.textInfoFlag.appendChild(document.createTextNode("Bombes restantes"));

		this.textTemps = document.createTextNode(this.temps);
		this.textMineRestante = document.createTextNode(this.nbFlag);
		
		this.mineRestante.appendChild(this.textInfoFlag);
		this.mineRestante.appendChild(this.textMineRestante);

		this.tempsEcoule.appendChild(this.textInfoTemps);
		this.tempsEcoule.appendChild(this.textTemps);
	}

	this.dessinDemineur = function(){
		this.dessinBarre();
		
		for(var j=0;j<this.tailleGrille;j++){
			for(var q=0;q<this.tailleGrille;q++){
				var divCarre = this.grille[(j*this.tailleGrille)+q].div
				document.getElementById("minesweeper").appendChild(divCarre);
			}
			this.addDiv("clear");
		}
		//document.getElementById("minesweeper").innerHTML += "<div style=float:left; margin-right:80px><label><input type='radio' name='difficulty' value='Easy'>Facile</input></label></div>";
		//document.getElementById("minesweeper").innerHTML += "<div style=float:left; width:200px><label><input type='radio' name='difficulty' value='Normal'>normal</input></label></div>";

	}
	this.actualiseText = function(){
		this.temps +=0.03;
		this.textTemps.nodeValue = Math.round(this.temps);
		this.textMineRestante.nodeValue = this.nbFlag;
	}

	this.seeEmptyCarre = function(id){
		if(this.testFacteur(id,-1) && this.seeIfEmpty(id,-1)){
			this.seeEmptyCarre(id-1);
		}
		if(this.testFacteur(id,1) && this.seeIfEmpty(id,1)){
			this.seeEmptyCarre(id+1);
		}
		if(this.testFacteur(id,-20) && this.seeIfEmpty(id,-20)){
			this.seeEmptyCarre(id-20);
		}
		if(this.testFacteur(id,-19) && this.seeIfEmpty(id,-19)){
			this.seeEmptyCarre(id-19);
		}
		if(this.testFacteur(id,-21) && this.seeIfEmpty(id,-21)){
			this.seeEmptyCarre(id-21);
		}
		if(this.testFacteur(id,19) && this.seeIfEmpty(id,19)){
			this.seeEmptyCarre(id+19);
		}
		if(this.testFacteur(id,20) && this.seeIfEmpty(id,20)){
			this.seeEmptyCarre(id+20);
		}
		if(this.testFacteur(id,21) && this.seeIfEmpty(id,21)){
			this.seeEmptyCarre(id+21);
		}
	}

	this.testFacteur = function(id,facteur){
		var test = false;

		if(facteur==-1){
			if (Math.floor(id/this.tailleGrille)== Math.floor((id+facteur)/this.tailleGrille)){//savoir si les cases sont ur la meme ligne
				test=true;
			}
		}
		else if(facteur==1){
			if (Math.floor(id/this.tailleGrille)== Math.floor((id+facteur)/this.tailleGrille)){
				test=true;
			}
		}
		else if(facteur==-19){
			if((id%this.tailleGrille)+1 == (id+facteur)%this.tailleGrille){//savoir si à une colonne à gauche
				test=true;
			}
		}
		else if(facteur==-20){
				if(id%this.tailleGrille == (id+facteur)%this.tailleGrille){//savoir si même colonne
					test=true;
				}
		}
		else if(facteur==-21){
				if((id%this.tailleGrille)-1 == (id+facteur)%this.tailleGrille){//savoir si à une colonne à droite
					test=true;
				}
		}
		else if(facteur==19){
				if((id%this.tailleGrille)-1 == (id+facteur)%this.tailleGrille){//savoir si à une colonne à gauche
					test=true;
				}
		}
		else if(facteur==20){
				if(id%this.tailleGrille == (id+facteur)%this.tailleGrille){//savoir si même colonne
					test=true;
				}
		}
		else if(facteur==21){
				if((id%this.tailleGrille)+1 == (id+facteur)%this.tailleGrille){//savoir si à une colonne à droite
					test=true;
				}
		}

		return test;
	}
	
	this.seeIfEmpty =function(id,facteur){
		var empty = false;
		try{
			if(this.grille[id+facteur].status >=0 && this.grille[id+facteur].visible==false && this.grille[id+facteur].flaged ==false){
				if(this.grille[id+facteur].status == 0){
					empty = true;
				}
				this.grille[id+facteur].visible = true;
				this.grille[id+facteur].change = true;
			}
		}
		catch(e){	}
		
		return empty;
	}
	
	this.flagPlaced =function(){
		var apply = false;
		if(this.nbFlag>0){
			this.nbFlag--;
			apply = true;
		}

		return apply;
	}
	this.flagRemoved = function(){
		this.nbFlag++;
	}
	
	this.setGameOver = function(){
		this.gameOver = true;
		for(var i=0;i<this.grille.length;i++){
			if(this.grille[i].status==-1 && this.grille[i].visible==false){
				this.grille[i].visible=true;
				this.grille[i].change = true;
			}
		}
	}

	this.isGameOver = function(){
		return this.gameOver;

	}
	this.win=function(){
		var win = true;
		for(var i=0;i<this.grille.length;i++){
			if(this.grille[i].status>=0 &&this.grille[i].visible == false){
				win = false;
				break;
			}
		}
		return win;
	}

	this.tick = function(){
		for(var i=0;i<this.grille.length;i++){
			this.grille[i].tick()
		}
		this.actualiseText();
	}

	this.initDemineur();
	this.dessinDemineur();
}

