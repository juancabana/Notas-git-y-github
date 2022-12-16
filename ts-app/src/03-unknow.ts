// ANY
// let anyVar: any;
// anyVar = true;
// anyVar = [];
// anyVar = {};
// anyVar = 28;

// let isNew: boolean = anyVar;


let anyUnknow: unknown;
// anyUnknow.toUpperCase();
anyUnknow = true;
anyUnknow = [];
anyUnknow = {};
anyUnknow = 28;


if (typeof anyUnknow === 'boolean') {

  let isNewV2: boolean = anyUnknow;
}

if(typeof anyUnknow === 'string') {
  anyUnknow.toUpperCase();
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}
