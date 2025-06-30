# Codex Unchained 😈


## Abstract
This tool is a modified version of [*OpenAI Codex Assistant*](https://github.com/openai/codex), with the sandboxing features removed.  
As a result this AI agent is fully unchained: complete access to the host filesyste, networking etc.  
This can be used for a wide range of automation and also leveraged for offensive security tasks.  

> [!CAUTION]
> This tool is capable of fully automating actions on the host machine and has network access. Use with extreme caution.  
> This fork is intended for educational and research purposes only.  
> The author assumes no responsibility for any misuse, including potential weaponization or illegal activities involving the tool. 



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
https://github.com/R3DRUN3/codex-unchained/releases/download/v0.3.1/codex-unchained
```  

make release binary executable and run:  
```sh
chmod +x codex-unchained && ./codex-unchained --help
```  


