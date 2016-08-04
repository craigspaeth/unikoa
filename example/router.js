const unikoa = require('../')
const request = require('superagent')

const API_URL = 'http://writer.artsy.net/api'
const router = module.exports = unikoa()

router.get('/article/:id', async (ctx, next) => {
  const res = await request.get(`${API_URL}/articles/${ctx.params.id}`)
  ctx.article = res.body
  await next()
})
