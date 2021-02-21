import express from 'express'
import { DEFAULT_ERROR_MESSAGE } from '../common/constants'
import { User } from '../common/domain'
import { createLogger } from '../common/logger'

const router = express.Router()
router.use((req, _res, next) => {
  req.context.logger = createLogger({ tenantId: 'auth router' })
  next()
})

router.post<never, any, User>('/register', async (req, res) => {
  try {
    const registrationResults = await req.context.authService.registerUser(req.body)

    if (!registrationResults.success) {
      res.status(400).json({
        success: false,
        error: registrationResults.errorMessage
      })
    } else {
      const { id, ...user } = registrationResults.user
      const token = await req.context.authService.generateToken({ id })

      res.status(201).json({
        success: true,
        data: {
          token,
          user,
        },
      })
    }
  } catch (e) {
    console.error(e)
    req.context.logger.error(e)
    res.status(500).json({
      success: false,
      error: DEFAULT_ERROR_MESSAGE,
    })
  }
})

router.post<never, any, Pick<User, 'email' | 'password'>>('/login', async (req, res) => {
  try {
    const authenticationResults = await req.context.authService.authenticateUser(req.body)

    if (!authenticationResults.success) {
      res.status(400).json({
        success: false,
        error: authenticationResults.errorMessage
      })
    } else {
      const { id, ...user } = authenticationResults.user
      const token = await req.context.authService.generateToken({ id })

      res.status(200).json({
        success: true,
        data: {
          token,
          user,
        },
      })
    }
  } catch (e) {
    console.error(e)
    req.context.logger.error(e)
    res.status(500).json({
      success: false,
      error: DEFAULT_ERROR_MESSAGE,
    })
  }
})

export { router }
