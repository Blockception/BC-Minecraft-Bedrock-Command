import { ParameterType } from "../../Types/ParameterType";
import { CommandInfo } from "../CommandInfo";

/**The music command */
export const music: CommandInfo[] = [
  {
    name: "music",
    documentation: "Allows you to control playing music tracks.",
    parameters: [
      { text: "music", type: ParameterType.keyword, required: true },
      { text: "queue", type: ParameterType.keyword, required: true },
      { text: "track name", type: ParameterType.string, required: true },
      {
        text: "volume",
        type: ParameterType.float,
        required: false,
        options: { minimum: 0.01, maximum: 1 },
      },
      {
        text: "fade seconds",
        type: ParameterType.float,
        required: false,
        options: { minimum: 0 },
      },
      {
        text: "repeat",
        type: ParameterType.musicRepeatMode,
        required: false,
      },
    ],
  },
  {
    name: "music",
    documentation: "Allows you to control playing music tracks.",
    parameters: [
      { text: "music", type: ParameterType.keyword, required: true },
      { text: "play", type: ParameterType.keyword, required: true },
      { text: "track name", type: ParameterType.string, required: true },
      {
        text: "volume",
        type: ParameterType.float,
        required: false,
        options: { minimum: 0.01, maximum: 1 },
      },
      {
        text: "fade seconds",
        type: ParameterType.float,
        required: false,
        options: { minimum: 0 },
      },
      {
        text: "repeat",
        type: ParameterType.musicRepeatMode,
        required: false,
      },
    ],
  },
  {
    name: "music",
    documentation: "Allows you to control playing music tracks.",
    parameters: [
      { text: "music", type: ParameterType.keyword, required: true },
      { text: "stop", type: ParameterType.keyword, required: true },
      {
        text: "fade seconds",
        type: ParameterType.float,
        required: false,
        options: { minimum: 0 },
      },
    ],
  },
  {
    name: "music",
    documentation: "Allows you to control playing music tracks.",
    parameters: [
      { text: "music", type: ParameterType.keyword, required: true },
      { text: "volume", type: ParameterType.keyword, required: true },
      {
        text: "volume",
        type: ParameterType.float,
        required: false,
        options: { minimum: 0.01, maximum: 1 },
      },
    ],
  },
];