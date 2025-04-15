interface Beverage {
  cost(): number;
  description(): string;
}

class Coffee implements Beverage {
  public cost(): number {
    return 5;
  }

  public description(): string {
    return "Coffee";
  }
}
class Tea implements Beverage {
  public cost(): number {
    return 3;
  }

  public description(): string {
    return "Tea";
  }
}
class WithMilk implements Beverage {
  constructor(private beverage: Beverage) {}

  public cost(): number {
    return this.beverage.cost() + 1;
  }

  public description(): string {
    return `${this.beverage.description()}, with milk`;
  }
}
class WithSugar implements Beverage {
  constructor(private beverage: Beverage) {}

  public cost(): number {
    return this.beverage.cost() + 0.5;
  }

  public description(): string {
    return `${this.beverage.description()}, with sugar`;
  }
}

// Usage

// Coffee decoration implementaion
const coffee = new Coffee();
const coffeeWithMilk = new WithMilk(coffee);
const finalCoffee = new WithSugar(coffeeWithMilk);
console.log(finalCoffee.description()); // Coffee, with milk, with sugar
console.log(finalCoffee.cost()); // 6.5

// tea decoration implementaion
const tea = new Tea();
const teaWithSugar = new WithSugar(tea);
console.log(teaWithSugar.description()); // Tea, with sugar
console.log(teaWithSugar.cost()); // 3.5
