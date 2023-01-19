import { EnergyType } from '../Energy';

abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;

  constructor(
    name: string,

  ) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  public get name(): string {
    return this._name;
  }

  // public set name(value: string) {
  //   this._name = value;
  // }

  public get special(): number {
    return this._special;
  }

  // public set special(value: number) {
  //   this._special = value;
  // }

  public get cost(): number {
    return this._cost;
  }

  // public set cost(value: number) {
  //   this._cost = value;
  // }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;