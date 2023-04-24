module.exports = {
    development: {
        PORT: 3001,
        DATABASE_URL: process.env.DEV_DATABASE_URL,
    },
    production: {
        PORT: process.env.PORT,
        DATABASE_URL: process.env.DATABASE_URL,
    },
};
