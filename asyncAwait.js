"use strict:";

// System of rejestraction user

// 1. Get data of user
// 2. Validation data
// 3. Rejestracion of user
// 4. Sending mail

const getUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1. get user data");
      resolve({
        name: "Dawid",
      });
    }, 800);
  });
};

const registerUser = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2. register");
      resolve({ name: user.name, id: 123 });
    }, 400);
  });
};

const sendMail = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(
        "3. send confirmation mail to username: ",
        user.name,
        "with id: ",
        user.id
      );
      resolve();
    }, 500);
  });
};

// getUserData()
//   .then((userData) => {
//     return registerUser(userData);
//   })
//   .then((registerUser) => {
//     return sendMail(registerUser);
//   })
//   .then(() => console.log("End!"))
//   .catch((error) => console.log("Houston! We have problem! We have: ", error));

// I would like it looks like functions, more clearly than then(what).then(what).then(what), something like:
// getUserData();
// registerUser();
// sendMail();
// console.log("End!")
// But it goes wrong again. So I must add something, to say to JS "wait, till this will end and then do sth other":

// await getUserData();
// await registerUser();
// await sendMail();

// console.log("End!");

// Here is problem: await is only valid in async function. So I will create it!
// async function someAsyncFunction() {
//   await getUserData();
//   await registerUser();
//   await sendMail();

//   console.log("End!");
// }

// someAsyncFunction();
// console.log("render page");
// console.log("display page");

// Now catching data from previous func
async function someAsyncFunction() {
  const userData = await getUserData();
  const registeredUser = await registerUser(userData);
  await sendMail(registerUser);

  console.log("End!");
}

someAsyncFunction();
// console.log("render page");
// console.log("display page");
