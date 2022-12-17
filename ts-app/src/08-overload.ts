// Nico => [N, i, c, o] => string => string[]
// [N, i, c, o] => Nico => string[] => string

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); //Aquí se retorna un string
  } else {
    return input.split('') //Aquí retorna un string[]
  }
}

const rtaArray = parseStr('Juan');
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray ' + 'Juan => ' + rtaArray);


const rtaStr = parseStr(['J', 'u', 'a', 'n']);
if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}
console.log('rtaStr ' + "['J', 'u', 'a', 'n'] => " + rtaStr);

