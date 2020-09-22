import { DataTypes } from "sequelize";
import sequelize from '../../middlewares/dbInstance'



// define course model
const Course = sequelize.define('Course', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  field: {
    type: DataTypes.STRING,
    allowNull: false 
  }
}, {
  tableName: 'courses'
})


// define student model
const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.NUMBER,
    allowNull: true
  }
}, {
  tableName: 'students'
})


export {
  Course, Student
}