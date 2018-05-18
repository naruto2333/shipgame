var view = {
  displayMessge: function(msg){
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit : function(location){
    var cell = document.getElementById(location);
    cell.setAttribute("class","hit");
  },
  displayMiss:function(location){
    var cell = document.getElementById(location);
    cell.setAttribute("class","miss");
}
};
var madel ={
  boardSize : 7,
  numShip : 3,
  shipLength : 3,
  shipSunk : 0,

  ships:[{locations: ["06","16","26"], hits:["","",""]},
          {location: ["24","34","44"], hits:["","",""]},
          {location: ["10","11","12"], hits:["","",""]}],
  fire: function(guess){
    for (var i = 0; i < this.numShips; i++){
      var ship = this.ship[i];
      var locations = ship.locations;
      if (index >= 0){
        ship.hits[index]=
      }
    }
  }
};
view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");
view.displayMessge("Tap tap, is this thing on?");