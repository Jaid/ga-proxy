import got from "got"
import Koa from "koa"
import queryString from "query-string"
import requestIp from "request-ip"
import yargs from "yargs"

const job = async argv => {
  const koa = new Koa
  koa.use(context => {
    const ip = requestIp.getClientIp(context.req)
    // Payload schema: https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters
    const analyticsPayload = {
      uip: ip,
      ...context.query,
    }
    console.log(`${ip} [${Object.keys(analyticsPayload).join(", ")}]`)
    context.assert(analyticsPayload.tid, 400, "No tid given")
    const analyticsHeader = {}
    if (context.header["User-Agent"]) {
      analyticsHeader["User-Agent"] = context.header["User-Agent"]
    }
    got.post(argv.targetUrl, {
      headers: analyticsHeader,
      body: queryString.stringify(analyticsPayload),
    }).catch(error => {
      console.error(error)
    })
    context.status = 200
  })
  koa.listen(argv.port)
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