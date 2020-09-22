import { async } from 'regenerator-runtime'
import { Student } from '../orms'



export const getStudents = async ({ skip, limit, order, sort }) => {
  const students = await Student.findAll({
    order: [
      [order, sort]
    ],
    offset: skip,
    limit
  })
  const { count, rows } = await Student.findAndCountAll()
  return { students, count }
}

export const getOneStudent = async id => {
  const student = await Student.findByPk(id)
  return student
}

export const createOneStudent = async ({ name, age }) => {
  const student = await Student.create({ name, age })
  return student
}

export const updateOneStudent = async ({ id, name }) => {
  let student  = await Student.findByPk(id)
  student.name = name
  student.age = age
  student.save()
  return student
}

export const deleteOneStudent = async id => {
  const student = await Student.destroy({
    where: { id }
  })
  return student
}