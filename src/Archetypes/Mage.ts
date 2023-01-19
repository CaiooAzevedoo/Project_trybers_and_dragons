import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static count = 0;

  constructor(
    name: string,
    public energyMana: EnergyType = 'mana',
  ) {
    super(name);
    Mage.count += 1;
  }

  get energyType(): EnergyType {
    return this.energyMana;
  }

  static createdArchetypeInstances() {
    return this.count;
  }
}

export default Mage;