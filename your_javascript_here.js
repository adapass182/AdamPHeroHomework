// Variables

var hero = {
  name: `Adam`,
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
      type: `gun`,
      damage: 100
  }
}

var weapon1 = {
  type: "bow",
  damage: 6
}

var bat = {
  health: 10,
  weapon: {
    damage: 2
  }
}

// Game logic

function rest(creature) {
  creature.health = 10
  console.log("Hero! rested! Current HP: " + creature.health)
  console.log("Equipped weapon: " + Object.values(creature.weapon))
  return creature;
}

function pickUpItem(creature, item) {
  creature.inventory.push(item)
  console.log("You picked up a " + weapon1.type + "!")
  console.log(creature.inventory)
  return creature;
}

function dealDamage(attacker, defender) {
  defender.health = defender.health - attacker.weapon.damage;
  return defender;
}

function equipWeapon(creature, index) {
  creature.weapon = creature.inventory[index]
  creature.inventory.splice(index);
  console.log(creature.weapon)
  return creature;
}

function doBattle(heroicCreature, creature) {
  console.log("Fight!")
  if (heroicCreature.heroic != true) {
    return null;
  }
  while (heroicCreature.health > 0 && creature.health > 0) {
    dealDamage(heroicCreature, creature)
    if (creature.health > 0) {
    dealDamage(creature, heroicCreature)
    }
  }
  if (heroicCreature.health > 0 && creature.health <= 0) {
    window.alert("You won!")
    return heroicCreature
  } else {
    window.alert("You died!")
  }
}

// UI

function displayStats(name, health, weaponType, weaponDamage) {
  // 
  var heroStats = document.createElement("div")
  heroStats.className = "UI"
}
