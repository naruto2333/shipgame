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
var model ={
  boardSize : 7,
  numShip : 3,
  shipLength : 3,
  shipSunk : 0,

  ships:[{locations: ["06","16","26"], hits:["","",""]},
          {location: ["24","34","44"], hits:["","",""]},
          {location: ["10","11","12"], hits:["","",""]}],
  fire: function(guess){
    for (var i = 0; i < this.numShips; i++){
      var ship = this.ships[i];
      var index = ship.locations.indexOf(guess);
      if (index >= 0){
        ship.hits[index] = "hit";
        view.displayHit(guess);
        view.displayMessge("HIT!");
        if (this.isSunk(ship)){
          view.displayMessge("You sank my battleship!");
          this.shipSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessge("You missed.");
    return false;
  },
  isSunk:function(ship){
    for (var i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !=="hit"){
        return false;
      }
    }
    return true;
  }
};
//view.displayMiss("00");
//view.displayHit("34");
//view.displayMiss("55");
//view.displayHit("12");
//view.displayMiss("25");
//view.displayHit("26");
//view.displayMessge("Tap tap, is this thing on?");
model.fire("53");
model.fire("06");
model.fire("16");
model.fire("26");
model.fire("34");
model.fire("24");
model.fire("44");
model.fire("12");
model.fire("11");
model.fire("10");

function parseGuess(guess) {
  var alphabet = ["A","B","C","D","E","G"];
  if(guess === null || guess.length !==2) {
    alert("Oops, please enter a letter and a number on the board.");  
  }else{
    firstChar = guess.charAt(0);
    var row = alphabet.indexOf(firstChar);
    var column = guess.charAt(1);
    if (isNaN(row) || isNaN(column)){
      alert("Oops, that isn't on the board.");
    }else if (row < 0 || row >= model.boardSize ||
              column < 0 || column >= model.boardSize){
      alert("Oops,that's off the board!");
    }else{
      return row + column;
    }
  }
  return null;
}
console.log(parseGuess("A0"));
console.log(parseGuess("B6"));
console.log(parseGuess("G3"));
console.log(parseGuess("H0"));
console.log(parseGuess("A7"));