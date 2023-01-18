import Race from './Races';

class Dwarf extends Race {
  static count = 0;
  constructor(
    name: string, 
    dexterity: number,
    public HP = 80,
  ) {
    super(name, dexterity); 
  }

  get maxLifePoints(): number {
    return this.HP;
  }

  static createdRacesInstances(): number {
    return this.count;
  }
}

export default Dwarf;