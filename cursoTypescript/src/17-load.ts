import _ from 'lodash';

const data = [
  {
    username: 'juanca',
    role: 'admin'
  },
  {
    username: 'vale',
    role: 'seller'
  },
  {
    username: 'zulema',
    role: 'seller'
  },
  {
    username: 'dani',
    role: 'customer'
  }
]

const rta = _.groupBy(data, (item) => item.role)
console.log(rta);
const rtfa = 1 + '1'
