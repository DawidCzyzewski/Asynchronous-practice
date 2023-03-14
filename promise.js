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
      resolve();
      // { name: "Dawid" }
    }, 800);
  });
};

const validateData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2. validate");
      // resolve();
      reject("Validation error!!");
    }, 900);
  });
};

const registerUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3. register");
      resolve();
    }, 400);
  });
};

const sendMail = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("4. send mail");
      resolve("Email has been sent");
    }, 200);
  });
};

getUserData()
  .then(validateData)
  .then(registerUser)
  .then(sendMail)
  .then((res) => {
    console.log(res);
    console.log("Promises finished");
  })
  .catch((error) => console.log("Houston! We have problem! We have: ", error));

// --------------------------------------Clear code abrove-----------------------------------------------------------------------------
// --------------------------------------Just uncomment whole code upper or under------------------------------------------------------
// --------------------------------------Code with comments below----------------------------------------------------------------------

// // System of rejestraction user

// // 1. Get data of user
// // 2. Validation data
// // 3. Rejestracion of user
// // 4. Sending mail

// // Firstly trying with callbacks. All the functions have got callback to be asynchronous

// // const getUserData = (callback) => {
// //   setTimeout(() => {
// //     console.log("1. get user data");
// //     callback();
// //   }, 800);
// // };

// // const validateData = (callback) => {
// //   setTimeout(() => {
// //     console.log("2. validate");
// //     callback();
// //   }, 900);
// // };

// // const registerUser = (callback) => {
// //   setTimeout(() => {
// //     console.log("3. register");
// //     callback();
// //   }, 400);
// // };

// // const sendMail = (callback) => {
// //   setTimeout(() => {
// //     console.log("4. send mail");
// //     callback();
// //   }, 200);
// // };

// // // They are not in right time
// // // getUserData();
// // // validateData();
// // // registerUser();
// // // sendMail();

// // // Repair it by callbacks. It could be callback hell if I got this more...
// // getUserData(() => {
// //   validateData(() => {
// //     registerUser(() => {
// //       sendMail(() => {
// //         console.log("end!");
// //       });
// //     });
// //   });
// // });

// // PROMISE
// // I will do it by promise:

// // new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     console.log("woring...");
// //     resolve("this is from promise");
// //   }, 2500);
// // })
// //   .then((response) => {
// //     console.log("end!");
// //     return response;
// //   })
// //   .then((response) => {
// //     console.log(response);
// //   });

// // Now I change function callback functions on new promises.

// const getUserData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("1. get user data");
//       resolve();
//       // { name: "Dawid" }
//     }, 800);
//   });
// };

// const validateData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("2. validate");
//       // resolve();
//       reject("Validation error!!");
//     }, 900);
//   });
// };

// const registerUser = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("3. register");
//       resolve();
//     }, 400);
//   });
// };

// const sendMail = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("4. send mail");
//       resolve("Email has been sent");
//     }, 200);
//   });
// };

// getUserData()
//   .then(
//     // (res) => {
//     // console.log(res);

//     // return
//     validateData
//     // }
//   )
//   .then(registerUser)
//   .then(sendMail)
//   .then((res) => {
//     console.log(res);
//     console.log("Promises finished");
//   })
//   .catch((error) => console.log("Houston! We have problem! We have: ", error));
