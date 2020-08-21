class Item {
  constructor(private name: string) {}
  getName(this: Item) {
    console.log(this.name);
  }
}

const beef = new Item("ok");
console.log(beef);
