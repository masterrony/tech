import { Router } from 'express'
import { sign } from "jsonwebtoken";
import { auth } from '../model/actions/UserModel'

const authController = Router()

authController.post('/', (req, res) => {
	const { password, username } = req.body
  if(password != process.env.PASSWORD || username != process.env.USERNAME)
    return res.json({ scs: 0 })

  const token = sign(
    { iat: Math.floor(Date.now() / 1000) },
    process.env.APP_KEY,
    { expiresIn: '12h' }
  )

  return res.json({ scs:1, token })
})

export default authController