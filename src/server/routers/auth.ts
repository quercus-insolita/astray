import express from 'express'
import { DEFAULT_ERROR_MESSAGE } from '../common/constants'
import { User } from '../common/domain'

const router = express.Router()

router.post<never, any, User>('/register', async (req, res) => {
  try {
    const registrationResults = await req.authService.registerUser(req.body)

    if (!registrationResults.success) {
      res.status(400).json({
        success: false,
        error: registrationResults.errorMessage
      })
    } else {
      const { id, ...user } = registrationResults.user
      const token = await req.authService.generateToken({ id })

      res.status(200).json({
        success: true,
        data: {
          token,
          user,
        },
      })
    }
  } catch {
    res.status(500).json({
      success: false,
      error: DEFAULT_ERROR_MESSAGE,
    })
  }
})

router.post<never, any, Pick<User, 'email' | 'password'>>('/login', async (req, res) => {
  try {
    const authenticationResults = await req.authService.authenticateUser(req.body)

    if (!authenticationResults.success) {
      res.status(400).json({
        success: false,
        error: authenticationResults.errorMessage
      })
    } else {
      const { id, ...user } = authenticationResults.user
      const token = await req.authService.generateToken({ id })

      res.status(200).json({
        success: true,
        data: {
          token,
          user,
        },
      })
    }
  } catch {
    res.status(500).json({
      success: false,
      error: DEFAULT_ERROR_MESSAGE,
    })
  }
})

export { router }
