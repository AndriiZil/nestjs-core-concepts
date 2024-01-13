# Pipes

- Transformation
```bash
  ValidationPipe
  ParseIntPipe
  ParseFloatPipe
  ParseBoolPipe
  ParseArrayPipe
  ParseUUIDPipe
  ParseEnumPipe
  DefaultValuePipe
  ParseFilePipe 
```
- Validation

### Global Assigning
- In the case of hybrid apps the useGlobalPipes() method doesn't set up pipes for gateways and micro services. 
For "standard" (non-hybrid) microservice apps, useGlobalPipes() does mount pipes globally.
