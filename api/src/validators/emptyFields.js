const emptyFieldsExist = (...fields) => {
    return fields.some((x) => x?.length == 0);
};

module.exports = emptyFieldsExist;
