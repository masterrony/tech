import { Sequelize } from "sequelize";

const sequelize = new Sequelize('tech', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
})

export default sequelize