import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static count = 0;

  constructor(
    name: string,
    public energyMana: EnergyType = 'mana',
  ) {
    super(name);
    Necromancer.count += 1;
  }

  get energyType(): EnergyType {
    return this.energyMana;
  }

  static createdArchetypeInstances() {
    return this.count;
  }
}

export default Necromancer;