// Objects
const object1 = {
  // properties
  name: "Aryan",
  age: 19,
  // methods
  prajati() {
    console.log("insaan");
  },
};
// can also declare outside
object1.legnum = function () {
  console.log("aryan have two legs");
};
// can change the value cause object recreate it by cause its of dynamic nature
object1.name = "summer";

// FACTORY Function
function factoryFunction(name) {
  return {
    name: name,
  };
}
const ff = factoryFunction("drago");

// CONSTRUCTOR function
function ConstructorFuncion(name) {
  this.name = name;
}
const cf = new ConstructorFuncion("pigeon");

// delete keyword
delete object1;
delete factoryFunction();

// pass by reference
let object2 = object1;

// pass by value
let object3 = { ...object1 };

// calculating discount
function Products(name, rate, disc, code) {
  this.itemName = name;
  this.price = rate;
  this.discount = disc;
  this.itemCode = code;
  this.finalPrice = function () {
    return rate - disc;
  };
}
