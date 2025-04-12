### Use cases ( what its great for )

The proxy pattern provides a stand-in or placeholder for another object to control access to it. The proxy can:

- Add lazy loading. Eg: Only load large assets (eg: game textures, videos or database connections) when they are needed
- Add access control
- Log usage
- Cache results

### When to use ?

### When not to use ? (To avoid over-engineering)

- When there's not need to control access or behaviour. If you are just forwarding calls with no added logic, its unnecessary overhead
- For real-time or high-performance systems (e.g low-latency games), don't add proxies unless you really need control/logging/caching.
- If it adds unnecessary indirection. Prefer simple delegation or decorators if all you need is one-off behaviour.

### Real world analogies

| **Use case**                     | **Proxy role**                                 |
| -------------------------------- | ---------------------------------------------- |
| API Gateways                     | Rate limiting, auth, routing                   |
| Database query wrappers          | Add caching, logs                              |
| External service clients         | Retry, logging, feature flags                  |
| Service contract enforcement     | Ensure only validated or sanitized data passes |
| Reverse proxies (Nginx, HAProxy) | Network-level request forwarding and caching   |
