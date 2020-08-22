interface PersonWow {
  type: "wow";
  runSpeed: number;
}

interface Car {
  type: "car";
  moveSpeed: number;
}

type MovingItem = Car | PersonWow;

function printSpeed(item: MovingItem) {
  let speed: number;
  switch (item.type) {
    case "car": {
      speed = item.moveSpeed;
      break;
    }
    case "wow": {
      speed = item.runSpeed;
      break;
    }
    default:
      {
        speed = 0;
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
printSpeed({ type: "car", moveSpeed: 10, name: "ok" });
printSpeed({
  type: "wow",
  runSpeed: 30,
});

// Input Element (type casting)
const inputA = document.getElementById('example-a')! as HTMLInputElement
const inputB = <HTMLInputElement>document.getElementById('example-b')!
inputA.value = 'good'
inputB.value = 'job'
