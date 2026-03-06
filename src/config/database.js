module.exports = {
    dialect:'postegres',
    host: 'localhost',
    port: 5432,
    username: 'misaias',
    password: '123456',
    database: 'dev-burguer-db',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};