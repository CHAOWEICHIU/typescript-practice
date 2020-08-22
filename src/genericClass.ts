class DataStorage<T> {
  private items: T[] = [];

  getItems() {
    return [...this.items];
  }
  addItem(item: T) {
    this.items.push(item);
  }
  removeItem(item: T) {
    if (this.items.indexOf(item) === -1) {
      return;
    }
    this.items.splice(this.items.indexOf(item), 1);
  }
}

const textDataStorage = new DataStorage<string>();
textDataStorage.addItem("ok");
textDataStorage.addItem("good");
textDataStorage.getItems(); // ['ok', 'good']

const numberAndTextDataStorage = new DataStorage<number | string>();
numberAndTextDataStorage.addItem("ok");
numberAndTextDataStorage.addItem("good");
numberAndTextDataStorage.addItem(4);
console.log(numberAndTextDataStorage.getItems()); // ['ok', 'good', 4]

const objectDataStorage = new DataStorage<object>();
const referenceA = { good: "job" }
const referenceB = { hello: "job" }

objectDataStorage.addItem(referenceA);
objectDataStorage.addItem(referenceB);
objectDataStorage.removeItem(referenceA);
console.log(objectDataStorage.getItems());
