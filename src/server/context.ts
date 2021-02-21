import { Request } from 'express'
import { createLogger, Logger } from './common/logger'
import { Db, initDb, sequelize, UserModel } from './db'
import { AuthService } from './services/AuthService'

export type AppContext = {
    db: Db
    authService: AuthService
    logger: Logger
    user?: UserModel
}

export const createAppContext = async (req: Request): Promise<AppContext> => {
    await sequelize.sync()
    const db = initDb()
    const authService = new AuthService(db)
    const logger = createLogger({ tenantId: 'express app' })

    return {
        logger,
        db, 
        authService,
    }
}