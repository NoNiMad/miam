let sortFunction = (a, b) => {
  let nameA = a.name.toUpperCase()
  let nameB = b.name.toUpperCase()
  
  if (nameA < nameB)
    return -1

  if (nameA > nameB)
    return 1

  return 0
}

module.exports = ({ render }) => {
  return {
    get: async ctx => {
      let collections = await ctx.mongo.db(ctx.params.db).listCollections().toArray()
      return render('listCollections', {
        db: ctx.params.db,
        collections: collections.sort(sortFunction)
      })
    }
  }
}