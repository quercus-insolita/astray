import { Sequelize } from 'sequelize'
import { RESET_DB } from './config'

export const initSequelize = () => {
  const connectionString = process.env.DATABASE_URL as string
  if (!connectionString) {
    throw new Error('Failed to init Sequelize instance: no connection string in process.env.DATABASE_URL found')
  }

  return new Sequelize(connectionString, {
    dialect: 'postgres',
    logging: false,
  })
}
