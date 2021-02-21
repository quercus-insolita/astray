import express from 'express'
import cors from 'cors'
import { parse } from 'qs'
import * as path from 'path'
import { router as apiRouter } from './routers/api'
import { createAppContext } from './context'
import { createLogger } from './common/logger'

const staticDirPath = path.join(__dirname, 'static')

export const createExpressApp = () => {
  const logger = createLogger({
      tenantId: 'express app'
  })

  const app = express()
  app.set('query parser', (queryString: string) => parse(queryString, {
    comma: true
  }))
  app.use((req, _res, next) => {
      logger.info('received request', { url: req.originalUrl })
      next()
  })

  app.use(cors())
  app.use(express.json())
  app.use(express.static(staticDirPath))

  app.use((req, _res, next) => {
    createAppContext()
      .then(appContext => {
        Object.assign(req, appContext)
      })
      .then(next)
  })

  const externalEndpointsRegex = /^\/(?!_)/ // all routes that start from _ are reserved for internal usage
  app.get(externalEndpointsRegex, (_req, res) => {
    res.status(200).sendFile('index.html', { root: staticDirPath })
  })

  app.use('/_api', apiRouter)

  return app
}
