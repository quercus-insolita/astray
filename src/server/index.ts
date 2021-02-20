import { createExpressApp } from './express'
import { APP_PORT } from './common/constants'
import { logger } from './common/logger'

const app = createExpressApp()

app.listen(APP_PORT, () => {
    logger.info(`Server is listening on ${APP_PORT}`)
})