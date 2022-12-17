(() => {
  let userId: number | string;
  userId = 123;
  userId = 'hunwy';
  console.log(userId);

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`${myText.toUpperCase()} es un string`);
    } else {
      console.log(`${myText} no es un string`);
    }
  }

  greeting('asa');
  greeting(2123);
})();
