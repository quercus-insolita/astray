import express from 'express'
import { createLogger } from '../common/logger'
import { DEFAULT_ERROR_MESSAGE } from '../common/constants'
import { Report, ReportType, Contact, Image } from '../common/domain'
import { ContactModel, ReportModel, ImageModel } from '../db'
import { verifyTokenAndInjectUser } from '../middlewares/verifyTokenAndInjectUser'

const router = express.Router()
router.use((req, _res, next) => {
  req.context.logger = createLogger({ tenantId: 'reports router' })
  next()
})

type GetAllReportsQueryParams = {
  type: ReportType
}
router.get<never, any, never, GetAllReportsQueryParams>('/', async (req, res) => {
  const { type } = req.query
  try {
    const allReportsOfGivenTypeModels = await req.context.db.models.Report.findAll<ReportModel>({
      where: {
        type
      }
    })

    const response: any[] = []
    for (const report of allReportsOfGivenTypeModels) {
      const [image] = await report.getImages()
      const { type, petType, city, sex, color, date, description } = report
      response.push({ type, petType, city, sex, color, date, description, imageId: image!.id })
    }

    res.status(200).json({
      success: true,
      reports: response,
    })
  } catch (e) {
    req.context.logger.error(e)
    res.status(500).json({
      success: false,
      error: DEFAULT_ERROR_MESSAGE,
    })
  }
})

type GetReportByIdResponse = Report & {
  contact?: Contact
  imageIds: string[]
}
router.get<{ id: string }, any, never>('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const report = await req.context.db.models.Report.findByPk<ReportModel>(id)
    if (!report) {
      res.status(400).json({
        success: false,
        error: 'Запит на неіснуюче оголошення'
      })
      return
    }
    
    const contact = await req.context.db.models.Contact.findOne<ContactModel>({
      where: {
        reportId: report.id
      }
    })
    const images = await req.context.db.models.Image.findAll<ImageModel>({
      where: {
        reportId: report.id
      }
    })
    
    const { type, petType, city, sex, color, date, description } = report
    const response: GetReportByIdResponse = {
      type,
      petType,
      city,
      sex,
      color,
      date,
      description,
      imageIds: images.map(({ id }) => String(id))
    }
    if (contact) {
      const { name, email, phone, telegram, facebook, viber } = contact
      response.contact = { name, email, phone, telegram, facebook, viber }
    } else {
      req.context.logger.error('Контактних даних для оголошення не знайдено')
    }

    res.status(200).json({
      success: true,
      report: response
    })
  } catch (e) {
    req.context.logger.error(e)
    res.status(500).json({
      success: false,
      error: DEFAULT_ERROR_MESSAGE
    })
  }
})

type PostReportRequestBody = Partial<Report> & {
  contact: Partial<Contact>
}
router.post<never, any, PostReportRequestBody>('/', verifyTokenAndInjectUser, async (req, res) => {
  try {
    const { contact, ...reportWithoutContact } = req.body
    const { id: reportId } = await req.context.db.models.Report.create<ReportModel>({
      ...reportWithoutContact,
      userId: req.context.user!.id
    }, {
      include: [
        {
          association: ReportModel.associations.User
        }
      ]
    })
    
    await req.context.db.models.Contact.create<ContactModel>({
      ...contact,
      reportId
    }, {
      include: [
        {
          association: ContactModel.associations.Report
        }
      ]
    })
    
    res.status(201).json({
      success: true,
      report: {
        id: reportId
      }
    })
  } catch (e) {
    req.context.logger.error(e)
    res.status(500).json({
      success: false,
      error: DEFAULT_ERROR_MESSAGE
    })
  }
})
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEzODc3MTQ4LCJleHAiOjE2MTM5NjM1NDh9.s4gDyHlKd7dKDPAoIkRne3-quqpZCJBpSDoDFrbS3Cs
router.delete<{ id: string }, any, never>('/:id', verifyTokenAndInjectUser, async (req, res) => {
  // try {
  //   const { id } = req.params
  //   const { id: reportId } = await req.context.db.models.Report.create<ReportModel>({
  //     ...reportWithoutContact,
  //     userId: req.context.user!.id
  //   })
  //   res.status(204).json({
  //     success: true,
  //     report: {
  //       id: reportId
  //     }
  //   })
  // } catch (e) {
  //   req.context.logger.error(e)
  //   res.status(500).json({
  //     success: false,
  //     error: DEFAULT_ERROR_MESSAGE
  //   })
  // }
})

export { router }
