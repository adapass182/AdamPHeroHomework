// Variables

var hero = {
  name: `Adam`,
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
      type: `Gun`,
      damage: 100
  }
}

var weapon1 = {
  type: "Bow",
  damage: 6
}

var bat = {
  health: 19,
  weapon: {
    damage: 1
  }
}

// Game logic

function rest(creature) {
  creature.health = 10
  console.log("Hero! rested! Current HP: " + creature.health)
  console.log("Equipped weapon: " + Object.values(creature.weapon))
  displayStats(hero.name, hero.health, hero.weapon);
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
  displayStats(hero.name, hero.health, hero.weapon);
  return creature;
}

function doBattle(heroicCreature, creature) {
  console.log("Fight! " + creature.health )
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
    displayStats(hero.name, hero.health, hero.weapon);
    return heroicCreature
  } else {
    window.alert("You died!")
  }
  return heroicCreature
}

// UI

function displayStats(name, health, weapon) {

  // Create individual elements:
  nameTag = document.getElementById("heroName")
  nameTag.innerHTML = "Name: " + name
  healthTag = document.getElementById("heroHp")
  healthTag.innerHTML = "Current HP: " + health
  weaponTag = document.getElementById("heroWeaponType")
  weaponTag.innerHTML = "Weapon : " + weapon.type
  damageTag = document.getElementById("heroWeaponDmg")
  damageTag.innerHTML = "Damage : " + weapon.damage
}

displayStats(hero.name, hero.health, hero.weapon);
