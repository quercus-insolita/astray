import { Sequelize } from 'sequelize'
import { RESET_DB, CONNECTION_STRING } from '../db'

export const initSequelize = async () => {
  if (!CONNECTION_STRING) {
    throw new Error('Failed to init Sequelize instance: no connection string in process.env.DATABASE_URL found')
  }

  const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    logging: false,
  })
  await sequelize.sync({
    force: RESET_DB
  })

  return sequelize
}
