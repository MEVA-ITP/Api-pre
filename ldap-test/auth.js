//pwFile is the password from a user to authenticate and gain access to ldap
//if you want to test it, write a pw.js file with following content:

/**
 * module.exports = {pw: "<yourpassword>"}
 */
var pwFile = require('./pw.js')
var pw = pwFile.pw
//ldapjs is required to use below functions and methods
var ldap = require('ldapjs');
var client = ldap.createClient({
    url: 'ldap://tgm.ac.at'
});
//if you want to test it, write your name instead of mfletzberger
client.bind('mfletzberger@tgm.ac.at', pw, function(err) {
    console.error(err)
});
//search filter for search
var opts = {
    filter: '(mailNickname=mfletzberger)',
    scope: 'sub'
};

client.search('OU=People,OU=identity,DC=tgm,DC=ac,DC=at', opts, function(err, res) {
    if(err){
        console.error(err)
        return
    }
    res.on('searchEntry', function(entry) {
        console.log('entry: ' + JSON.stringify(entry.object));
        client.bind(entry.object.dn, pw, function (err) {
            console.error(err)
            console.log("Authed if null")
        })
    });
    res.on('searchReference', function(referral) {
        console.log('referral: ' + referral.uris.join());
    });
    res.on('error', function(err) {
        console.error('error: ' + err.message);
    });
    res.on('end', function(result) {
        console.log('status: ' + result.status);
    });
});