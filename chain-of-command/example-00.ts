interface SupportHandler {
  setNext(handler: SupportHandler): SupportHandler;
  handle(issue: string, severity: number): void;
}

abstract class BaseSupportHandler implements SupportHandler {
  protected nextHandler: SupportHandler | null = null;

  setNext(handler: SupportHandler): SupportHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(issue: string, severity: number): void {
    if (this.nextHandler) {
      this.nextHandler.handle(issue, severity);
    }
  }
}
class SupportAgent extends BaseSupportHandler {
  handle(issue: string, severity: number): void {
    if (severity <= 1) {
      console.log(
        `LowLevelSupport: Handling issue "${issue}" with severity ${severity}`
      );
    } else {
      super.handle(issue, severity);
    }
  }
}
class Supervisor extends BaseSupportHandler {
  handle(issue: string, severity: number): void {
    if (severity <= 2) {
      console.log(
        `MediumLevelSupport: Handling issue "${issue}" with severity ${severity}`
      );
    } else {
      super.handle(issue, severity);
    }
  }
}

class Manager extends BaseSupportHandler {
  handle(issue: string, severity: number): void {
    if (severity <= 4) {
      console.log(
        `MediumLevelSupport: Handling issue "${issue}" with severity ${severity}`
      );
    } else {
      super.handle(issue, severity);
    }
  }
}

// Example usage
const supportAgent = new SupportAgent();
const supervisor = new Supervisor();
const manager = new Manager();

// Set up the chain of responsibility
supportAgent.setNext(supervisor).setNext(manager);
// Handle issues with different severity levels
supportAgent.handle("Issue 1", 1); // Handled by SupportAgent
supportAgent.handle("Issue 2", 2); // Handled by Supervisor
supportAgent.handle("Issue 3", 3); // Handled by Manager
supportAgent.handle("Issue 4", 4); // Handled by Manager
