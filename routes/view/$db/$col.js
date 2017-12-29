module.exports = ({ render }) => {
  return {
    get: async ctx => {
      let data = await ctx.mongo.db(ctx.params.db).collection(ctx.params.col).find().toArray()
      return render('listDocuments', {
        db: ctx.params.db,
        col: ctx.params.col,
        documents: data
      })
    }
  }
}