import { Request, Response } from 'express';
import loginService from '../services/loginService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;

  const result = await loginService.verifyLogin(username, password);

  if (result.status !== 'SUCCESS') {    
    return res
      .status(mapStatusHTTP(result.status)).json(result.data);
  }

  return res.status(mapStatusHTTP(result.status)).json({ token: result.data });
}

export default {
  login,
};