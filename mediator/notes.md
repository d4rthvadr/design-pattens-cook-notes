### Use cases ( what its great for )

Mediator is beneficial for managing complex interactions and decoupling components in intricate systems. however, simplier scenarios or where performance is critical,
its use may introduce unnecessary complexity or bottlenecks.

### When to use ?

- Complex object interactions: Mediator simplifies complex interactions by centralizing control instead of entangling dependencies.
- Decouple components
- Enhances maintainability: When changes in one component necessitate changes in others, a mediator can localize the impact, allowing individual components to evolve independently.
- It encourages reuse of components.

### When not to use ? (To avoid over-engineering)

- If the system has few components with straight forward interactions, introducing mediator may add unnecessary complexity without significant benefits.
- Risk of a single point of failure: If it fails, it can disrupt the entire system's communication flow.
- Performance-critical applications: It can become a performance bottleneck if it handles large volume of interactions, as all communications pass through it.

### Gotchas!!

### Comparisons with alternates
