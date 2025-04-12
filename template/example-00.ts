abstract class CombatSequence {
  public performCombat(): void {
    this.prepare();
    this.execute();
    this.cleanup();
  }

  protected abstract prepare(): void;
  protected abstract execute(): void;
  protected abstract cleanup(): void;
}

class WarriorCombatSequence extends CombatSequence {
  protected prepare(): void {
    console.log("Warrior: Preparing for combat...");
  }

  protected execute(): void {
    console.log("Warrior: Executing combat...");
  }

  protected cleanup(): void {
    console.log("Warrior: Cleaning up after combat...");
  }
}
class MageCombatSequence extends CombatSequence {
  protected prepare(): void {
    console.log("Mage: Preparing for combat...");
  }

  protected execute(): void {
    console.log("Mage: Executing combat...");
  }

  protected cleanup(): void {
    console.log("Mage: Cleaning up after combat...");
  }
}

// Usage
const warriorCombat = new WarriorCombatSequence();
const mageCombat = new MageCombatSequence();
[warriorCombat, mageCombat].forEach((combat: CombatSequence) => {
  combat.performCombat();
});

// Output:
// Warrior: Preparing for combat...
// Warrior: Executing combat...
// Warrior: Cleaning up after combat...
// Mage: Preparing for combat...
// Mage: Executing combat...
// Mage: Cleaning up after combat...
