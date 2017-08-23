const assis = require('.')
var str = assis.date.toDateFormat(assis.date.now(), 'DD/MM/YYYY hh:mm:ss.ms[am|pm]', false);
var en = assis.string.cryptography.encrypt('aes256', str, 'foobar');
var de = assis.string.cryptography.decrypt('aes256', en, 'foobar')
console.log(
    assis.console.getConsoleHeight(),
    assis.console.getConsoleWidth()
);