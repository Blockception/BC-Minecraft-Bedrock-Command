# BC-Minecraft-Bedrock-Commands

[![Npm Test](https://github.com/Blockception/BC-Minecraft-Bedrock-Vanilla-Data/actions/workflows/npm-test.yml/badge.svg)](https://github.com/Blockception/BC-Minecraft-Bedrock-Vanilla-Data/actions/workflows/npm-test.yml)
[![Npm Package & Publish](https://github.com/Blockception/BC-Minecraft-Bedrock-Vanilla-Data/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Blockception/BC-Minecraft-Bedrock-Vanilla-Data/actions/workflows/npm-publish.yml)
[![Node test](https://github.com/Blockception/BC-Minecraft-Bedrock-Command/actions/workflows/test.yml/badge.svg)](https://github.com/Blockception/BC-Minecraft-Bedrock-Command/actions/workflows/test.yml)
[![Node.js Package](https://github.com/Blockception/BC-Minecraft-Bedrock-Command/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Blockception/BC-Minecraft-Bedrock-Command/actions/workflows/npm-publish.yml)
![npm](https://img.shields.io/npm/v/bc-minecraft-bedrock-command)

A typescript package library that handles commands for minecraft bedrock

```ts
const command = Command.parse("execute @a ~ ~ ~ scoreboard players set @e[type=minecraft:sheep,r=3] range 1");
```
