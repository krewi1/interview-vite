// This is a bit tricky focus on scoping
// What is it printing and why?

export function iteratorFail() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
