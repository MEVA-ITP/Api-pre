"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userPermissionBigerThan = exports.getPermissionLevelOfUser = exports.getPermissionLevel = exports.getUserPermissionByLdapType = exports.ldapTypeMapping = exports.userPermissions = void 0;
const userPermissions = {
  "none": 0,
  "user": 100,
  "student": 200,
  "teacher": 300,
  "admin": 400,
  "owner": 500,
  "herobrine": 999
};
exports.userPermissions = userPermissions;

for (let key of Object.keys(userPermissions)) {
  module.exports[key.toUpperCase()] = key;
}

const ldapTypeMapping = {
  schueler: module.exports.STUDENT,
  lehrer: module.exports.TEACHER
};
exports.ldapTypeMapping = ldapTypeMapping;

const getUserPermissionByLdapType = ldapType => {
  if (ldapType in ldapTypeMapping) {
    return ldapTypeMapping[ldapType];
  }

  return undefined;
};

exports.getUserPermissionByLdapType = getUserPermissionByLdapType;

const getPermissionLevel = level => {
  if (isNaN(level)) {
    return userPermissions[level];
  } else {
    return level;
  }
};

exports.getPermissionLevel = getPermissionLevel;

const getPermissionLevelOfUser = user => {
  if (user === undefined || !("permission" in user)) {
    return userPermissions.none;
  }

  return getPermissionLevel(user.permission);
};

exports.getPermissionLevelOfUser = getPermissionLevelOfUser;

const userPermissionBigerThan = (user, level) => {
  if (process.env.NODE_ENV === "development") {
    return true;
  }

  return getPermissionLevelOfUser(user) >= getPermissionLevel(level);
};

exports.userPermissionBigerThan = userPermissionBigerThan;