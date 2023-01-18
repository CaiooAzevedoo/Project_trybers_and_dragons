import Race from './Races';

class Halfling extends Race {
  static count = 0;
  constructor(
    name: string, 
    dexterity: number,
    public HP = 60,
  ) {
    super(name, dexterity);

    Halfling.count += 1;
  }

  get maxLifePoints(): number {
    return this.HP;
  }

  static createdRacesInstances(): number {
    return this.count;
  }
}

export default Halfling;