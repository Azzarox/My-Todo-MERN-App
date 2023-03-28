const moment = require('moment');

function createTimestamp() {
    const timestamp = moment().format('DD/MM/YYYY, HH:mm:ss');
    return timestamp;
}

module.exports = createTimestamp;
