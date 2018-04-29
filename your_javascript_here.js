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
  updateStats();
  return creature;
}

function pickUpItem(creature, item) {
  creature.inventory.push(item)
  console.log("You picked up a " + weapon1.type + "!")
  console.log(creature.inventory)
  var itemPickedUp = document.getElementById("bow")
  var template = document.createElement("img")
  template.class = "hiddenImage"
  template.src = "images/white.png"
  document.body.removeChild(itemPickedUp)
  document.body.appendChild(template)
  updateStats()
  return creature;
}

function dealDamage(attacker, defender) {
  defender.health = defender.health - attacker.weapon.damage;
  updateStats()
  return defender;
}

function equipWeapon(creature, index) {
  creature.weapon = creature.inventory[index - 1]
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
    var enemyDefeated = document.getElementById("enemy")
    document.body.removeChild(enemyDefeated)
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
  var nameTag = document.createElement("h1")
  nameTag.innerHTML = "Name: " + name
  var uiContainerDiv1 = document.getElementById("heroName")
  uiContainerDiv1.appendChild(nameTag)

  var healthTag = document.createElement("h1")
  healthTag.innerHTML = "Current HP: " + health
  var uiContainerDiv2 = document.getElementById("heroHp")
  uiContainerDiv2.appendChild(healthTag)

  var weaponTag = document.createElement("h1")
  weaponTag.innerHTML = "Weapon: " + weapon.type
  var uiContainerDiv3 = document.getElementById("heroWeaponType")
  uiContainerDiv3.appendChild(weaponTag)

  var damageTag = document.createElement("h1")
  damageTag.innerHTML = "Damage: " + weapon.damage
  var uiContainerDiv4 = document.getElementById("heroName")
  uiContainerDiv4.appendChild(damageTag)
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
