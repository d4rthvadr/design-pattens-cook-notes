### Use cases ( what its great for )

The builder pattern is used when constructing a complex object step-by-step, especially when the construction process should allow different representations or configurations of that object.

### When to use ?

- Scenario: Building an RPD character, HTTP request, UI widget or Report.
- Why: Because you want:
  1. A readable way to chain configurations
  2. Optional fields without dozens of constructors
  3. Separation between object construction amd representation.

### When not to use ? (To avoid over-engineering)

- When object is simple or has few parameters. A constructor or factory is easier to maintain.
- Object can be easily represented by a literal.

```typescript
const character = { name: "Alice", race: "Human" };
```

- Immutability isn't a concern. Builders are great when you want to keep the object immutable and delay creation.
- You are not expecting config complexity to grow.
  Thus, premature abstraction = more code with no value.

| **Pros**                                    | **Cons**                                         |
| ------------------------------------------- | ------------------------------------------------ |
| Simplifies the creation of complex objects  | Can lead to over-engineering for simple cases    |
| Provides a clear and readable configuration | Adds extra code and complexity                   |
| Supports immutability and delayed creation  | May not be necessary for straightforward objects |
| Allows for different representations        | Premature abstraction can reduce maintainability |

### Real world analogies

| **Pattern** | **Analogy**                           |
| ----------- | ------------------------------------- |
| Builder     | Ordering a custom pizza               |
| Factory     | Picking a preset pizza from menu      |
| Constructor | Making the same Margherita every time |
