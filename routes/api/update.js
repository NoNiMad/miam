const ObjectID = require('mongodb').ObjectID

module.exports = ({ json }) => {
  return {
    async post(ctx) {
      switch (ctx.data.type) {
      case 'collection':
        try {
          await ctx.mongo.db(ctx.data.db).renameCollection(ctx.data.col, ctx.data.newCol)
          return json({ error: false })
        } catch (e) {
          console.error(e)
          return json({ error: true })
        }
      case 'document':
        try {
          delete ctx.data.doc._id
          await ctx.mongo.db(ctx.data.db).collection(ctx.data.col).replaceOne({ _id: new ObjectID(ctx.data.id) }, ctx.data.doc)
          return json({ error: false })
        } catch (e) {
          console.error(e)
          return json({ error: true })
        }
      }
    }
  }
}