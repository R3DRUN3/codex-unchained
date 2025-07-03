# Codex Unchained 😈 🔓

[![Node Release](https://github.com/R3DRUN3/codex-unchained/actions/workflows/node-release.yml/badge.svg)](https://github.com/R3DRUN3/codex-unchained/actions/workflows/node-release.yml)  

## Abstract
This tool is a modified version of [*OpenAI Codex Assistant*](https://github.com/openai/codex), with the sandboxing features removed.  
As a result this AI agent is fully unchained: complete access to the host filesystem, networking etc.  
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
https://github.com/R3DRUN3/codex-unchained/releases/download/v0.4.0/codex-unchained
```  

make release binary executable and run:  
```sh
chmod +x codex-unchained && ./codex-unchained --help
```  

## Use cases

As an agentic AI assistant, codex-unchained can be leveraged for a variety of purposes.  
Primarily, it serves as a platform for experimenting with AI-driven automation (strictly with caution and exclusively within controlled test environments).  

For red team operators 🔴👾 it can also be utilized to prototype and test new automated attack workflows, including but not limited to:  

- Automated Post-Exploitation Operations

- Adaptive Command and Control (C2) Communication

- Automated Vulnerability Exploitation

- Intelligent Data Exfiltration

- Environment-Specific Payload Generation

- Simulation of Advanced Threat Actors

The following video demonstrates a practical example of how this agent can be employed to automate data exfiltration from a compromised server:  


https://github.com/user-attachments/assets/ef6de241-dffa-4dfc-8138-66119fae9c29  


The following video demonstrates a pratical examples of how this agent can be used to retrieve current BTC price from multiple public APIs:  


https://github.com/user-attachments/assets/6e17ff32-882d-4a34-8786-7c1a1c1a9ce3








