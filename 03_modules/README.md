# Modules

- The @Module() decorator takes a single object whose properties describe the module:
```bash
  providers	the providers that will be instantiated by the Nest injector and that may be shared at least across this module
  controllers	the set of controllers defined in this module which have to be instantiated
  imports	the list of imported modules that export the providers which are required in this module
  exports	the subset of providers that are provided by this module and should be available in other modules which import this module. 
  You can use either the provider itself or just its token (provide value) 
```
- To create a module using the CLI, simply execute the `$ nest g module [name]` command.
