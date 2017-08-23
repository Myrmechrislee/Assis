/**
 * Gets the width of the console that is running this project.
 * The number it returns is the amount of characters it can fit in a row.
 * @returns {Number}
 */
function getConsoleWidth() {
    return process.stdout.columns
}
/**
 * Gets the height of the console that is running this project.
 * The number it returns is the amount of characters it can fit in a column.
 * @returns {Number}
 */
function getConsoleHeight() {
    return process.stdout.rows
}

module.exports = {
    getConsoleHeight,
    getConsoleWidth
}