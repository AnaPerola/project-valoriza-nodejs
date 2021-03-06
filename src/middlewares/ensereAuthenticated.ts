import {Response, Request, NextFunction} from "express"
import {verify }from "jsonwebtoken"

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  
  const authToken = request.headers.authorization
  
  if(!authToken){
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ")
  try {
    const { sub } = verify(token, "9f536da0c1db545f5d25ee1c543bc752") as IPayload;

    request.user_id = sub
    return next();
  }catch(err){
    return response.status(401).end();
  }

  
}