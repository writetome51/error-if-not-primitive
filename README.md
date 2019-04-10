# errorIfNotPrimitive(arg): void

Triggers error if `arg` is not a primitive type.  
The only types considered primitive here are number, string, and boolean.

## Example
```
errorIfNotPrimitive([]);
// Error: "Input must be either a number, string, or boolean"
```

## Installation
`npm i  error-if-not-primitive`

## Loading
```ts
// if using TypeScript:
import { errorIfNotPrimitive } from 'error-if-not-primitive';
// if using ES5 JavaScript:
var errorIfNotPrimitive = require('error-if-not-primitive').errorIfNotPrimitive;
```
