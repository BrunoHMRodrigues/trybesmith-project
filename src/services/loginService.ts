import bcrypt from 'bcryptjs';
import jwtUtil from '../utils/jwtUtils';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/serviceResponse';

async function verifyLogin(username: string, password: string): Promise<ServiceResponse<string>> {
  const host = await UserModel.findOne({ where: { username } });
  
  if (!host || !bcrypt.compareSync(password, host.dataValues.password)) {
    return { status: 'INVALID', data: { message: 'Username or password invalid' } };
  }
    
  const token = jwtUtil
    .sign({ password: host.dataValues.password, username: host.dataValues.username });
  
  return { status: 'SUCCESS', data: token };
}

export default {
  verifyLogin,
};