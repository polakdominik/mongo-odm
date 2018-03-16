"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
exports.OneToMany = function (options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        target._odm = target._odm || {};
        target._odm.references = target._odm.references || {};
        if (!options.type) {
            throw new Error("A 'type' is missing in @OneToMany properties of '" + key + "' member in class " + target.constructor.name);
        }
        options.referenceType = 'OneToMany';
        target._odm.references[key] = __assign({}, options);
    };
};
