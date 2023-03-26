function debounce(func, delay) {
    let timeoutId;
    let debounceHandler = {};

    debounceHandler.execute = (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };

    debounceHandler.cancel = () => {
        clearTimeout(timeoutId);
    };

    return debounceHandler;
}

export default debounce;
