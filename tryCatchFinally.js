"use strict";

const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Houston! We have a problem!");
      resolve({
        name: "Dawid",
      });
    }, 800);
  });
};

// const noAsyncUser = () => {
//   throw "User not found";
//   return {
//     name: "Paul",
//   };
// };

// Better:
const noAsyncUser = () => {
  //   const user = Paul;
  const user = null;

  if (user) {
    return user;
  } else {
    throw "User not found";
  }
};

// Promise ver

// getUser().then((user) => console.log(user));

// Async/Await ver

const someAsyncFun = async () => {
  try {
    const user = await getUser();
    console.log(user);
  } catch (err) {
    console.log("Error: ", err);
  } finally {
    console.log("Finally text in Dawid func");
  }
  console.log("end text even if was problem in block");
};

someAsyncFun();

// Now I try with no async function to prove the try/catch is created not only for async functions
const someAsyncFun2 = async () => {
  try {
    // const user = noAsyncUser();
    console.log(user);
  } catch (err) {
    console.log("Error: ", err);
    console.log("Error message: ", err.message);
    console.log("Error name: ", err.name);
  } finally {
    console.log("Finally text in Paul func");
  }
  console.log("end text even if was problem in block");
};

someAsyncFun2();
