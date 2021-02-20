import { Sequelize } from 'sequelize/types'
import { IContactModelConstructor, ContactModel } from './models/ContactModel'
import { IReportModelConstructor, ReportModel } from './models/ReportModel'
import { UserModel, IUserModelConstructor } from './models/UserModel'
import { ImageModel, IImageModelConstructor } from './models/ImageModel'

export interface ProjectModelsStore {
  User: IUserModelConstructor
  Report: IReportModelConstructor
  Contact: IContactModelConstructor
  Image: IImageModelConstructor
}

export const models: ProjectModelsStore = {
  User: UserModel,
  Report: ReportModel,
  Contact: ContactModel,
  Image: ImageModel,
}

export const initModels = (sequelize: Sequelize) => {
  (Object.keys(models) as (keyof ProjectModelsStore)[]).forEach((modelName) => {
    const { initModel, associate } = models[modelName]
    initModel(sequelize)
    associate?.(models)
  })
  return models
}
