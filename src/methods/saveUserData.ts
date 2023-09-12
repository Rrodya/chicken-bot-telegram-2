const fs = require('fs');
import { IMiddlewareUser } from "../types/types";

export const saveUserData = (data: Record<string, IMiddlewareUser>): void => {
  fs.writeFileSync('user_data.json', JSON.stringify(data, null, 2));
};