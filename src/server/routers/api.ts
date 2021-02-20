import express from 'express'
import { router as authRouter } from './auth'

const router = express.Router()

router.use(authRouter)

export { router }
