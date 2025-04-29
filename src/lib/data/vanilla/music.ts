import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The music command */
export const music: CommandInfo[] = [
  {
    name: "music",
    documentation: "Allows you to control playing music tracks.",
    permission_level: 1,
    parameters: [
      { text: "music", type: ParameterType.keyword, required: true },
      { text: "play", type: ParameterType.keyword, required: true },
      { text: "trackName", type: ParameterType.music, required: true },
      { text: "volume", type: ParameterType.float, required: false, options: { minimum: 0.01, maximum: 1 } },
      { text: "fadeSeconds", type: ParameterType.float, required: false, options: { minimum: 0 } },
      { text: "repeatMode", type: ParameterType.musicRepeatMode, required: false },
    ],
  },
  {
    name: "music",
    documentation: "Allows you to control playing music tracks.",
    permission_level: 1,
    parameters: [
      { text: "music", type: ParameterType.keyword, required: true },
      { text: "queue", type: ParameterType.keyword, required: true },
      { text: "trackName", type: ParameterType.music, required: true },
      { text: "volume", type: ParameterType.float, required: false, options: { minimum: 0.01, maximum: 1 } },
      { text: "fadeSeconds", type: ParameterType.float, required: false, options: { minimum: 0.01, maximum: 1 } },
      { text: "repeatMode", type: ParameterType.musicRepeatMode, required: false },
    ],
  },
  {
    name: "music",
    documentation: "Allows you to control playing music tracks.",
    permission_level: 1,
    parameters: [
      { text: "music", type: ParameterType.keyword, required: true },
      { text: "stop", type: ParameterType.keyword, required: true },
      { text: "fadeSeconds", type: ParameterType.float, required: false, options: { minimum: 0 } },
    ],
  },
  {
    name: "music",
    documentation: "Allows you to control playing music tracks.",
    permission_level: 1,
    parameters: [
      { text: "music", type: ParameterType.keyword, required: true },
      { text: "volume", type: ParameterType.keyword, required: true },
      { text: "volume", type: ParameterType.float, required: true, options: { minimum: 0.01, maximum: 1 } },
    ],
  },
];