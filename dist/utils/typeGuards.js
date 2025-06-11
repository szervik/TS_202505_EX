"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGuest = isGuest;
function isGuest(obj) {
    return (typeof obj === 'object' &&
        typeof obj.id === 'number' &&
        typeof obj.name === 'string' &&
        typeof obj.email === 'string');
}
