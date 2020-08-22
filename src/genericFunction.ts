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

const [els, des] = countElements('goodjob')
// console.log(els + des)
