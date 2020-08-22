interface Lengthy {
  length: number;
}

function countElements<T extends Lengthy>(elements:T): [T, string] {
  let description = 'No Element'
  if(elements.length === 1) {
    description = 'got 1 element.'
  } else if(elements.length > 1) {
    description = 'got elements.'
  }


  return [elements, description]
}

console.log(countElements(['good']))
console.log(countElements([]))
console.log(countElements(['good', 'good']))


function extractValue<T extends object, U extends keyof T>(key:T, value: U) {

  return `Value: ${key[value]}`
  
}

// extractValue({}, 'good') // won't let us to compile because the key of 'good' is not in the type of object that is passing in
extractValue({good: 'job'}, 'good')
