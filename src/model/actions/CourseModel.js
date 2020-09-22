import { async } from 'regenerator-runtime'
import { Course } from '../orms'



export const getCourses = async ({ skip, limit, order, sort }) => {
  const courses = await Course.findAll({
    order: [
      [order, sort]
    ],
    offset: skip,
    limit
  })
  const { count, rows } = await Course.findAndCountAll()
  return { courses, count }
}

export const getOneCourse = async id => {
  const course = await Course.findByPk(id)
  return course
}

export const createOneCourse = async ({ title, field }) => {
  const course = await Course.create({ title, field })
  return course
}

export const updateOneCourse = async ({ id, title, field }) => {
  let course  = await Course.findByPk(id)
  course.title = title
  course.field = field
  course.save()
  return course
}

export const deleteOneCourse = async id => {
  const course = await Course.destroy({
    where: { id }
  })
  return course
}