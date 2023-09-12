const fs = require('fs');
import { IMiddlewareUser } from "../types/types";

export const loadUserData = (): Record<string, IMiddlewareUser> => {
  if (fs.existsSync('user_data.json')) {
    return JSON.parse(fs.readFileSync('user_data.json', 'utf8'));
  }
  return {};
};