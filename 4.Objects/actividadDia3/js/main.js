class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    //Getter
    details() {
        return [this.name, this.age, this.country];
    }
};

const person1 = new Person("Juan",30,"Polonia");
console.log(person1.details())

const person2 = new Person("Juana",15,"Albania");
console.log(person2.details())

//_______________________________________________________-

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
    *getSides() {
      yield this.height;
      yield this.width;
      yield this.height;
      yield this.width;
    }
  }
  
  const square1 = new Rectangle(12, 10);
  
  console.log("Area:", square1.area);
  console.log([...square1.getSides()]);
  
//_______________________________________________________-
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Method to display vehicle details
  displayVehicleDetails() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  }
}

// Subclass Car that inherits from Vehicle
class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year); // Call the constructor of the super class
    this.doors = doors;
  }

  // Override the display method to include the number of doors
  displayVehicleDetails() {
    return `${super.displayVehicleDetails()}, Number of doors: ${this.doors}`;
  }
}

// Example usage:
const myCar = new Car('Toyota', 'Corolla', 2020, 4);
console.log(myCar.displayVehicleDetails()); // Make: Toyota, Model: Corolla, Year: 2020, Number of doors: 4
//_______________________________________________________-


class BankAccount {
  constructor(accountNumber) {
    this.accountNumber = accountNumber;
    this.balance = 0;
  }

  // Method to deposit money into the account
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return `Deposited $${amount}. New balance: $${this.balance}.`;
    } else {
      return "Invalid deposit amount. Please enter a positive value.";
    }
  }

  // Method to withdraw money from the account
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return `Withdrew $${amount}. Remaining balance: $${this.balance}.`;
    } else {
      return "Invalid withdrawal amount or insufficient funds.";
    }
  }
}

// Example usage:
const account1 = new BankAccount('123456789');
console.log(account1.deposit(1000)); // Deposited $1000. New balance: $1000.
console.log(account1.withdraw(300)); // Withdrew $300. Remaining balance: $700.
console.log(account1.withdraw(5000)); // Invalid withdrawal amount or insufficient funds.
//_______________________________________________________-

