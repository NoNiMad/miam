module.exports = ({ render }) => {
  return {
    get: async ctx => {
      let result = await ctx.mongo.db('admin').command({ 'listDatabases': 1 })
      return render('listDatabases', { databases: result.databases });
    }
  }
}