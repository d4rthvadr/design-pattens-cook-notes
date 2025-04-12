class OldSystem {
  public legacyMethod(name: string, data: Record<string, unknown>): string {
    console.log(
      `Old system method called with name: ${name} and data: ${JSON.stringify(
        data
      )}`
    );
    return "Old system method called";
  }
}

interface NewSystem {
  newMethod(data: Record<string, unknown>): string;
}

class OldSystemAdapter implements NewSystem {
  private oldSystem: OldSystem;

  constructor(oldSystem: OldSystem) {
    this.oldSystem = oldSystem;
  }

  newMethod(data: Record<string, unknown>): string {
    // Adapting the old system's method to the new system's interface
    const name = `xl_${data.name}`; // Example of how you might adapt the name

    delete data.name; // Remove the name from the data object
    return this.oldSystem.legacyMethod(name, data);
  }
}

// Client code
const oldSystem = new OldSystem();
const adapter = new OldSystemAdapter(oldSystem);

function invoker(adapter: NewSystem, data: Record<string, unknown>) {
  return adapter.newMethod(data);
}

invoker(adapter, {
  name: "XML",
  payload: { id: 1, url: "https://remote-url" },
});
// Output: Old system method called
