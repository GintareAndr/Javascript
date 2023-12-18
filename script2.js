/* ------------------------------ TASK 5 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

let car = {
  make: "audi",
  model: "A6",
  yers: "2005",
  color: "white",
  
  displayInfo: function () {
    console.log(
      'Make: ${'this.make'}, Model: ${'this.model'}, Yers: ${'this.yers'}, Color: $ {'this.color'}'
    );
  },
};

car.displayInfo();
