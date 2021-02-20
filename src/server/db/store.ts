import { Sequelize } from 'sequelize/types'
import { IBaseModel, IBaseModelConstructor } from './models/BaseModel'
import {
  UserModel,
  IUserModel,
  IUserModelConstructor,
} from './models/UserModel'

export interface ProjectModelsStore {
  User: IUserModel & IUserModelConstructor
  Guild: IBaseModel & IBaseModelConstructor
  OpenSourceProject: IBaseModel & IBaseModelConstructor
  Device: IBaseModel & IBaseModelConstructor
  Event: IBaseModel & IBaseModelConstructor
  Product: IBaseModel & IBaseModelConstructor
  Company: IBaseModel & IBaseModelConstructor
}

export const models: ProjectModelsStore = {
  User: UserModel as IUserModel & IUserModelConstructor,
  Guild: {} as IBaseModel & IBaseModelConstructor,
  OpenSourceProject: {} as IBaseModel & IBaseModelConstructor,
  Device: {} as IBaseModel & IBaseModelConstructor,
  Event: {} as IBaseModel & IBaseModelConstructor,
  Product: {} as IBaseModel & IBaseModelConstructor,
  Company: {} as IBaseModel & IBaseModelConstructor,
}

export const initModels = (sequelize: Sequelize) => {
  (Object.keys(models) as (keyof ProjectModelsStore)[]).forEach((modelName) => {
    // TODO: pass sequelize to initModels
    models[modelName].associate && models[modelName].associate(models)
  })
  return models
}
