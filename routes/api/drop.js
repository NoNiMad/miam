const ObjectID = require('mongodb').ObjectID

module.exports = ({ json }) => {
  return {
    async get(ctx) {
      switch (ctx.query.type) {
      case 'database':
        try {
          await ctx.mongo.db(ctx.query.db).dropDatabase()
          return json({ error: false })
        } catch (e) {
          console.error(e)
          return json({ error: true })
        }
      case 'collection':
        try {
          await ctx.mongo.db(ctx.query.db).dropCollection(ctx.query.col)
          return json({ error: false })
        } catch (e) {
          console.error(e)
          return json({ error: true })
        }
      case 'document':
        try {
          await ctx.mongo.db(ctx.query.db).collection(ctx.query.col).deleteOne({ _id: new ObjectID(ctx.query.doc) })
          return json({ error: false })
        } catch (e) {
          console.error(e)
          return json({ error: true })
        }
      }
    }
  }
}