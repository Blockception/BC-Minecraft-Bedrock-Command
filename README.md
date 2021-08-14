# BC-Minecraft-Bedrock-Commands

[![Npm Package & Publish](https://github.com/Blockception/BC-Minecraft-Bedrock-Command/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Blockception/BC-Minecraft-Bedrock-Command/actions/workflows/npm-publish.yml)
[![Npm Test](https://github.com/Blockception/BC-Minecraft-Bedrock-Command/actions/workflows/npm-test.yml/badge.svg)](https://github.com/Blockception/BC-Minecraft-Bedrock-Command/actions/workflows/npm-test.yml)
[![tagged-release](https://github.com/Blockception/BC-Minecraft-Bedrock-Command/actions/workflows/tagged-release.yml/badge.svg)](https://github.com/Blockception/BC-Minecraft-Bedrock-Command/actions/workflows/tagged-release.yml)
![npm](https://img.shields.io/npm/v/bc-minecraft-bedrock-command)

A typescript package library that handles commands for minecraft bedrock

```ts
const command = Command.parse("execute @a ~ ~ ~ scoreboard players set @e[type=minecraft:sheep,r=3] range 1");
```
