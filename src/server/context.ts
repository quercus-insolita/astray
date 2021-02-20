import { Sequelize } from 'sequelize'
import { initSequelize, Db, initDb } from './db'
import { AuthService } from './services/AuthService'

export type AppContext = {
    db: Db
    authService: AuthService
}

export const createAppContext = async (): Promise<AppContext> => {
    const sequelize = await initSequelize()
    const db = initDb(sequelize)
    const authService = new AuthService(db)

    return {
        db, 
        authService,
    }
}