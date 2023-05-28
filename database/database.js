import Sequelize  from "sequelize";

export const connection = new Sequelize('guia_perguntas', 'root', '1q2w!Q@W', {
    host: 'localhost',
    dialect: 'mysql'
});
