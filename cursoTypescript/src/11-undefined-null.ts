(() => {
  // let myNumber: number = undefined;
  // let myString: string = null;

  let myNull: null = null;
  let myUndefined: undefined = undefined;
  myNull = null;

  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'Este es mi string';


  function hi(name: string | null) {
    let hello: string = 'Hola ';
    if (name) {
      hello += name;
    } else {
      hello += 'nobody';
    }
    console.log(hello)
  }


  function hiV2(name: string | null) {
    let hello: string = 'Hola ';
   hello += name?.toUpperCase() || 'nobody';

   console.log(hello)
  }


  hi('Nicolas');
  hi(null);

  hiV2('Nicolas');
  hiV2(null);





})();
