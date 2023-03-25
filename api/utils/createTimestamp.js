function createTimestamp() {
    const currentDate = new Date();
    const timestamp = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()} GMT${
        -currentDate.getTimezoneOffset() / 60
    }`;

    return timestamp;
}

module.exports = createTimestamp;
