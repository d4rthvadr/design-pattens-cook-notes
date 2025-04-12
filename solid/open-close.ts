type Color = "red" | "green" | "blue" | "white";

type Size = "large" | "medium" | "small";

class Product {
  name: string;
  color: Color;
  size: Size;

  constructor(name: string, color: Color, size: Size) {
    this.name = name;

    this.color = color;

    this.size = size;
  }
}

class ProductFilter {
  filterByColor(products: Product[], color: Color): Product[] {
    return products.filter((p) => p.color === color);
  }
}

interface Specification {
  isSatisfied(item: Product): boolean;
}

class SizeSpecification implements Specification {
  size: Size;
  constructor(size: Size) {
    this.size = size;
  }

  isSatisfied(item: Product): boolean {
    return this.size === item.size;
  }
}

class ColorSpecification implements Specification {
  color: Color;
  constructor(color: Color) {
    this.color = color;
  }

  isSatisfied(item: Product): boolean {
    return this.color === item.color;
  }
}

class AndOperationSpecification implements Specification {
  specs: Specification[];

  constructor(specs: Specification[]) {
    this.specs = specs;
  }
  isSatisfied(product: Product): boolean {
    return this.specs.every((x) => x.isSatisfied(product));
  }
}

class BetterFilter {
  filter(products: Product[], spec: Specification) {
    return products.filter((x) => spec.isSatisfied(x));
  }
}

const products: Product[] = [
  new Product("Apple", "blue", "small"),
  new Product("Tree", "green", "large"),
  new Product("House", "red", "medium"),
];

const productFilter = new ProductFilter();

for (const product of productFilter.filterByColor(products, "red")) {
  console.log(` * ${product.name} is green`);
}

const specAggregator = new AndOperationSpecification([
  new SizeSpecification("large"),
  new ColorSpecification("green"),
]);

const bf = new BetterFilter();

for (const product of bf.filter(products, specAggregator)) {
  //
  console.log(` * ${product.name} is green`);
}
