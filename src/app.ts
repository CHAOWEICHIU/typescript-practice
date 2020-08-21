class Item {
  constructor(private name: string) {}
  getName(this: Item) {
    console.log(this.name);
  }
}

class Person extends Item {
  constructor(private age: number, name: string) {
    super(name)
  }
  getAge(this: Person) {
    console.log(this.age);
  }
}

const wayne = new Person(10, 'wayne')
wayne.getAge()
wayne.getName()

