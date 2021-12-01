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
}

export function binding() {
  var hero = new Hero();

  var stoleSecretIdentity = hero.getSecretIdentity;
  console.log(stoleSecretIdentity());
  console.log(hero.getSecretIdentity());
}
