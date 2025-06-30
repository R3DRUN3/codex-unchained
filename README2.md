
## Prerequisites
OpenAI account and API key


## Instructions  

Build locally:  

```sh
cd codex-cli && npm install && npm run build
```  

Example to test networking (local build):  


```sh
node dist/cli.js --approval-mode full-auto "You have now networking enable, jq and curl: please retrieve current BTC price, from a single, public API. Answer ONLY with the price in dollars and be fast".
```  

Download from github release:  
```sh
curl -L -o codex-unchained \
https://github.com/R3DRUN3/codex-unchained/releases/download/v0.2.0/codex-unchained
```  

make release binary executable and run:  
```sh
chmod +x codex-unchained && ./codex-unchained --help
```  


