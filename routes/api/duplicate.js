const ObjectID = require('mongodb').ObjectID

module.exports = ({ json }) => {
  return {
    async get(ctx) {
      switch (ctx.query.type) {
        case 'document':
          try {
            let doc = await ctx.mongo.db(ctx.query.db).collection(ctx.query.col).findOne({ _id: new ObjectID(ctx.query.doc) })
            delete doc._id
            await ctx.mongo.db(ctx.query.db).collection(ctx.query.col).insertOne(doc)
            return json({ error: false })
          } catch (e) {
            console.error(e)
            return json({ error: true })
          }
      }
    }
  }
}