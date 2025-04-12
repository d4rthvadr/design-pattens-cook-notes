### Use cases ( what its great for )

Visitor pattern allows you to add further operations to objects without modifying them. It achieves this by separating the algorithm from the object structure, enabling new behaviors to be added without altering existing code.

- When you need a class structure to be stable but need to introduce new operations frequently.
- When dealing with composite objects, and you want to perform operations over the entire structure.

### When to use ?

- When you need to perform operations across a set of objects with differing types.
- Adding new operations is more frequent than adding new classes to the hierarchy.

### When not to use ? (To avoid over-engineering)

- When the class hierarchy is unstable; frequent changes lead to maintenance challenges.
- When operations don't need to be applied across multiple classes.
