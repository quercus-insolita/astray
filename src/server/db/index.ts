import { Sequelize } from 'sequelize'
import { ContactModel, IContactModel, IContactModelConstructor  } from './models/ContactModel'
import { IReportModel, IReportModelConstructor, ReportModel } from './models/ReportModel'
import { UserModel, IUserModel, IUserModelConstructor } from './models/UserModel'
import { ImageModel, IImageModel, IImageModelConstructor } from './models/ImageModel'

export { initSequelize } from './sequelize'
export * from './config'
export { UserModel, ContactModel, ReportModel, ImageModel }

export interface Models {
  User: IUserModel & IUserModelConstructor
  Report: IReportModel & IReportModelConstructor
  Contact: IContactModel & IContactModelConstructor
  Image: IImageModel & IImageModelConstructor
}

const models: Models = {
  User: UserModel as any,
  Report: ReportModel as any,
  Contact: ContactModel as any,
  Image: ImageModel as any,
}

export type Db = {
  models: Models
}

export const initDb = (sequelize: Sequelize): Db => {
  (Object.keys(models) as (keyof Models)[]).forEach((modelName) => {
    const { initModel, associate } = models[modelName]
    initModel(sequelize)
    associate?.(models)
  })
  return { models }
}
