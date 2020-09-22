import { Router } from 'express'

import { 
  getStudents,
  getOneStudent,
  createOneStudent,
  updateOneStudent,
  deleteOneStudent
} from "../model/actions/StudentModel";

const studentController = Router()


studentController.get('/', async (req, res) => {
  const skip = Number(req.query._start)
  const limit = Number(req.query._end) - skip
  const order = req.query._sort
  const sort = req.query._order

  let { students, count } = await getStudents({ skip, limit, order, sort })
  res.header('X-Total-Count', count)
  return res.send(students)
})

studentController.get('/:id', async (req, res) => {
  let student = await getOneStudent(req.params.id)
  return res.send(student)
})

studentController.post('/', async (req, res) => {
  let student = await createOneStudent(req.body)
  return res.send(student)
})

studentController.put('/:id', async (req, res) => {
  let student = await updateOneStudent(req.body)
  return res.send(student)
})

studentController.delete('/:id', async (req, res) => {
  let student = await deleteOneStudent(req.params.id)
  return res.send({ student })
})

export default studentController