### Use cases ( what its great for )

- When you have a common algorithm but want to customize certain steps.
  Use when multiple classes share a common flow but need different behaviors for some steps
- When you want to avoid code duplication across similar classes.
  Helps eliminate copy-pasting similar logic with slight variations.
- When using inheritance is okay ( or desirable)
  Template pattern relies on inheritance, so this fits object-oriented hierarchies.

### When not to use ? (To avoid over-engineering)

- You want to vary the full structure
  if the full sequence needs to change dynamically, Strategy or Pipeline is better.
- You want composition to inheritance
  Template method depends on inheritance. If you using composition-heavy systems (like React, ECS, etc), this can be restrictive
- You only need to override one method. A simple override or dependency injection may be better.

### Real world analogies

| **Use case**           | **Proxy role**                                    |
| ---------------------- | ------------------------------------------------- |
| Cookie recipe          | Steps defined, ingredients vary per dish          |
| Board game rules       | Flow is fixed, each play may have custom behavior |
| Form validation system | Base validation, with customizable rules          |
