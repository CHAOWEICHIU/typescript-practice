import casual from 'casual'

casual.define('good', () => {
  return ({
    uuid: casual.uuid,
  })
})

// const good1 = (casual as { good: any } extends Casual).good
// const good2 = (casual as any).good

// console.log(good1)
// console.log(good2)
