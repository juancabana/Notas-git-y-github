import { BaseModel } from './../base.model';

export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export interface User extends BaseModel {
  id: string | number;
  createdAt: Date;
  updateAt: Date;
  username: string;
  role: ROLES;
}
