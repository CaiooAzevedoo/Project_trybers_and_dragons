import Fighter from './Fighter';
import SimpleFighter from './SimpleFighter';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;
  
  constructor(/* lifePoints: number, // strength: number, */) {
    this._lifePoints = 85;
    this._strength = 63;
  }

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

  attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    if (attackPoints > 0) this._lifePoints -= attackPoints;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }
}

export default Monster;