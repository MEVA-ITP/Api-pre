"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.damageSchema = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const damageSchema = new _mongoose.default.Schema({
  user: {
    type: 'ObjectId',
    ref: 'User',
    required: true
  },
  device: {
    type: 'ObjectId',
    ref: 'Device',
    required: true
  },
  time: {
    type: Date,
    require
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: ["broken", "in_repair", "repaired"],
    required: true
  }
});
exports.damageSchema = damageSchema;