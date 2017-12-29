module.exports = ({ render }) => {
  return {
    get(ctx) {
      return render('newDocument', {
        db: ctx.params.db,
        col: ctx.params.col
      })
    }
  }
}