"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enumerable = Enumerable;
function Enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
