players = [
	{money: 1500,
	name: "william",
	go: go},
	{money: 1500,
	name: "computer",
	go: go}
]



var go = function(){
	this.money += 200
}

players[1].go();

console.log(players);