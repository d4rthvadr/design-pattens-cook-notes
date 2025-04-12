### Use cases ( what its great for )

- Integrating with legacy code
- Third part libraries: WHen incorporating external libraries that have different interfaces than what your application expects.
- Multiple integrations: When your system needs to interact with multiple subsystems or Apis with varying interfaces.

### When to use ?

- When you need to make two or more existing interfaces compatible without altering their source code.
- When you want reuse existing classes that lack the interface required by your application

### When not to use ? (To avoid over-engineering)

- When you can modify the existing classes or interfaces to match the required interface.
- When the interfaces are already compatible, and no adaption is necessary.
