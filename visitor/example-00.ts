interface TaxVisitor {
  visitBook(element: Book): number;
  visitElectronics(element: Groceries): number;
  visitGroceries(element: Electronics): number;
}

class ConcreteVisitor implements TaxVisitor {
  visitBook(element: Book): number {
    return element.price * 0.1; // 10% tax on books
  }
  visitElectronics(element: Groceries): number {
    return element.price * 0.2; // 20% tax on electronics
  }
  visitGroceries(element: Electronics): number {
    return element.price * 0.05; // 5% tax on groceries
  }
}

interface ItemTax {
  accept(visitor: TaxVisitor): void;
}

class Book implements ItemTax {
  id: string;
  name: string;
  price: number;
  desc: string | undefined;

  constructor(id: string, name: string, price: number, desc: string) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
  }

  accept(visitor: TaxVisitor): number {
    return visitor.visitBook(this);
  }
}

class Electronics implements ItemTax {
  id: string;
  name: string;
  price: number;
  desc: string | undefined;

  constructor(id: string, name: string, price: number, desc: string) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
  }

  accept(visitor: TaxVisitor): number {
    return visitor.visitElectronics(this);
  }
}

class Groceries implements ItemTax {
  id: string;
  name: string;
  price: number;
  desc: string | undefined;

  constructor(id: string, name: string, price: number, desc: string) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
  }

  accept(visitor: TaxVisitor): number {
    return visitor.visitGroceries(this);
  }
}

// Usage
const book = new Book(
  "1",
  "Design Patterns",
  100,
  "A book about design patterns"
);
const electronics = new Electronics(
  "2",
  "Laptop",
  1000,
  "A laptop with 16GB RAM"
);
const groceries = new Groceries("3", "Apple", 5, "A fresh apple");
const visitor = new ConcreteVisitor();
const bookTax = book.accept(visitor);
const electronicsTax = electronics.accept(visitor);
const groceriesTax = groceries.accept(visitor);
console.log(`Tax on book: $${bookTax}`);
console.log(`Tax on electronics: $${electronicsTax}`);
console.log(`Tax on groceries: $${groceriesTax}`);
