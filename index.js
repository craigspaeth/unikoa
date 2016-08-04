const koaRouter = require('koa-router')
const page = require('page')

module.exports = () => {
  // Server-side, just return an instance of Koa Router
  if (typeof window === 'undefined') return koaRouter()

  // Client-side, mimic Koa + Koa Rotuer API using Page.js
  const router = {
    get: (...args) => page(...args),
    use: (...args) => page(...args),
    routes: () => page()
  }

  // Bridge some things from Koa
  page((ctx, next) => {
    ctx.redirect = page.redirect
    ctx.url = window.location.pathname + window.location.search
    next()
  })
  return router
}
