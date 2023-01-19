import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(
    private name: string,
  ) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = (this._race.maxLifePoints) / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  public get race(): Race {
    return this._race;
  }

  // public set race(value: Race) {
  //   this._race = value;
  // }

  public get archetype(): Archetype {
    return this._archetype;
  }

  // public set archetype(value: Archetype) {
  //   this._archetype = value;
  // }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  // public set maxLifePoints(value: number) {
  //   this._maxLifePoints = value;
  // }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  // public set lifePoints(value: number) {
  //   this._lifePoints = value;
  // }

  public get strength(): number {
    return this._strength;
  }

  // public set strength(value: number) {
  //   this._strength = value;
  // }

  public get defense(): number {
    return this._defense;
  }

  // public set defense(value: number) {
  //   this._defense = value;
  // }

  public get dexterity(): number {
    return this._dexterity;
  }

  // public set dexterity(value: number) {
  //   this._dexterity = value;
  // }

  public get energy(): Energy {
    return { ...this._energy };
  }

  // public set energy(value: Energy) {
  //   this._energy = value;
  // }

  receiveDamage(attackPoints: number) {
    const damage = attackPoints - this.defense;

    if (damage > 0) this._lifePoints -= damage;
    else this._lifePoints -= 1;
    if (this._lifePoints <= 0) this._lifePoints = -1;

    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    
    this._lifePoints = this._maxLifePoints;
  }
}

export default Character;