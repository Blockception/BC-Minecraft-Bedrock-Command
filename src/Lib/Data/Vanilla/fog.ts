import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The fog command */
export const fog: CommandInfo[] = [
  {
    name: "fog",
    documentation:
      "Pushes a new fog setting, to specified player(s), along with a user provided ID, onto the top of the Fog Command layers of the players' active fog stacks.",
    parameters: [
      { text: "fog", type: ParameterType.keyword, required: true },
      { text: "victim", type: ParameterType.selector, required: true },
      { text: "push", type: ParameterType.keyword, required: true },
      { text: "fog id", type: ParameterType.string, required: true },
      {
        text: "user provided id",
        type: ParameterType.string,
        required: true,
      },
    ],
  },
  {
    name: "fog",
    documentation:
      'Removes the top-most fog setting, from selected player(s), that matches the user provided ID (i.e. as provided previously via a "/fog push" command).',
    parameters: [
      { text: "fog", type: ParameterType.keyword, required: true },
      { text: "victim", type: ParameterType.selector, required: true },
      { text: "pop", type: ParameterType.keyword, required: true },
      {
        text: "user provided id",
        type: ParameterType.string,
        required: true,
      },
    ],
  },
  {
    name: "fog",
    documentation:
      'Removes all matching fog settings, from the selected player(s), that matches the user-provided ID (i.e. as provided previously via one or more "/fog push" commands).',
    parameters: [
      { text: "fog", type: ParameterType.keyword, required: true },
      { text: "victim", type: ParameterType.selector, required: true },
      { text: "remove", type: ParameterType.keyword, required: true },
      {
        text: "user provided id",
        type: ParameterType.string,
        required: true,
      },
    ],
  },
];