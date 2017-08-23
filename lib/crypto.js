const crypto = require('crypto');
/**
 * @typedef {('aes-128-cbc'|'aes-128-ccm'|'aes-128-cfb'|'aes-128-cfb1'|'aes-128-cfb8'|'aes-128-ctr'|'aes-128-ecb'|'aes-128-gcm'|'aes-128-ofb'|'aes-128-xts'|'aes-192-cbc'|'aes-192-ccm'|'aes-192-cfb'|'aes-192-cfb1'|'aes-192-cfb8'|'aes-192-ctr'|'aes-192-ecb'|'aes-192-gcm'|'aes-192-ofb'|'aes-256-cbc'|'aes-256-ccm'|'aes-256-cfb'|'aes-256-cfb1'|'aes-256-cfb8'|'aes-256-ctr'|'aes-256-ecb'|'aes-256-gcm'|'aes-256-ofb'|'aes-256-xts'|'aes128'|'aes192'|'aes256'|'bf'|'bf-cbc'|'bf-cfb'|'bf-ecb'|'bf-ofb'|'blowfish'|'camellia-128-cbc'|'camellia-128-cfb'|'camellia-128-cfb1'|'camellia-128-cfb8'|'camellia-128-ecb'|'camellia-128-ofb'|'camellia-192-cbc'|'camellia-192-cfb'|'camellia-192-cfb1'|'camellia-192-cfb8'|'camellia-192-ecb'|'camellia-192-ofb'|'camellia-256-cbc'|'camellia-256-cfb'|'camellia-256-cfb1'|'camellia-256-cfb8'|'camellia-256-ecb'|'camellia-256-ofb'|'camellia128'|'camellia192'|'camellia256'|'cast'|'cast-cbc'|'cast5-cbc'|'cast5-cfb'|'cast5-ecb'|'cast5-ofb'|'des'|'des-cbc'|'des-cfb'|'des-cfb1'|'des-cfb8'|'des-ecb'|'des-ede'|'des-ede-cbc'|'des-ede-cfb'|'des-ede-ofb'|'des-ede3'|'des-ede3-cbc'|'des-ede3-cfb'|'des-ede3-cfb1'|'des-ede3-cfb8'|'des-ede3-ofb'|'des-ofb'|'des3'|'desx'|'desx-cbc'|'id-aes128-CCM'|'id-aes128-GCM'|'id-aes128-wrap'|'id-aes192-CCM'|'id-aes192-GCM'|'id-aes192-wrap'|'id-aes256-CCM'|'id-aes256-GCM'|'id-aes256-wrap'|'id-smime-alg-CMS3DESwrap'|'idea'|'idea-cbc'|'idea-cfb'|'idea-ecb'|'idea-ofb'|'rc2'|'rc2-40-cbc'|'rc2-64-cbc'|'rc2-cbc'|'rc2-cfb'|'rc2-ecb'|'rc2-ofb'|'rc4'|'rc4-40'|'rc4-hmac-md5'|'seed'|'seed-cbc'|'seed-cfb'|'seed-ecb'|'seed-ofb')} algs
 */
/**
 * Encrypt a string with the nodejs inbuilt crypto module.
 * @param {algs} alg Encryption Algorithim
 * @param {String} str String to Encrypt
 * @param {String} pswd Encryption Password
 * @returns {String}
 */
function encrypt(alg, str, pswd) {
    var cipher = crypto.createCipher(alg, pswd);
    var encrypted = cipher.update(str, 'utf8', 'hex')
    encrypted += cipher.final('hex');
    return encrypted;
}
/**
 * Decrypt a string with the nodejs inbuilt crypto module.
 * @param {algs} alg Encryption Algorithim
 * @param {String} str Encrypted String
 * @param {String} pswd Encryption Password
 * @returns {String}
 */
function decrypt(alg, str, pswd) {
    var decipher = crypto.createDecipher(alg, pswd);
    var deciphered = decipher.update(str, 'hex', 'utf8')
    deciphered += decipher.final('utf8');
    return deciphered;
}
/**
 * @type {{'DSA': Function, 'DSA-SHA': Function, 'DSA-SHA1': Function, 'DSA-SHA1-old': Function, 'RSA-MD4': Function, 'RSA-MD5': Function, 'RSA-MDC2': Function, 'RSA-RIPEMD160': Function, 'RSA-SHA': Function, 'RSA-SHA1': Function, 'RSA-SHA1-2': Function, 'RSA-SHA224': Function, 'RSA-SHA256': Function, 'RSA-SHA384': Function, 'RSA-SHA512': Function, 'dsaEncryption': Function, 'dsaWithSHA': Function, 'dsaWithSHA1': Function, 'dss1': Function, 'ecdsa-with-SHA1': Function, 'md4': Function, 'md4WithRSAEncryption': Function, 'md5': Function, 'md5WithRSAEncryption': Function, 'mdc2': Function, 'mdc2WithRSA': Function, 'ripemd': Function, 'ripemd160': Function, 'ripemd160WithRSA': Function, 'rmd160': Function, 'sha': Function, 'sha1': Function, 'sha1WithRSAEncryption': Function, 'sha224': Function, 'sha224WithRSAEncryption': Function, 'sha256': Function, 'sha256WithRSAEncryption': Function, 'sha384': Function, 'sha384WithRSAEncryption': Function, 'sha512': Function, 'sha512WithRSAEncryption': Function, 'shaWithRSAEncryption': Function, 'ssl2-md5': Function, 'ssl3-md5': Function, 'ssl3-sha1': Function,'whirlpool': Function}}
 */
var o = {};
crypto.getHashes().forEach(item => {
    /**
     * Hash encrypt string
     * @param {String} str
     */
    o[item] = function(str) {
        return crypto.createHash(item).update(str).digest('hex');
    }
});
module.exports = {
    encrypt,
    decrypt,
    hashEncryption: o
}