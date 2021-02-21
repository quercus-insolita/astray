import { RequestHandler } from "express";
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
    const user = await req.context.db.models.User.findByPk<UserModel>(verificationResults.decodedData.id)
    req.context.user = user!
    next()
  } else {
    res.sendStatus(401)
  }
}