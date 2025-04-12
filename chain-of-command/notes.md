### Use cases ( what its great for )

It allows a request to pass through a chain of handlers. Each handler decides either to process the request or to pass it to the next handler in the chain.
This pattern promotes loose coupling between senders and receiver by allowing multiple handlers to process a request without the sender needing to know which handler will deal with it

- Approval workflows
- Middleware in web servers: Each component is capable of handling or modifying the request/response.

### When to use ?

- WHen multiple objects can hanfle a request, and the handler is not predetermined.
- To decouple senders and receivers, allow dynamic determination of request handlers.
- When you wan t to pass a request along a chain of potential handlers.

### When not to use ? (To avoid over-engineering)

- When all request are handled by a single handler.
- if the request musth be handled by a specific handler known at compile time.
- When adding the complexity of chaining handlers is unnecessary overhead.
