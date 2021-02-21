import express from 'express'
import { DEFAULT_ERROR_MESSAGE } from '../common/constants'
import { Report, ReportType, Contact, Image } from '../common/domain'
import { ContactModel, ReportModel } from '../db'
import { createLogger } from '../common/logger'

const router = express.Router()
router.use((req, _res, next) => {
  req.context.logger = createLogger({ tenantId: 'images router' })
  next()
})

router.get<{ id: string }, any, any>('/:id', async (req, res) => {
  
})

type PostReportRequestBody = Report & {
  contact: Partial<Contact>
}
router.post<never, any, any>('/', async (req, res) => {

})

export { router }
