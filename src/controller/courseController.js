import { Router } from 'express'
import { async } from 'regenerator-runtime';

import { 
  getCourses,
  getOneCourse,
  createOneCourse,
  updateOneCourse,
  deleteOneCourse
} from "../model/actions/CourseModel";

const courseController = Router()


courseController.get('/', async (req, res) => {
  const skip = Number(req.query._start)
  const limit = Number(req.query._end) - skip
  const sort = req.query._sort
  const order = req.query._sort == 'ASC' ? -1 : 1

  let { courses, totalCount } = await getCourses({ skip, limit, sort, order })
  res.header('X-Total-Count', totalCount)
  return res.send(courses)
})

courseController.get('/:id', async (req, res) => {
  let course = await getOneCourse(req.params.id)
  return res.send(course)
})

courseController.post('/', async (req, res) => {
  let course = await createOneCourse(req.body)
  return res.send(course)
})

courseController.put('/:id', async (req, res) => {
  let course = await updateOneCourse(req.body)
  return res.send(course)
})

courseController.delete('/:id', async (req, res) => {
  let course = await deleteOneCourse(req.params.id)
  return res.send({ course })
})

export default courseController