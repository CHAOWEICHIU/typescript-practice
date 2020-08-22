type Combinable = number | string

function add(a: string, b:string): string;
function add(a: number, b:number): number;
function add(a:Combinable, b: Combinable) {
  if(a === 'number' && b === 'number') {
    return +a + +b
  }
  return a.toString() + b.toString()
}

const result = add(1, 1)
const resultB = add('1', '1')
resultB.split(' ')
