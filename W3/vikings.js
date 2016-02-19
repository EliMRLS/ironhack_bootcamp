function getRandomNumber(min, max){
  var num = Math.random() * (max - min) + min;
  return Math.trunc(num);
}

var Viking = function(name, shout){

  this.name = name;
  this.health = getRandomNumber(200, 301);
  this.strength = getRandomNumber(40, 51);
  this.shout = shout;

  this.attack = function(){
    var damage = this.strength;
    return damage;
  }

  this.getHurt = function(damage){
    return this.health -= damage;
  }

}

var vikings = [
  new Viking('Astrid', "ODIN OWNS YOU AAALL!!"),
  new Viking('Viljar', "PREPARE TO DIE!!"),
  new Viking('Erik', "WE ARRE VIKINGS!!"),
  new Viking('Inge', "GRRRRR!!")
  ]



// var Pit = function(fighter1, fighter2, turns){
//   this.fighter1 = fighter1;
//   this.fighter2 = fighter2;
//   this.turns = turns

//   this.fight = function(){
//     for(var i = 0; i <= this.turns; i++) {
//       console.log('Turn'  + (i+1) + ':');
//       //console.log((this.fighter1.health > this.fighter2.strength) + ' ' + (this.fighter2.health > this.fighter1.strength))
//       if((this.fighter1.health > this.fighter2.strength) && (this.fighter2.health > this.fighter1.strength)){
//         this.fighter2.getHurt(this.fighter1.attack());
//         console.log(this.fighter1.name + ' hits with a strength of ' + this.fighter1.strength);
//         console.log(this.fighter2.name + "'s life is " + this.fighter2.health + "\n");
//         this.fighter1.getHurt(this.fighter2.attack());
//         console.log(this.fighter2.name + ' hits with a strength of ' + this.fighter2.strength);
//         console.log(this.fighter1.name + "'s life is " + this.fighter1.health + "\n");
//       } else {
//         return console.log('Someone might not survive the next attack. The trainning is over.\n');
//       }
//     }
//   }

// }

// var arena = new Pit(viking1, viking2, 2);
// arena.fight();

////// SAXONS /////

var Saxon = function(){

  this.health = getRandomNumber(50, 101);
  this.strength = getRandomNumber(20, 51);

  this.attack = function(){
    var damage = this.strength;
    return damage;
  }

  this.getHurt = function(damage){
    return this.health -= damage;
  }

}

var saxon1 = new Saxon();
var saxon2 = new Saxon();
var saxon3 = new Saxon();
var saxon4 = new Saxon();
var saxons = [saxon1, saxon2, saxon3, saxon4];


var Village = function(vikings, saxons){
  this.vikings = vikings;
  this.saxons = saxons;
  this.turns = getRandomNumber(5, 7);

  var totalVikings = this.vikings.length;
  var totalSaxons = this.saxons.length;


  // this.addSaxon = function(){
  //   this.saxons.push(saxon);
  //   saxon.name = "saxon" + this.saxons.length;
  // }


  this.war = function(){
    for(var i = 0; i <= this.turns; i++) {
      var randomViking = this.vikings[Math.round(Math.random() * this.vikings.length)];
      var randomSaxon = this.saxons[Math.round(Math.random() * this.saxons.length)];
      

      console.log(randomViking.name + " shouts: " + randomViking.shout);

      if(totalVikings > 0 && totalSaxons > 0){
        randomSaxon.getHurt(randomViking.attack());
        console.log(randomViking.name + ' hits with a strength of ' + randomViking.strength);
        console.log("Saxon's health is " + randomSaxon.health + "\n");
          if(randomSaxon.health < 0){
            console.log("Poor saxon is dead.");
            var sIndex = this.saxons.indexOf(randomSaxon);
            this.saxons.splice(sIndex);
            console.log(this.saxons.length + " saxons remain.\n");
          };

        randomViking.getHurt(randomSaxon.attack());
        console.log('Saxon hits with a strength of ' + randomSaxon.strength);
        console.log(randomViking.name + "'s health is " + randomViking.health + "\n");
          if(randomViking.health < 0){
            console.log(randomViking.name + " is dead. Valhalla awaits!");
            var vIndex = this.vikings.indexOf(randomViking);
            this.vikings.splice(vIndex);
            console.log(this.vikings.length + " vikings remain.\n");
        };

      }else if(totalVikings == 0){
        console.log("These brave vikings have lost the battle. But they will come back!!");

      }else if(totalSaxons == 0){
        console.log("Odin has helped the vikings to win this battle!");
      } 
    }
   
  }
}


var saxonTown = new Village(vikings, saxons);
saxonTown.war();

// var saxon = new Saxon();

// for (var i=0;i<10;i++){
//   saxonTown.addSaxon(new Saxon()); 
// }






