class Car {
  constructor(public name: string) {}
}

class Truck {
  constructor(public name: string) {}

  load() {}
}

type Vehicle = Car | Truck;

const carA = new Car("Toyota");
const carB = new Car("Ford");

function printCar(car: Vehicle) {
  if (car instanceof Truck) {
    car.load();
  }
}

printCar(carA);

const person = {
  name: "person",
  job: { title: "CEO" },
};

console.log(person?.job?.title)


const backendDataOfUndefined = undefined || 'DEFAULT'
const backendDataOfNull = null || 'DEFAULT'
const backendDataWithEmptyString = '' || 'DEFAULT'

backendDataOfUndefined      // DEFAULT
backendDataOfNull           // DEFAULT
backendDataWithEmptyString  // DEFAULT


const backendDataOfUndefinedUsingNullish = undefined ?? 'DEFAULT'
const backendDataOfNullUsingNullish = null ?? 'DEFAULT'
const backendDataWithEmptyStringUsingNullish = null ?? 'DEFAULT'

backendDataOfUndefinedUsingNullish      // DEFAULT
backendDataOfNullUsingNullish           // DEFAULT
backendDataWithEmptyStringUsingNullish  // ''


