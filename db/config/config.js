"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

var _passwords = require("./passwords");

const config = {
  // Mongo db database configuration
  db: {
    uri: 'mongodb://localhost:27017/onquip'
  },
  // Path configuration.
  paths: {
    // Where the public directory lies (aka public webpage). Relative path to main.js
    public: "../public",
    // Where the 'extension' of the server lies. Relative path to main.js
    server: './server'
  },
  ldap: {
    // Object directly passed to ldapjs.createClient()
    client: {
      url: 'ldap://tgm.ac.at'
    },
    base: 'OU=People,OU=identity,DC=tgm,DC=ac,DC=at',
    user: 'dlangheiter@tgm.ac.at',
    password: _passwords.ldapPw
  }
};
exports.config = config;