# Iron Maiden


<a href="https://raw.githubusercontent.com/jaid/ga-proxy/master/license.txt"><img src="https://img.shields.io/github/license/jaid/ga-proxy?style=flat-square" alt="License"/></a> <a href="https://github.com/sponsors/jaid"><img src="https://img.shields.io/badge/<3-Sponsor-FF45F1?style=flat-square" alt="Sponsor ga-proxy"/></a>
<a href="https://actions-badge.atrox.dev/jaid/ga-proxy/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2Fjaid%2Fga-proxy%2Fbadge" alt="Build status"/></a> <a href="https://github.com/jaid/ga-proxy/commits"><img src="https://img.shields.io/github/commits-since/jaid/ga-proxy/v1.0.0?style=flat-square&logo=github" alt="Commits since v1.0.0"/></a> <a href="https://github.com/jaid/ga-proxy/commits"><img src="https://img.shields.io/github/last-commit/jaid/ga-proxy?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/jaid/ga-proxy/issues"><img src="https://img.shields.io/github/issues/jaid/ga-proxy?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/ga-proxy"><img src="https://img.shields.io/npm/v/ga-proxy?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/jaid/ga-proxy/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/ga-proxy?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/ga-proxy"><img src="https://img.shields.io/npm/dm/ga-proxy?style=flat-square&logo=npm" alt="Downloads"/></a>

**CLI app that forwards requests to google-analytics.com to avoid tracking blockers.**















## Installation
<a href="https://npmjs.com/package/ga-proxy"><img src="https://img.shields.io/badge/npm-ga--proxy-C23039?style=flat-square&logo=npm" alt="ga-proxy on npm"/></a>
```bash
npm install --global ga-proxy@^1.0.0
```
<a href="https://yarnpkg.com/package/ga-proxy"><img src="https://img.shields.io/badge/Yarn-ga--proxy-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="ga-proxy on Yarn"/></a>
```bash
yarn global add ga-proxy@^1.0.0
```



## CLI Usage
After installing package `ga-proxy` globally, you can use its command line interface.
```bash
ga-proxy --port 8000
```
For usage instructions:
```bash
ga-proxy --help
```




## Development



Setting up:
```bash
git clone git@github.com:jaid/ga-proxy.git
cd ga-proxy
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
```text
MIT License

Copyright © 2020, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
