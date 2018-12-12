"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userSchema = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _validator = _interopRequireDefault(require("validator"));

var _phone = _interopRequireDefault(require("phone"));

var _userPermissions = require("../../config/userPermissions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Using validator for email, and other validation
// Not using validator for phone, because Austrian phone number are not recognized
// Using phone for that purpose. plus for phone, also gives us normalized phone numbers. For sms or something
const userSchema = new _mongoose.default.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: value => {
      return _validator.default.isEmail(value);
    }
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    validate: value => {
      let rest = (0, _phone.default)(value);
      if (rest.lenght <= 1) throw Error("Invalid phone number");
      return rest[0];
    }
  },
  message_tokens: {
    type: [String],
    required: true
  },
  external: {
    type: Boolean,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  },
  // externale == false => auto on
  permission: {
    type: String,
    enum: Object.keys(_userPermissions.userPermissions),
    default: "user",
    required: true
  },
  fname: String,
  // Only required if external
  lname: String,
  // Only required if external
  password: String // Only required if external

});
exports.userSchema = userSchema;