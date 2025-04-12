enum CharacterClass {
  WARRIOR = "Warrior",
  MAGE = "Mage",
  WARLOCK = "Warlock",
}

type Race = "Human" | "Orc" | "Elf";

enum WeaponTypes {
  SWORD = "Sword",
  AXE = "Axe",
  BOW = "Bow",
}

interface PlayerStats {
  health: number;
  mana: number;
  strength: number;
  intelligence: number;
  agility: number;
}

interface Weapons {
  type: WeaponTypes;
  damage(stats: PlayerStats): PlayerStats;
}

// Create weapons
const sword: Weapons = {
  type: WeaponTypes.SWORD,
  damage(stats: PlayerStats): PlayerStats {
    return {
      ...stats,
      strength: stats.strength + 5,
    };
  },
};

const bow: Weapons = {
  type: WeaponTypes.BOW,
  damage(stats: PlayerStats): PlayerStats {
    return {
      ...stats,
      agility: stats.agility + 5,
    };
  },
};

const axe: Weapons = {
  type: WeaponTypes.AXE,
  damage(stats: PlayerStats): PlayerStats {
    return {
      ...stats,
      strength: stats.strength + 10,
    };
  },
};

class Character {
  constructor(
    public name: string,
    public race: Race,
    public classType: CharacterClass,
    public weapons?: Weapons[]
  ) {}
}

class CharacterBuilder {
  #name: string;
  #race: Race;
  #classType: CharacterClass;
  #weapons?: Weapons[];

  constructor() {}

  setName(name: string): this {
    this.#name = name;
    return this;
  }

  setRace(race: Race): this {
    this.#race = race;
    return this;
  }

  setClassType(classType: CharacterClass): this {
    this.#classType = classType;
    return this;
  }
  addWeapon(weapon: Weapons): this {
    if (!this.#weapons) {
      this.#weapons = [];
    }
    this.#weapons.push(weapon);
    return this;
  }

  build(): Character {
    return new Character(
      this.#name,
      this.#race,
      this.#classType,
      this.#weapons
    );
  }
}

// Usage
const characterBuilder = new CharacterBuilder();
const character = characterBuilder
  .setName("Arthas")
  .setRace("Human")
  .setClassType(CharacterClass.WARRIOR)
  .addWeapon(sword)
  .addWeapon(axe)
  .build();
console.log(character);
