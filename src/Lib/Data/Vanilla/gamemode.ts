import { ParameterType } from "../../Types/ParameterType";
import { CommandInfo } from "../CommandInfo";

/**The gamemode command */
export const gamemode: CommandInfo[] = [
  {
    name: "gamemode",
    documentation: "Sets a player's game mode.",
    parameters: [
      { text: "gamemode", type: ParameterType.keyword, required: true },
      { text: "gamemode", type: ParameterType.gamemode, required: true },
      {
        text: "player",
        type: ParameterType.selector,
        required: false,
        options: { playerOnly: true },
      },
    ],
  },
];