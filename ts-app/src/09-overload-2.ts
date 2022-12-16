// Nico => [N, i, c, o] => string => string[]
// [N, i, c, o] => Nico => string[] => string

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;
// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); //Aquí se retorna un string
//   } else {
//     return input.split('') //Aquí retorna un string[]
//   }
// }

// Refactor
export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); //Aquí se retorna un string
  } else if (typeof input === 'string') {
    return input.split('') //Aquí retorna un string[]
  } else if (typeof input === "number") {
    return true; //Aquí se retorna un boolean
  }
}

const rtaArray = parseStr('Juan');
rtaArray.reverse();
// if (Array.isArray(rtaArray)) {
//   rtaArray.reverse();
// }
console.log('rtaArray ' + 'Juan => ' + rtaArray);


const rtaStr = parseStr(['J', 'u', 'a', 'n']);
rtaStr.toLowerCase();
// if (typeof rtaStr === 'string') {
  // rtaStr.toLowerCase();
// }
console.log('rtaStr ' + "['J', 'u', 'a', 'n'] => " + rtaStr);


const rtaBoolean = parseStr(124);
