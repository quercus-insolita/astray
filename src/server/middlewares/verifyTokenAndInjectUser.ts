import { RequestHandler } from "express";
import { logger } from "../common/logger";
import { UserModel } from "../db";

export const verifyTokenAndInjectUser: RequestHandler = async (req, res, next) => {
  const authorizationHeader = req.header('Authorization')
  if (!authorizationHeader) {
    res.sendStatus(401)
    return
  }
  
  const [, token] = authorizationHeader.split(' ') || []
  const verificationResults = await req.context.authService.verifyToken<{ id: number }>(token)

  if (verificationResults.success) {
    logger.info('before user getting')
    const user = await req.context.db.models.User.findByPk<UserModel>(verificationResults.decodedData.id)
    logger.info('after user getting')
    req.context.user = user!
    next()
  } else {
    res.sendStatus(401)
  }
}