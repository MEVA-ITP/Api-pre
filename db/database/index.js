"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  database: true
};
Object.defineProperty(exports, "database", {
  enumerable: true,
  get: function () {
    return _database.database;
  }
});

var _database = require("./database");

var _Models = require("./Models");

Object.keys(_Models).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Models[key];
    }
  });
});