const str = require('./cats/string');
const num = require('./cats/number');
const dat = require('./cats/date');
const con = require('./cats/console');

module.exports = {
    /**
     * Number Assistance
     */
    number: num,
    /**
     * String Assistance
     */
    string: str,
    /**
     * Date Assistance
     */
    date: dat,
    /**
     * Console Assistance
     */
    console: con
}