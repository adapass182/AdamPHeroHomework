// Variables

var hero = {
  name: `Adam`,
  heroic: true,
  inventory: [],
  health: 9001,
  weapon: {
      type: `bow`,
      damage: 100
  }
}

// Game logic

function rest(creature) {
  creature.health = 10;
  return creature;
}

function pickUpItem(creature, item) {
  creature.inventory = [item];
  return creature;
}

function dealDamage(attacker, defender) {
  defender.health = defender.health - attacker.weapon.damage;
  return defender;
}

var equipWeapon = function () {

}

var doBattle= function () {

}

// UI
