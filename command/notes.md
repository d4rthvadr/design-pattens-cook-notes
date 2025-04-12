### Use cases ( what its great for )

- Implementing Undo/Redo functionality: When operations need to be reversible.
- Transactional behavior: WHen you want to structure a system around high-level operations built from primitive operations.

### When to use ?

- When you need to decouple classes that invoke operations from classes that perform these operations.
- When you want to support undo, logging or transaction recording functionalities.

### When not to use ? (To avoid over-engineering)

- When the overhead of creating command objects is unnecessary for simple operations.
- When direct method calls are sufficient and there's no need for decoupling.

### Gotchas!!
