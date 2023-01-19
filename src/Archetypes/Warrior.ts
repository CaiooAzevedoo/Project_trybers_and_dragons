import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  static count = 0;

  constructor(
    name: string,
    public energyStamina: EnergyType = 'stamina',
  ) {
    super(name);
    Warrior.count += 1;
  }

  get energyType(): EnergyType {
    return this.energyStamina;
  }

  static createdArchetypeInstances() {
    return this.count;
  }
}

export default Warrior;