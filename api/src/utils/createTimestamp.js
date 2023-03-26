// function createTimestamp() {
//     const currentDate = new Date();
//     const timestamp = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()} GMT${
//         -currentDate.getTimezoneOffset() / 60
//     }`;

//     return timestamp;
// }

function createTimestamp() {
    const currentDate = new Date();
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC',
    };
    const timestamp = currentDate.toLocaleDateString('en-GB', options);
    return timestamp;
}

module.exports = createTimestamp;
