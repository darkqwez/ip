class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}
class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

const myCar = new Model("Tata", "Harrier");
console.log(myCar.show());
//same methd
class darshil {
  speak() {
    console.log("From t14");
  }
}

class T1 extends darshil {
  speak() {
    console.log("From T1");
  }
  pspeak() {
    super.speak();
  }
}
const zxc = new darshil();
const it = new T1();
zxc.speak();
it.speak();
it.pspeak();
