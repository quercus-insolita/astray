import express from 'express'
import { router as authRouter } from './auth'
import { router as reportsRouter } from './reports'

const router = express.Router()

router.use(authRouter)
router.use('/reports', reportsRouter)

export { router }
