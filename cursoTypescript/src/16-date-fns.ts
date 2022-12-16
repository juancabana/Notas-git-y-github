import {subDays, format} from 'date-fns';

const date = new Date(2003, 10, 3);
const rta = subDays(date, 30);
const str = format(rta, 'yyyy/MM/dd')

console.log(str);
