// It will always display after next function will be finished. By the way listeners are async
document.addEventListener("click", () => {
  console.log("clicked!");
});

// Synchronous function:
const printInConsole = (text, number) => {
  for (let i = number; i >= 0; i--) {
    console.log(text, i);
  }
};

//

// Calling printInConsole
// printInConsole("javascript", 20000);

// Calling printInConsole by setInterval. Two async functions are calling when clicking
setInterval(() => printInConsole("javascript", 10000), 5000);

// Callback example, promise is like callback
const arr = [1, 3, 5];

const multiply = (elem) => elem * 2;
const add = (elem) => elem + 20;
const odd = (elem) => elem - 1;

const transformArray = (arr, callback) => {
  for (i = 0; i < arr.length; i++) {
    arr[i] = callback(arr[i]);
  }
};

transformArray(arr, odd);
console.log(arr);

// Another func callback, with callback
function logA(callback) {
  setTimeout(() => {
    console.log("a");

    const someValue = "this is from a";
    callback(someValue);
  }, 3000);
}

function logB(param) {
  console.log("b");
  console.log(param);
}

logA(logB);
