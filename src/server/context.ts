import { Db, initDb, sequelize } from './db'
import { AuthService } from './services/AuthService'

export type AppContext = {
    db: Db
    authService: AuthService
}

export const createAppContext = async (): Promise<AppContext> => {
    await sequelize.sync()
    const db = initDb()
    
    const authService = new AuthService(db)

    return {
        db, 
        authService,
    }
}