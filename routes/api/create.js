module.exports = ({ json }) => {
  return {
    async post(ctx) {
      switch (ctx.data.type) {
        case 'collection':
          try {
            await ctx.mongo.db(ctx.data.db).createCollection(ctx.data.col)
            return json({ error: false })
          } catch (e) {
            return json({ error: true })
          }
        case 'document':
          try {
            if (Array.isArray(ctx.data.doc))
              await ctx.mongo.db(ctx.data.db).collection(ctx.data.col).insertMany(ctx.data.doc)
            else
              await ctx.mongo.db(ctx.data.db).collection(ctx.data.col).insertOne(ctx.data.doc)
            return json({ error: false })
          } catch (e) {
            console.error(e)
            return json({ error: true })
          }
      }
    }
  }
}