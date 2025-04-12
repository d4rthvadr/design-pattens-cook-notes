interface Command {
  execute(): void;
  reverse(): void;
}
class Light {
  turnOn() {
    console.log("Light is on");
  }

  turnOff() {
    console.log("Light is off");
  }
}

// Concrete command
class LightOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOn();
  }

  reverse(): void {
    this.light.turnOff();
  }
}

// Invoker
class RemoteControl {
  private command: Command | undefined;

  setCommand(command: Command) {
    this.command = command;
  }

  pressButton() {
    this.command?.execute();
  }

  pressUndo() {
    this.command?.reverse();
  }
}

// Usage
const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const remoteControl = new RemoteControl();
remoteControl.setCommand(lightOnCommand);
remoteControl.pressButton(); // Output: Light is on
remoteControl.pressUndo(); // Output: Light is off

export {};
