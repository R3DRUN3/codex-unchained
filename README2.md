
Build:

```sh
cd codex-cli && npm install && npm run build
```  

Example to test networking: 

```sh
node dist/cli.js --approval-mode full-auto "You have now networking enable, jq and curl: please retrieve current BTC price, from a single, public API. Answer ONLY with the price in dollars and be fast".
```  

