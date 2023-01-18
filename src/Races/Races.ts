export default class Race {
  private _name: string;
  private _dexterity: number;

  constructor(
    name: string,
    dexterity: number,
  ) {
    this._name = name;
    this._dexterity = dexterity;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public set dexterity(value: number) {
    this._dexterity = value;
  }
}