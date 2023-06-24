class Person {
  constructor(name, email, count = 0) {
    this.name = name;
    this.email = email;
    this.count = count;
  }

  login() {
    console.log(this.name, "has logged in");
  }

  logout() {
    console.log(this.name, "has logged out");
  }
}

// objects
let person1 = new Person("John", "john@wick.me");
console.log(person1);

let rollNo = new Number(10);
console.log(typeof rollNo);
console.log(typeof 10);
