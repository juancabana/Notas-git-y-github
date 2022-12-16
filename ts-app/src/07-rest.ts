import { User, ROLES } from './01-enum';
// Como dar flexibilidad a una función si quiero enviar cualquier cantidad de parámetros (Como en javascript)?

const currentUser: User = {
  username: 'JuanCabana',
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  } else {
    return false;
  }
};

export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2) {
    return true;
  }
  return false;
};

export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }

  return false;
};

export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }

  return false;
};

const rta = checkAdminRole();
console.log('CheckAdminRole', rta);

const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('CheckRole', rta2);

const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log('CheckRoleV2', rta3);

const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log('CheckRoleV3', rta4);
