import Race from './Races';

class Elf extends Race {
  static count = 0;
  constructor(
    name: string, 
    dexterity: number,
    public HP = 99,
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

export default Elf;