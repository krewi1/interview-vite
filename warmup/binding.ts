// What is it printing out and why?
// What is the fix?

class Hero {
  private _name: string;
  constructor() {
    this._name = "John Doe";
  }

  getSecretIdentity() {
    return this._name;
  }

  getLambdaSecretIdentity = () => {
    return this._name;
  };
}

(() => {
  const hero = new Hero();

  const stoleSecretIdentity = hero.getSecretIdentity.bind(hero);
  const stoleLambdaSecretIdentity = hero.getLambdaSecretIdentity;
  console.log(stoleSecretIdentity());
  console.log(hero.getSecretIdentity());
  console.log(stoleLambdaSecretIdentity());
})();
