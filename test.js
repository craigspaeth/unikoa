/* eslint-env mocha */
const unikoa = require('./')

describe('on the server', () => {
  it('returns a koa-router', () => {
    unikoa().constructor.name.should.equal('Router')
  })
})

describe('on the client', () => {
  beforeEach(() => {
    global.window = {}
  })

  afterEach(() => {
    delete global.window
  })

  it('mimics the koa-router API, delegating to Page.js', () => {
    unikoa().get.toString().should.containEql('page(')
  })
})
