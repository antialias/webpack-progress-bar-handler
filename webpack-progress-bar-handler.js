var readline = require('readline');
module.exports = function (percentage, message) {
    readline.clearLine(process.stdout, 0); // clear current text
    readline.cursorTo(process.stdout, 0); // move cursor to beginning of line
    var progressLength = 50;
    var arrowLength = Math.floor(percentage * progressLength);
    var arrowHead = '>';
    var arrowBody = '=';
    if (percentage === 1) {
        arrowHead = arrowBody;
        message += "\n";
    }
    process.stdout.write('[webpack] : [' + (new Array(arrowLength).join(arrowBody)) + arrowHead + (new Array(progressLength - arrowLength).join('-')) + '] ' + (percentage * 100).toFixed(2) + '% : ' + message);
}
