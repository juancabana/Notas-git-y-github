export enum ROLES {
  ADMIN =  'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}


export type User = {
  username: string;
  role: ROLES
}

const juanUser: User = {
  username: 'juanCa',
  role: ROLES.ADMIN

}

console.log(juanUser)
