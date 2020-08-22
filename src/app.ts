class Car {
  constructor(public name: string){}
}

class Truck {
  constructor(public name: string){}

  load() {

  }
}

type Vehicle = Car | Truck

const carA = new Car('Toyota')
const carB = new Car('Ford')

function printCar(car:Vehicle) {
  if(car instanceof Truck) {
    car.load()
  }
}

printCar(carA)
