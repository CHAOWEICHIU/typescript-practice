function merge<T, U>(a: T, b: U) {
  return Object.assign(a, b);
}

const objA = merge({ good: "job" }, { how: "are you" });
objA.good;
objA.how;

interface Ball {
  name: string;
}
interface Price {
  amount: number;
}

const objB = merge<Ball, Price>({ name: "ok" }, { amount: 3 });
objB.amount;
objB.name;
