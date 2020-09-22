import { Sequelize } from "sequelize";

const sequelize = new Sequelize('tech', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

export default sequelize