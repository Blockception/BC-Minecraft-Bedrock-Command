import { ParameterType } from "../../Types/ParameterType";
import { CommandInfo } from "../CommandInfo";

/**The hud command */
export const hud: CommandInfo[] = [
  {
    name: "hud",
    documentation: "Configures whether elements of the on-screen display (alternately known as the 'heads up display', or 'HUD') are visible on the screen.",
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "visible", type: ParameterType.hudVisibility, required: true },
      { text: "hud_element", type: ParameterType.hudElement, required: false },
    ],
  },
];
