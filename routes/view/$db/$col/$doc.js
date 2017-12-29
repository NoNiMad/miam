const ObjectID = require('mongodb').ObjectID

module.exports = ({ render }) => {
  return {
    async get(ctx) {
      let data = await ctx.mongo.db(ctx.params.db).collection(ctx.params.col).findOne({ _id: new ObjectID(ctx.params.doc) })
      return render('editDocument', {
        db: ctx.params.db,
        col: ctx.params.col,
        doc: data
      })
    }
  }
}