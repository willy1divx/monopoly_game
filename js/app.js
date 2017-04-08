var app = angular.module('myApp',[]);

app.controller('myValues', function($scope){
	var set = [
		{image:"img/go.gif",
		cardMessage: ".",
		name:"GO collect $200",
		owner: "NOT FOR SALE"
	
	},
		{image:"img/medit.gif",
		color:"purple",
		cardMessage: ".",
		name:"Mediterrain Ave",
		cost:[60,90,135,200,300,450,675],
		rent:[0,2,5,15,45,80,225,0,0,0,0,0,0,0,0,0],
		house:0
		
	},{
		image:"img/chest.jpg",
		color: "chest",
		name:" ",
		cardName:"Community chest",
		cardMessage: ".",
		messageColor:"communityChest",
		owner: "NOT FOR SALE"
	
	},
	{	image:"img/baltic.jpg",
		color:"purple",
		cardMessage: ".",
		name:" baltic Ave",
		cost:[80,120,180,270,400,600,900],
		rent:[0,4,10,30,90,160,225,0,0,0,0,0,0,0,0,0,0],
		house:0

		
	},{
		image:"img/tax.jpg",
		color: "reading",
		name:"INCOME TAX PAY 10%",
		cost: deleteTax,
		owner: "NOT FOR SALE"
	
	},{
		image:"img/reading.jpg",
		name:"Reading R.R.",
		color:"reading",
		cost:[200,300,450,675,1000,1500],
		rent:[0,25,50,100,200,0,0,0,0,0,0,0,0,0,0],
		house:0
	
	},
		{color:"lightBlue",
		name:" oriental Ave",
		cardMessage: ".",
		image:"img/orential.jpg",
		cost:[100,150,225,330,480,700],
		rent:[0,6,10,30,90,133,180,0,0,0,0,0,0,0,0,0],
		house:0
	},{
		image:"img/chance.jpg",
		color: "chance",
		name:" ",
		cardName:"Chance",
		cardMessage: ".",
		messageColor:"chanceMessage",
		owner: "NOT FOR SALE"
	
	},
		{color:"lightBlue",
		name:"vermont Ave",
		cardMessage: ".",
		image:"img/vermont.jpg",
		cost:[100,150,220,330,480,700,1050,1500],
		rent:[0,6,10,30,90,133,180,0,0,0,0,0,0,0],
		house:0
	},
		{color:"lightBlue",
		image:"img/conn.jpg",
		cardMessage: ".",
		name:" conneticut Ave",
		cost:[120,180,270,400,600,900,1350,1800],
		rent:[0,8,13,33,100,150,200,0,0,0,0,0,0,0],
		house:0
	},{
		image:"img/jail.jpg",
		color: "reading",
		name:"In Jail/Just Visiting",
		owner: "NOT FOR SALE"
	
	},
		{color:"maroone",
		image:"img/stCharles.gif",
		cardMessage: ".",
		name:"St. Charles PL",
		cost:[140,210,315,460,690,1000,1500],
		rent:[0,10,16,50,150,208,250,0,0,0,0,0,0,0,0],
		house:0
	},{
		image:"img/electricCo.jpg",
		cardMessage: ".",
		color: "reading",
		name:"Electric Co",
		cost: deleteElectric,
		owner: "NOT FOR SALE"
	
	},
		{color:"maroone",
		cardMessage: ".",
		image:"img/states.gif",
		name:"States Ave",
		cost:[140,210,315,450,675,1000,1500],
		rent:[0,10,16,50,150,208,250,0,0,0,0,0,0,0,0,0],
		house:0
	},
		{color:"maroone",
		image:"img/virgina.gif",
		cardMessage: ".",
		name:"Virgina Ave",
		cost:[160,240,360,500,750,1100,1650],
		rent:[0,12,60,167,233,300,0,0,0,0,0,0,0,0],
		house:0
	},{
		image:"img/pennsylvaniaRR.jpg",
		name:"Pennsylvania R.R.",
		color:"reading",
		cost:[200,300,450,675,1000,1500,2200,3300],
		rent:[0,25,50,100,200,0,0,0,0,0,0,0],
		house:0
	
	},
		{color:"orange",
		image:"img/stJames.jpg",
		cardMessage: ".",
		name:"ST. James PL",
		cost:[120,180,270,400,600,900,1350,2000,3000],
		rent:[0,14,23,67,183,250,316,0,0,0,0,0,0],
		house:0
	},{
		image:"img/chest.jpg",
		color: "chest",
		name:" ",
		cardName:"Community chest",
		cardMessage: ".",
		messageColor:"communityChest",
		owner: "NOT FOR SALE"
	
	},
		{color:"orange",
		image:"img/tenn.jpg",
		cardMessage: ".",
		name:"Tennesse Ave",
		cost:[120,180,270,400,600,900,1350,2000,3000],
		rent:[0,14,23,66,183,250,316,0,0,0,0,0,0],
		house:0
	},
		{color:"orange",
		cardMessage: ".",
		image:"img/newyork.jpg",
		name:"New York Ave",
		cost:[120,180,270,400,600,900,1350,2000,3000,4500],
		rent:[0,16,26,75,200,266,333,0,0,0,0,0,0,0],
		house:0
	},{
		image:"img/freeParking.jpg",
		color: "reading",
		name:"free parking",
		owner: "NOT FOR SALE"
	
	},
		{color:"red",
		image:"img/kentucky.gif",
		name:"Kentucky Ave",
		cardMessage: ".",
		cost:[140,210,315,450,675,1000,1500,2200,3300,4800],
		rent:[0,18,30,83,233,291,350,0,0,0,0,0,0],
		house:0
	},{
		image:"img/chance.jpg",
		color: "chance",
		name:" ",
		cardName:"Chance",
		cardMessage: ".",
	     messageColor:"chanceMessage",
	     owner: "NOT FOR SALE"
	},
		{color:"red",
		image:"img/indiana.jpg",
		cardMessage: ".",
		name:"Indiana Ave",
		cost:[140,210,315,465,700,1100,1650,2400,3600],
		rent:[0,18,30,83,233,291,350,0,0,0,0,0,0],
		house:0
	},
		{color:"red",
		image:"img/illinois.gif",
		cardMessage: ".",
		name:"Illnois Ave",
		cost:[140,210,315,465,700,1100,1650,2400,3600],
		rent:[0,20,33,100,250,308,366,0,0,0,0,0,0],
		house:0

	},{
		image:"img/b&o.gif",
		name:"B & O R.R.",
		color:"reading",
		cost:[200,300,450,675,1000,1500,2200,3300],
		rent:[0,25,50,100,200,0,0,0,0,0,0,0],
		house:0
	
	},
		{color:"yellow",
		image:"img/atlantic.jpg",
		cardMessage: ".",
		name:"Atlantic Ave",
		cost:[260,390,600,900,1350,2000,3000],
		rent:[0,22,36,110,266,325,383,0,0,0,0,0,0],
		house:0
	},
		{color:"yellow",
		image:"img/ventnor.gif",
		name:"Ventnor Ave",
		cardMessage:".",
		cost:[260,390,600,900,1350,2000,3000],
		rent:[0,22,36,110,266,325,383,0,0,0,0,0,0],
		house:0
	},{
		image:"img/waterWorks.jpg",
		color: "reading",
		name:"Water works",
		cost: deleteElectric,
		owner: "NOT FOR SALE"
	
	},
		{color:"yellow",
		image:"img/marvins.jpg",
		cardMessage: ".",
		name:"Marvins Gardens",
		cost:[260,390,600,900,1350,2000,3000],
		rent:[0,24,40,120,283,341,400,0,0,0,0,0,0],
		house:0
	},
	{
		image:"img/gotoJail.jpg",
		color: "reading",
		cardMessage: ".",
		name:"GO TO JAIL",
		owner: "NOT FOR SALE"
	
	},
		{color:"green",
		image:"img/pacific.jpg",
		cardMessage: ".",
		name:"Pacific Ave",
		cost:[300,450,675,1000,1500,2200,3300,4800],
		rent:[0,26,43,130,300,366,425,0,0,0,0,0,0],
		house:0
	},
		{color:"green",
		image:"img/northCarolina.jpg",
		cardMessage: ".",
		name:"North Carolina Ave",
		cost:[300,450,675,1000,1500,2200,3300,4800],
		rent:[0,26,43,130,300,366,425,0,0,0,0,0,0],
		house:0
	},{
		image:"img/chest.jpg",
		color: "chest",
		name:" ",
		cardName:"Community chest",
		cardMessage: ".",
		messageColor:"communityChest",
		owner: "NOT FOR SALE"
	
	},
		{color:"green",
		image:"img/penn.jpg",
		cardMessage: ".",
		name:"Pennsylvania Ave",
		cost:[300,450,675,1000,1500,2200,3300,4800],
		rent:[0,28,50,150,333,400,466,0,0,0,0,0,0],
		house:0
	},{
		image:"img/shortLine.jpg",
		name:"Shortline R.R.",
		color:"reading",
		cost:[200,300,450,675,1000,1500,2100,3000,4500],
		rent:[0,25,50,100,200,0,0,0,0,0,0],
		house:0
	
	},{
		image:"img/chance.jpg",
		color: "chance",
		name:" ",
		cardName:"Chance",
		cardMessage: ".",
	    messageColor:"chanceMessage",
	    owner: "NOT FOR SALE"
	},
		{color:"blue",
		image:"img/park.jpg",
		cardMessage: ".",
		name:"Park Place",
		cost:[350,475,700,1100,1650,2400,3600,4800],
		rent:[0,35,87,250,550,650,750,0,0,0,0,0,0],
		house:0
	},{
		image:"img/luxuryTax.jpg",
		color: "reading",
		name:"Luxury Tax",
		cost: deleteElectric,
		owner: "NOT FOR SALE"
	
	},
		{color:"blue",
		cardMessage: ".",
		image:"img/boardwalk.gif",
		name:"Boardwalk",
		cost:[400,600,900,1350,2000,3000,4500,6750],
		rent:[0,50,100,300,700,850,1000,0,0,0,0,0,0],
		house:0
	}
	];

	var chance = [{
		cardMessage:"Advance to GO collect $200",
		value:200,
		position:0,
		inJail: false
	},{
		cardMessage:"Bank pays you dividend of $50",
		value:50,
		position:0,
		inJail: false
	},{
		cardMessage:"Go back 3 spaces",
		value:0,
		position: total-3,
		inJail: false
	},{
		cardMessage:"Go to jail, do not pass Go do not collect $200",
		value:-50,
		position: 9,
		inJail: true
	},{
		cardMessage:"Advance to the nearest utility",
		value:0,
		position: nearestUtility,
		inJail: false
	},
	]

	var commChest = [{
		cardMessage:"You won second prize in a beauty contest collect $10",
		value:10,
		position:0,
		inJail: false
	},{
		cardMessage:"Pay hospital bills $100",
		value:100,
		position:0,
		inJail: false
	},{
		cardMessage:"Pay school tax $150",
		value:150,
		position:0,
		inJail: false
	},{
		cardMessage:"From sale of stock you get $45",
		value:45,
		position: 0,
		inJail: true
	},{
		cardMessage:"go to jail, do not pass Go",
		value:50,
		position:0,
		inJail: false
	},
	]

	var player1 = {
		name:"William",
		position: 0,
		cash:1500,
		injail:false
	}

	var player2 = {
		name:"Trump",
		position: 0,
		cash:1500,
		injail:false
	}

	var player3 = {
		name:"Zuckerberg",
		position: 0,
		cash:1500,
		injail:false
	}

	var player4 = {
		name:"Buffet",
		position: 0,
		cash:1500,
		injail:false
	}

	
	$scope.player1 = player1;
	$scope.player2 = player2;
	$scope.player3 = player3;
	$scope.player4 = player4;
	var counter = 0;
	var total = 0;
	$scope.update = function (){
		  set[total].cardMessage = " ";
		 x = Math.floor(Math.random() * 10) + 2;

		 total  = x + total;
		 if ( total > 39){
		 	player1.cash = player1.cash + 200;
		 	player2.cash = player2.cash + 200;
		 	player3.cash = player3.cash + 200;
		 	player4.cash = player4.cash + 200;
		 	total = total - 40;
		 }

		 $scope.set = set[total];
		   if (total == 0){
		   		$scope.seet = set[total + 39];
		   } else {
		   		$scope.seet = set[total - 1];
		   }
		    if (total == 39){
		   		$scope.seeet = set[total - 39];
		   } else {
		   		$scope.seeet = set[total + 1];
		   }
		
		if (total === 4){
			deleteTax();
		}

		if (total === 7 || total === 22 || total === 36){
			randomChance();
		}

		if (total === 2 || total === 17 || total === 33){
			randomChest();
		}

		if (total === 12){
			deleteElectric();
		}

		if (total === 28){
			deleteElectric();
		}

		if (total === 38){
			deleteLuxury();
		}

		if  (total === 30){
			gotoJail();
			
		}
		if (set[total].owner == 'Trump'){
			console.log(set[total].rent[set[total].house]);
			player1.cash = player1.cash - (set[total].rent[set[total].house]);
			player3.cash = player3.cash - (set[total].rent[set[total].house]);
			player4.cash = player4.cash - (set[total].rent[set[total].house]);
			player2.cash = player2.cash + (set[total].rent[set[total].house])*3;
		}
		if (set[total].owner == 'William'){
			console.log(set[total].rent[set[total].house]);
			player3.cash = player3.cash - (set[total].rent[set[total].house]);
			player4.cash = player4.cash - (set[total].rent[set[total].house]);
			player2.cash = player2.cash - (set[total].rent[set[total].house]);
			player1.cash = player1.cash + (set[total].rent[set[total].house])*3;
		}
		if (set[total].owner == 'Zuckerberg'){
			console.log(set[total].rent[set[total].house]);
			player3.cash = player3.cash + (set[total].rent[set[total].house])*3;
			player4.cash = player4.cash - (set[total].rent[set[total].house]);
			player2.cash = player2.cash - (set[total].rent[set[total].house]);
			player1.cash = player1.cash - (set[total].rent[set[total].house]);
		}
		if (set[total].owner == 'Buffet'){
			console.log(set[total].rent[set[total].house]);
			player3.cash = player3.cash - (set[total].rent[set[total].house]);
			player4.cash = player4.cash + (set[total].rent[set[total].house])*3;
			player2.cash = player2.cash - (set[total].rent[set[total].house]);
			player1.cash = player1.cash - (set[total].rent[set[total].house]);
		}
		    playerposition();
	};

	$scope.buy = function (){
					
			if ( set[total].owner != "NOT FOR SALE"){
				if (set[total].owner == player1.name){
					player1.cash = player1.cash + set[total].cost[set[total].house];
				}
				if (set[total].owner == player2.name){
					player2.cash = player2.cash + set[total].cost[set[total].house];
				}
				if (set[total].owner == player3.name){
					player3.cash = player3.cash + set[total].cost[set[total].house];
				}
				if (set[total].owner == player4.name){
					player4.cash = player4.cash + set[total].cost[set[total].house];
				}
					x = Math.floor(Math.random() * 4) + 1;
					if (x == 1){
						player1.cash = player1.cash - set[total].cost[set[total].house];
						set[total].house += 1;
						set[total].owner = player1.name;
						console.log(set[total]);
						console.log(set[total].owner);
					}
					if (x == 2){
						player2.cash = player2.cash - set[total].cost[set[total].house];
						set[total].house += 1;
						set[total].owner = player2.name;
						console.log(set[total]);
						console.log(set[total].owner);
					}	
					if (x == 3){
						player3.cash = player3.cash - set[total].cost[set[total].house];
						set[total].house += 1;
						set[total].owner = player3.name;
						console.log(set[total]);
						console.log(set[total].owner);
					}
					if (x == 4){
						player4.cash = player4.cash - set[total].cost[set[total].house];
						set[total].house += 1;
						set[total].owner = player4.name;
						console.log(set[total]);
						console.log(set[total].owner);
					}

			}		
			$scope.update();
	};
		
		var getOfJail = function (){
			counter = counter + 1;
				if (counter >= 3){
					player1.cash = player1.cash - 50;
					player2.cash = player2.cash - 50;
					player3.cash = player3.cash - 50;
					player4.cash = player4.cash - 50;
					player1.injail = false;
					counter = 0;
				}
				if (player1.injail === true){
					x = Math.floor(Math.random() * 6) + 1;
					y = Math.floor(Math.random() * 6) + 1;
					if (x === y){
						player1.injail = false;
					}
				}
		};

		var deleteTax = function (){
			player1.cash = player1.cash - Math.floor(player1.cash * .1);
			player2.cash = player2.cash - Math.floor(player2.cash * .1);
			player3.cash = player3.cash - Math.floor(player3.cash * .1);
			player4.cash = player4.cash - Math.floor(player4.cash * .1);
		};

		var deleteLuxury = function (){
				player1.cash = player1.cash - 75;
				player2.cash = player2.cash - 75;
				player3.cash = player3.cash - 75;
				player4.cash = player4.cash - 75;
		};

		var deleteElectric = function (){

				x = Math.floor(Math.random() * 12) + 1;
				player1.cash = player1.cash - (x * 10);
				player2.cash = player2.cash - (x * 10);
				player3.cash = player3.cash - (x * 10);
				player4.cash = player4.cash - (x * 10);
				
				
		};

		var gotoJail = function (){
				player1.cash = player1.cash - 50;
				player2.cash = player2.cash - 50;
				player3.cash = player3.cash - 50;
				player4.cash = player4.cash - 50;
				total = 9;
				$scope.set = set[total + 1];
				$scope.seet = seet[total];
				$scope.seeet = seeet[total - 1];

		};

		

		var payHospital = function (){
				player1.cash = player1.cash - 100;
				player2.cash = player2.cash - 100;
				player3.cash = player3.cash - 100;
				player4.cash = player4.cash - 100;
		}

		var nearestUtility = function(){
			deleteElectric();
				if (total > 28 || total < 12){
					total = 11;
					if (set[12].owner === false){
						
					}
				} if (total > 12){
					total = 27;
					if (set[28].owner === false){
						
					}
				}
				$scope.set = set[total + 1];
				$scope.seet = seet[total];
				$scope.seeet = seeet[total - 1];
		};

		var randomChance = function (){
				x = Math.floor(Math.random() * chance.length);
				if (x === 4){
					set[total].cardMessage = chance[x].cardMessage;
					nearestUtility();
				}
				if (x === 3){
					set[total].cardMessage = chance[x].cardMessage;
					gotoJail();
				}
				if (x === 2){
					set[total].cardMessage = chance[x].cardMessage;
					total = total - 3;
					$scope.set = set[total + 1];
					$scope.seet = seet[total];
					$scope.seeet = seeet[total - 1];
					if (total == 4){
						deleteTax();
					}
				}
				if (x === 1){
					set[total].cardMessage = chance[x].cardMessage;
					player1.cash = player1.cash + 50;
					player2.cash = player2.cash + 50;
					player3.cash = player3.cash + 50;
					player4.cash = player4.cash + 50;
				}
				if (x === 0){
					set[total].cardMessage = chance[x].cardMessage;
					total = 39
					
				}

		}

		var randomChest = function (){
				x = Math.floor(Math.random() * commChest.length) ;
				if (x === 4){
					set[total].cardMessage = commChest[x].cardMessage;
					gotoJail();
				}
				if (x === 3){
					set[total].cardMessage = commChest[x].cardMessage;
					player1.cash = player1.cash + 45;
					player2.cash = player2.cash + 45;
					player3.cash = player3.cash + 45;
					player4.cash = player4.cash + 45;
				}
				if (x === 2){
					set[total].cardMessage = commChest[x].cardMessage;
					player1.cash = player1.cash - 150;
					player2.cash = player2.cash - 150;
					player3.cash = player3.cash - 150;
					player4.cash = player4.cash - 150;
				}
				if (x === 1){
					set[total].cardMessage = commChest[x].cardMessage;
					player1.cash = player1.cash - 100;
					player2.cash = player2.cash - 100;
					player3.cash = player3.cash - 100;
					player4.cash = player4.cash - 100;
				}
				if (x === 0){
					set[total].cardMessage = commChest[x].cardMessage;
					player1.cash = player1.cash + 10;
					player2.cash = player2.cash + 10;
					player3.cash = player3.cash + 10;
					player4.cash = player4.cash + 10;
				}

		};

		playerposition = function(){
			position = [player1.cash,player2.cash,player3.cash,player4.cash];
			highest = position.sort(function(a, b){return b-a});
			      if (player1.cash == highest[0]){
			      	set.place = "1st Place";
			      	$scope.set.words = "greenWords";
			      }
			      if (player1.cash == highest[1]){
			      	set.place = "2nd Place";
			      	$scope.set.words = "greenWords";
			      }
			      if (player1.cash == highest[2]){
			      	set.place = "3rd Place";
			      	$scope.set.words = "greenWords";
			      }
			      if (player1.cash == highest[3]){
			      	set.place = "LAST!!!";
			      	$scope.set.words = "greenWords";
			      }
			      if (player2.cash < 0 && player3.cash < 0 && player4.cash < 0){
			      	set.place = "       YOU WIN!!!";
			      		$scope.set.words = "redWords";
			      }
			       if (player1.cash < 0){
			      	set.place = "       YOU LOSE!!!";
			      		$scope.set.words = "redWords";
			      }
			      $scope.set.place = set.place;
		};
});

