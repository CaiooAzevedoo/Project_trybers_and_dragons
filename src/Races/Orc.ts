import Race from './Races';

class Orc extends Race {
  static count = 0;
  constructor(
    name: string, 
    dexterity: number,
    public HP = 74,
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

export default Orc;