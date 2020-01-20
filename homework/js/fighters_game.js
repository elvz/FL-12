/* Your code goes here */
class Fighter {
  constructor(fighter) {
    this.name = fighter.name;
    this.damage = fighter.damage;
    this.hp = fighter.hp;
    this.strength = fighter.strength;
    this.agility = fighter.agility;
    this.wins = 0;
    this.losses = 0;
  }

  getName() {
    return this.name;
  }

  getDamage() {
    return this.damage;
  }

  getStrength() {
    return this.strength;
  }

  getAgility() {
    return this.agility;
  }

  getHealth() {
    return this.hp;
  }

  dealDamage(damage) {
    this.hp = damage > this.hp ? 0 : this.hp - damage;
    return this.hp;
  }

  logCombatHistory() {
    return `${this.name} win ${this.wins} times and loss ${this.losses} times`;
  }

  addWin() {
    return this.wins++;
  }

  addLoss() {
    return this.losses++;
  }

  heal(heal) {
    const health = this.hp;
    this.hp = this.hp + heal > health ? health : this.hp + heal;
    return this.hp;
  }

  attack(defender) {
    const hundredPercent = 100;
    const rateAttack = hundredPercent - (defender.getStrength() + defender.getAgility());
    const successAttack = Math.random() * hundredPercent <= rateAttack;

    if (successAttack) {
      let damage = this.damage;
      defender.dealDamage(damage);
      console.log(`${this.name} inflicts ${damage} damage to ${defender.getName()}`);
    } else {
      console.log(`${this.name} missed the target`);
    }
  }
}

const myFighter1 = new Fighter({
  name: 'Maximus',
  damage: 25,
  hp: 100,
  strength: 25,
  agility: 30
});

const myFighter2 = new Fighter({
  name: 'Commodus',
  damage: 25,
  hp: 100,
  strength: 25,
  agility: 30
});

function battle(myFighter1, myFighter2) {
  const fighters = [...arguments];
  let dead = fighters.find(fighter => fighter.getHealth() <= 0);
  if (dead) {
    console.log(`${dead.getName()} is dead and can't fight`);
    return;
  }
  myFighter1.attack(myFighter2);
  if (myFighter2.getHealth() <= 0) {
    console.log(`${myFighter1.getName()} has won!`);
    myFighter1.addWin();
    myFighter2.addLoss();
  } else {
    battle(myFighter2, myFighter1);
  }
}

battle(myFighter1, myFighter2);

console.log(myFighter1.logCombatHistory());
