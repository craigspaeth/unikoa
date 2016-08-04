# unikoa

**NOTE: This is a WIP and not production ready yet**

Universal router that delegates to Koa Router and Page.js

## Example

Create a unikoa router with middleware that would make sense on the server and client...

````javascript
const unikoa = require('unikoa')
const fetch = require('universal-fetch')

const router = module.exports = unikoa()

router.get('/', (ctx) => ctx.redirect('/article/foo'))
router.get('/article/:id', async (ctx, next) => {
  const res = await fetch('http://writer.artsy.net/api/articles/the-art-genome-project-what-is-kawaii')
  ctx.state.article = await res.json()
  next()
})
````

then mount that `router` on the server...

````javascript
const app = new require('koa')()
const router = require('./router')

router.get('/article/:id', async (ctx) => {
  ctx.body = `ctx.state.article.title`
})

app.use(router.routes())
````

and initialize it on the client.

````javascript
const router = require('./router')

router.get('/article/:id', async (ctx) => {
  document.body.innerHtml = ctx.state.article.title
})

router.routes()
````

## Contributing

Please fork the project and submit a pull request with tests. Install node modules `npm install` and run tests with `npm test`.

## License

MIT