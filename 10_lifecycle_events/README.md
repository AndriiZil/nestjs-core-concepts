# Lifecycle Events

- `enableShutdownHooks` consumes memory by starting listeners. In cases where you are running multiple Nest apps in a 
single Node process (e.g., when running parallel tests with Jest), Node may complain about excessive listener processes. 
For this reason, enableShutdownHooks is not enabled by default. Be aware of this condition when you are running multiple 
instances in a single Node process.
