type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  createdAt: Date;
}

type UnknownPerson = Admin | Employee

function printPerson(person:UnknownPerson) {
  const {
    name
  } = person
  console.log(name)
  if('privileges' in person) {
    console.log(person.privileges)
  }
  
  if('createdAt' in person) {
    console.log(person.createdAt)
  }
}
