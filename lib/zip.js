const zlib = require('zlib');

/**
 * Compress string
 * @param {String} str string to compress
 * @param {Number} [level=1] compression level
 * @returns {String}
 */
function compress(str, level) {
    if(!level) level =1;
    return zlib.gzipSync(str, {level: level}).toString('base64');
}
/**
 * Decompress string
 * @param {String|Buffer} buf buffer to decompress
 * @param {Number} [level=1] compression level
 * @returns {String}
 */
function decompress(buf, level) {
    if(!level) level =1;
    if(!Buffer.isBuffer(buf)) buf = new Buffer(buf, 'base64');
    return zlib.gunzipSync(buf, {level: level}).toString();
}
module.exports = {
    compress,
    decompress
}