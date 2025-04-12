/**
 * Strategy pattern enables the exact behavior of a system to be selected at run-time.
 */

class Item {
  public name: string;
}
namespace strategy {
  class Buffer extends Array {}

  class ListStrategy {
    protected buffer: Buffer;
    constructor(buffer: Buffer) {
      this.buffer = buffer;
    }

    start(): void {}

    end(): void {}

    addListItem(item: Item) {}
  }

  class MarkdownListStrategy extends ListStrategy {
    constructor(buffer: Buffer) {
      super(buffer);
    }

    addListItem(item: Item): void {
      this.buffer.push(` * ${item.name}`);
    }
  }

  class HtmlListStrategy extends ListStrategy {
    constructor(buffer: Buffer) {
      super(buffer);
    }

    start(): void {
      this.buffer.push(`<ul>`);
    }

    end(): void {
      this.buffer.push(`</ul>`);
    }

    addListItem(item: Item): void {
      this.buffer.push(`    <li> ${item.name} </li>`);
    }
  }

  type OutputFormat = "markdown" | "html";

  class TextProcessor {
    protected buffer = new Buffer();

    protected outputFormat: OutputFormat;

    protected listStrategy: ListStrategy;

    constructor(outputFormat: OutputFormat = "html") {
      this.setOutputFormat(outputFormat);
    }

    setOutputFormat(outputFormat: OutputFormat) {
      switch (outputFormat) {
        case "html":
          this.listStrategy = new HtmlListStrategy(this.buffer);
          return;
        case "markdown":
          this.listStrategy = new MarkdownListStrategy(this.buffer);
          return;
        default:
          const _notFound: never = outputFormat;
          return _notFound;
      }
    }

    appendList(items: Item[]): void {
      this.listStrategy.start();
      for (const item of items) {
        this.listStrategy.addListItem(item);
      }
      this.listStrategy.end();
    }

    clear(): void {
      this.buffer = [];
    }

    toString() {
      return this.buffer.join("\n");
    }
  }

  const tp = new TextProcessor();
  tp.setOutputFormat("markdown");
  const items: Item[] = [
    { name: "foo" },
    { name: "bar" },
    { name: "baz" },
    { name: "zar" },
  ];
  tp.appendList(items);

  console.log(tp.toString());

  tp.clear();

  tp.setOutputFormat("markdown");

  tp.appendList(items);

  console.log(tp.toString());
}
