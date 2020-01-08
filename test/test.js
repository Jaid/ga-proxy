import coffee from "coffee"
import ms from "ms.macro"
import path from "path"

const main = path.resolve(process.env.MAIN)

it("should run", () => coffee.fork(main, ["--version"])
  .expect("code", 0)
  .debug(true)
  .end(), ms`30 seconds`)