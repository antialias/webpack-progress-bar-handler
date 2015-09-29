var readline = require('readline');
var assign = require('lodash.assign');
var throttle = require('lodash.throttle');
module.exports = function (options) {
    options = extend({
        progressLength: 50,
        arrowHead: '>',
        arrowBody: '=',
        unfinished: '-',
        throttle: 0;
    }, options);
    var handler = function (percentage, message) {
        var arrowLength = Math.floor(percentage * options.progressLength);
        readline.clearLine(process.stdout, 0); // clear current text
        readline.cursorTo(process.stdout, 0); // move cursor to beginning of line
        if (percentage === 1) {
            options.arrowHead = options.arrowBody;
            message += "\n";
        }
        process.stdout.write('[webpack] : [' + (new Array(arrowLength).join(options.arrowBody)) + options.arrowHead + (new Array(options.progressLength - arrowLength).join('-')) + '] ' + (percentage * 100).toFixed(2) + '% : ' + message);
    };
    if (options.throttle > 0) {
        handler = throttle(handler, options.throttle);
    }
    return handler;
};
