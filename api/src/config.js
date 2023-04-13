module.exports = {
    development: {
        PORT: 3001,
        DATABASE_URL:
            'mongodb+srv://azzarox:7Je4OyDTr5L3tF16@mern-todos.ma1oifw.mongodb.net/?retryWrites=true&w=majority',
    },
    production: {
        PORT: process.env.PORT,
        DATABASE_URL: process.env.DATABASE_URL,
    },
};
