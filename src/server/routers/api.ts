import express from 'express'
import { verifyTokenAndInjectUser } from '../middlewares/verifyTokenAndInjectUser'
import { router as authRouter } from './auth'
import { router as reportsRouter } from './reports'

const router = express.Router()

router.use(authRouter)
router.get('/user', verifyTokenAndInjectUser, (req, res) => {
  const { name, email } = req.context.user!
  res.status(200).json({ success: true, user: { name, email }})
})
router.use('/reports', reportsRouter)

export { router }
