const moment = require('moment');

function compareTimestamps(a, b) {
    const date1 = moment(a.timestamp, 'DD/MM/YYYY HH:mm:ss');
    const date2 = moment(b.timestamp, 'DD/MM/YYYY HH:mm:ss');

    if (a.isDone && !b.isDone) {
        return 1;
    } else if (!a.isDone && b.isDone) {
        return -1;
    } else {
        if (date1.isAfter(date2)) {
            return -1;
        } else if (date2.isAfter(date1)) {
            return 1;
        } else {
            return 0;
        }
    }
}

module.exports = compareTimestamps;
