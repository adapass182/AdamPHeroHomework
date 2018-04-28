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
  if (heroicCreature.heroic != true) {
    return null;
  }
  while (heroicCreature.health > 0 && creature.health > 0) {
      console.log(heroicCreature.health, creature.health, "Ready players!")
      dealDamage(heroicCreature, creature)
      console.log(heroicCreature.health, creature.health, "hero attacks!")
      if (creature.health > 0) {
        dealDamage(creature, heroicCreature)
        console.log(heroicCreature.health, creature.health, "creature attacks!")
      }
    }
  if (heroicCreature.health > 0) {
    return heroicCreature
  } else {
    window.alert("You died!")
  }
}

// UI
