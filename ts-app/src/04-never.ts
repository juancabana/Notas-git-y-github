const withoutEnd = () => {
  while (true) {
    console.log('nunca parar de aprender');
  }
}

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Es un string';
  }else if (Array.isArray(input)) {
    return 'Es un Array';
  }
  return fail('Not match');
}

console.log(example('Hola'));
console.log(example([1,3,2]));
console.log(example(3));
console.log(example('Hola después del fail'));
