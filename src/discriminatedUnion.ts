interface Person {
  type: "person";
  runSpeed: number;
}

interface Car {
  type: "car";
  moveSpeed: number;
}

type MovingItem = Car | Person;

function printSpeed(item: MovingItem) {
  let speed: number;
  switch (item.type) {
    case "car": {
      speed = item.moveSpeed;
      break;
    }
    case "person": {
      speed = item.runSpeed;
      break;
    }
    default: {
      speed = 0
    }
    console.log(speed);
  }
}

const aCar: Car = {
  name: "ok",
  moveSpeed: 33,
  type: "car",
};

printSpeed(aCar);
