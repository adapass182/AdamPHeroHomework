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

function equipWeapon(creature, index) {
  creature.weapon = creature.inventory[index];
  creature.inventory.splice(index);
  return creature;
}

function doBattle(heroicCreature, creature) {
  switch (heroicCreature.heroic) {
    case true:
      consoloe.log("Adam needs to learn a better way of doing this!");
    case false:
      return null;
  }
  while (heroicCreature.health && creature.health > 0) {
    dealDamage(heroicCreature, creature);
    dealDamage(creature, heroicCreature);
  }
  if (heroicCreature.health > 0) {
    return heroicCreature.health;
  } else {
    window.alert("Snake? Snake??? SNAAAAKKEE???")
  }
}

// UI
