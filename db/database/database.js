"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.database = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = require("../config/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const database = _mongoose.default.createConnection(_config.config.db.uri, {
  useNewUrlParser: true
});

exports.database = database;