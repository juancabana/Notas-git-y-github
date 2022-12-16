( () => {
  type UserID = string | number | boolean
  let userId: UserID;


  //literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';


  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`String ${userId.toUpperCase()}`);
    }
  }

  greeting(1033, 'XL')
  greeting('1754', 'S')
})()
