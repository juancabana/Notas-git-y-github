const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!!");
    } else {
      reject("Ahghg");
    }
  });
};

anotherFunction()
  .then((response) => console.log(response))
  .catch((reject) => console.log(reject));

  