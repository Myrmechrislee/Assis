/**
 * Convert from Fahrenheit to Celsius
 * @param {Number} fer ferinheight
 * @returns {Number}
 */
function fer2cel(fer) {
    return (fer - 32) / 1.8
}
/**
 * Convert from Celsius to Fahrenheit
 * @param {Number} cel celsius
 * @returns {Number}
 */
function cel2fer(cel) {
    return cel * 1.8 + 32
}
module.exports = {fer2cel, cel2fer}