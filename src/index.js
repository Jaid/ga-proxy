import got from "got"
import Koa from "koa"
import requestIp from "request-ip"
import yargs from "yargs"

/**
 * @param {import("koa").context}
 * @param {Object} args
 * @return {Promise<void>}
 */
async function request(url, ip) {
  try {
    got.get(url, {
      headers: {
        "x-forwarded-for": ip,
      },
    })
  } catch (error) {
    console.error(error)
  }
}

const job = async args => {
  const koa = new Koa
  koa.use(context => {
    try {
      context.assert(context.querystring.length > 0, 400)
      const ip = requestIp.getClientIp(context.req)
      const url = `${args.targetUrl}?${context.querystring}&uip=${encodeURIComponent(ip)}`
      console.log(`🠺 ${url}`)
      request(url, ip)
      context.status = 200
    } catch (error) {
      console.error(error)
    }
  })
  koa.listen(args.port)
}

/**
 * @type {import("yargs").CommandBuilder}
 */
const builder = {
  port: {
    type: "number",
    default: 80,
    alias: "p",
    description: "Listening port",
  },
  targetUrl: {
    type: "string",
    default: "https://www.google-analytics.com/collect",
    alias: "t",
    description: "Target URL",
  },
}

yargs
  .scriptName(_PKG_NAME)
  .version(_PKG_VERSION)
  .command("$0", _PKG_DESCRIPTION, builder, job).argv