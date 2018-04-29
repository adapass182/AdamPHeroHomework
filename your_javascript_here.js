// Variables

var hero = {
  name: window.prompt("What is your name?"),
  heroic: true,
  inventory: ["Stick ", "Hat ", "Clothes "],
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
  updateStats()
  return creature;
}

function pickUpItem(creature, item) {
  creature.inventory.push(item)
  console.log("You picked up a " + weapon1.type + "!")
  console.log(creature.inventory)
  updateStats()
  whiteSpace = document.getElementById("bow")
  whiteSpace.src = "images/white.png"
  return creature;
}

function dealDamage(attacker, defender) {
  defender.health = defender.health - attacker.weapon.damage;
  updateStats()
  return defender;
}

function equipWeapon(creature, index) {
  creature.weapon = creature.inventory[index - 1]
  creature.inventory.splice(index);
  console.log(creature.weapon)
  updateStats()
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
    whiteSpace = document.getElementById("enemy")
    whiteSpace.src = "images/white.png"
    updateStats()
    return heroicCreature
  } else {
    window.alert("You died!")
  }
  return heroicCreature
}

// UI

function displayStats(name, health, weapon) {


  // Create individual elements:
  var nameTag = document.getElementById("heroName")
  nameTag.innerHTML = "Name: " + name

  var healthTag = document.getElementById("heroHp")
  healthTag.innerHTML = "Current HP: " + health

  var weaponTag = document.getElementById("heroWeaponType")
  weaponTag.innerHTML = "Weapon: " + weapon.type

  var damageTag = document.getElementById("heroWeaponDmg")
  damageTag.innerHTML = "Damage: " + weapon.damage

}

function displayInventory(heroInventory) {
  var result = ``
  var i = 0
  heroInventory.forEach(function(item) {
    if (item.type != undefined) {
      i++
      result += i + ". " + item.type + " "
    } else {
      i++
    result += i + ". " + item
      }
    })
  console.log(result)
  var inventoryContainer = document.getElementById("inventory")
  var inventoryTag = document.getElementById("inventoryItem")
  inventoryTag.innerHTML = result
  inventoryContainer.appendChild(inventoryTag)
}

function updateStats() {
  displayStats(hero.name, hero.health, hero.weapon);
  displayInventory(hero.inventory);
}

displayStats(hero.name, hero.health, hero.weapon);
displayInventory(hero.inventory);
