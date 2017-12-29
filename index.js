require('dotenv').config()

const warf = require('../warf')
warf.loadModules()
.then(() => {
  return warf.start()
})
.then(() => {
  console.log(`[warf] Server started on port ` + warf.config.server.port)
})
.catch(console.error)