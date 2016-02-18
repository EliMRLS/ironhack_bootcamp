function getRandomNumber(min, max){
  var num = Math.random() * (max - min) + min;
  return Math.trunc(num);
}

var Viking = function(name){

  this.name = name;
  this.health = getRandomNumber(0, 201);
  this.strength = getRandomNumber(0, 21);

  this.attack = function(){
    var damage = this.strength;
    return damage;
  }

  this.getHurt = function(damage){
    //console.log( this.name + " is hurt!");
    return this.health -= damage;
  }

}

var viking1 = new Viking("Ragnar");
var viking2 = new Viking("Erik");


var Pit = function(fighter1, fighter2, turns){
  this.fighter1 = fighter1;
  this.fighter2 = fighter2;
  this.turns = turns

  this.fight = function(){
    for(var i = 0; i <= this.turns; i++) {
      console.log('Turn'  + (i+1) + ':');
      //console.log((this.fighter1.health > this.fighter2.strength) + ' ' + (this.fighter2.health > this.fighter1.strength))
      if((this.fighter1.health > this.fighter2.strength) && (this.fighter2.health > this.fighter1.strength)){
        this.fighter2.getHurt(this.fighter1.attack());
        console.log(this.fighter1.name + ' hits with a strength of ' + this.fighter1.strength);
        console.log(this.fighter2.name + "'s life is " + this.fighter2.health + "\n");
        this.fighter2.getHurt(this.fighter1.attack());
        console.log(this.fighter2.name + ' hits with a strength of ' + this.fighter2.strength);
        console.log(this.fighter1.name + "'s life is " + this.fighter1.health + "\n");
      } else {
        return console.log('Someone might not survive the next attack. The trainning is over.\n');
      }
    }
  }

}

var arena = new Pit(viking1, viking2, 2);
arena.fight();

