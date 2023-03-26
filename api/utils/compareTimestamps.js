function compareTimestamps(a, b) {
    const date1 = new Date(a.timestamp);
    const date2 = new Date(b.timestamp);
    if (date1.getTime() > date2.getTime()) {
        return -1;
    } else if (date2.getTime() > date1.getTime()) {
        return 1;
    } else {
        return 0;
    }
}

module.exports = compareTimestamps;
