// What is it printing out and why?

function timeout() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  Promise.resolve().then(() => console.log(4));
  console.log(5);
}

(() => {
  timeout();
})();
