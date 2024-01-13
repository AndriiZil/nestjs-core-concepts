# Middleware

- Middleware functions can perform the following tasks:
```bash
  execute any code.
  make changes to the request and the response objects.
  end the request-response cycle.
  call the next middleware function in the stack.
  if the current middleware function does not end the request-response cycle, it must call next() to pass control 
  to the next middleware function. Otherwise, the request will be left hanging. 
```
