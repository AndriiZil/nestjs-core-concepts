# Guards

- A guard is a class annotated with the @Injectable() decorator, which implements the CanActivate interface.

1. Guards are executed after all middleware, but before any interceptor or pipe.
2. Controller implementation
3. Global implementation using `app.useGlobalGuards(new RolesGuard())`
4. In the case of hybrid apps the useGlobalGuards() method doesn't set up guards for gateways and micro services
by default (see Hybrid application for information on how to change this behavior). For "standard" (non-hybrid) 
microservice apps, useGlobalGuards() does mount the guards globally.
