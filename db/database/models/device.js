"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deviceSchema = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const root = "/public/images/";
const deviceSchema = new _mongoose.default.Schema({
  name: {
    type: String,
    required: true
  },
  serial: {
    type: String,
    required: true
  },
  invnr: {
    type: String,
    required: true
  },
  room: {
    type: String,
    default: "unknown"
  },
  image: {
    type: String,
    get: v => `${root}${v}`
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["ok", "broken", "not available"],
    required: true
  },
  // Other?
  attributes: {
    type: Map,
    required: true
  },
  tags: [String]
});
exports.deviceSchema = deviceSchema;