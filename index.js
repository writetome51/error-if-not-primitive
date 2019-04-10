"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

// Although primitive types do technically include 'undefined', since when do you
// intentionally pass undefined to a function?  We'll use common sense here and not
// allow undefined to be included among allowed primitives.

function errorIfNotPrimitive(arg) {
    var primitives = ['number', 'string', 'boolean'];
    // @ts-ignore
    if (!(primitives.includes(typeof arg))) {
        throw new Error('Input must be either a number, string, or boolean');
    }
}
exports.errorIfNotPrimitive = errorIfNotPrimitive;
