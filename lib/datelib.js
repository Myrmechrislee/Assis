/**
 * Get the current date & time
 * @return {Date}
 */
function now() {
    return new Date();
}
/**
 * Change date to a format
 * @param {Date} date date to format
 * @param {String} format date format e.g DD/MM/YYYY[am|pm] hh:mm:ss.ms
 * @param {Boolean} twentyFourHourTime should it be twenty four hour time or not
 */
function toDateFormat(date, format, twentyFourHourTime) {
    var y = date.getFullYear().toString();
    var aorp = 'am';
    var h
    if((!twentyFourHourTime) && date.getHours() > 12) {
        h = date.getHours() - 12;
    } else {
        h = date.getHours();
    };
    if(date.getHours() > 12) {
        aorp = 'pm'
    }
    return format
        .replace(/DD/g, date.getDate().toString())
        .replace(/MM/g, date.getMonth().toString())
        .replace(/YYYY/g, y)
        .replace(/YY/g, y.slice(y.length - 2, y.length))
        .replace(/hh/g, h)
        .replace(/mm/g, date.getMinutes())
        .replace(/ss/g, date.getSeconds())
        .replace(/ms/g, date.getMilliseconds())
        .replace(/\[\s*am\s*\|\s*pm\s*\]/g, aorp)
}
module.exports = {
    now,
    toDateFormat
};