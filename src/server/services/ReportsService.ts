import { Report } from '../common/domain';
import { Loggable } from '../common/Loggable';
import { Db, ReportModel } from '../db';

type AuthenticateUserReturnType = {
  success: false
  errorMessage: string
} | {
  success: true
  report: Pick<ReportModel, 'id'>
}

type RegisterUserReturnType = AuthenticateUserReturnType

export class ReportsService extends Loggable {
  constructor(private readonly db: Db) {
    super('reports service')
  }

  async getAll() {

  }

  async getById() {
    
  }

  async create() {

  }

  async deleteById() {

  }
}