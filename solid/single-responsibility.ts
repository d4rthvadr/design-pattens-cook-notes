import * as fs from "fs";

class Journal {
  static count = 0;

  private entries = {};

  addEntry(text: string) {
    const c = ++Journal.count;
    const entry = `${c}: ${text}`;
    this.entries[c] = entry;
  }

  removeEntry(index: number) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join("\n");
  }
}

class PersistenceManager {
  preProcess() {}
  saveToFile(data: any, filename: string) {
    fs.writeFileSync(filename, data);
  }
}

function main() {
  const journal = new Journal();

  journal.addEntry("Hello World.");
  journal.addEntry("Learn something every day.");
  journal.addEntry("It only takes effort to reach goals.");

  const pm = new PersistenceManager();

  pm.saveToFile(journal.toString(), "my-journal.txt");
}

main();
