"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Damage = exports.Reservation = exports.Device = exports.User = void 0;

var _user = require("./models/user");

var _device = require("./models/device");

var _reservation = require("./models/reservation");

var _damage = require("./models/damage");

var _database = require("./database");

const User = _database.database.model("User", _user.userSchema);

exports.User = User;

const Device = _database.database.model("Device", _device.deviceSchema);

exports.Device = Device;

const Reservation = _database.database.model("Reservation", _reservation.reservationSchema);

exports.Reservation = Reservation;

const Damage = _database.database.model("Damage", _damage.damageSchema);

exports.Damage = Damage;