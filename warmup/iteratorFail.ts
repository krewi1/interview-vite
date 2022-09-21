// What is it printing and why?

function iteratorFail() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

(() => {
  iteratorFail();
})();
