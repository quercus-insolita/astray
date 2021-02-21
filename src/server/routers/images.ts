import express from 'express'
import multer from 'multer'
import AWS from 'aws-sdk'
import { DEFAULT_ERROR_MESSAGE } from '../common/constants'
import { Report, ReportType, Contact, Image } from '../common/domain'
import { ContactModel, ImageModel, ReportModel } from '../db'
import { createLogger, logger } from '../common/logger'

const storage = multer.memoryStorage()
const upload = multer({ storage })

const router = express.Router()
router.use((req, _res, next) => {
  req.context.logger = createLogger({ tenantId: 'images router' })
  next()
})

router.get<{ id: string }, any, any>('/:id', async (req, res) => {
  const imageId = Number(req.params.id)
  const imageEntity = await req.context.db.models.Image.findOne<ImageModel>({
    where: {
      id: imageId
    }
  })
  if (!imageEntity) {
    res.status(400).send({
      success: false,
      error: 'Запит на неіснуючу картинку'
    })
    return
  }

  const s3bucket = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
  })

  const gettingParams: AWS.S3.Types.GetObjectRequest = {
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: imageEntity.url,
  }
  s3bucket.getObject(gettingParams).createReadStream().pipe(res)
})

router.post<never, any, any>('/', upload.array('images'), async (req, res) => {
  const uploadedImage = req.file

  try {
    const imageEntity = await req.context.db.models.Image.create<ImageModel>()
    const s3bucket = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION
    })

    const uplodingParams: AWS.S3.Types.PutObjectRequest = {
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: `images/${imageEntity.id}`,
      Body: uploadedImage.buffer,
      ContentType: uploadedImage.mimetype,
      ACL: 'public-read'
    }
    const { Key } = await s3bucket.upload(uplodingParams).promise()
    await req.context.db.models.Image.update<ImageModel>({
      url: Key
    }, {
      where: {
        id: imageEntity.id
      }
    })

    res.sendStatus(201)
  } catch (e) {
    console.error(e)
    req.context.logger.error(e)
    res.status(500).json({
      success: false,
      error: DEFAULT_ERROR_MESSAGE
    })
  }
})

export { router }
