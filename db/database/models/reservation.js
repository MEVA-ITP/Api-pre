"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reservationSchema = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// REF: https://mongoosejs.com/docs/2.8.x/docs/populate.html
const reservationSchema = new _mongoose.default.Schema({
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
  from: {
    type: Date,
    required: true
  },
  to: {
    type: Date,
    required: true
  }
});
exports.reservationSchema = reservationSchema;