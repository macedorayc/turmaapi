import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connection = await  mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB,

    typeCast: function(field, next) {   
        if (field.type === 'TINY' && field.length === 1) {
            return (field.string() === '1');
        }
        else if (field.type.includes ('decimal')) {
            return Number(field.string());
        }
        else {

            return next();
        }
    }
});

console.log(' ---> Conexão com o banco de dados estabelecida com sucesso!');
export default connection