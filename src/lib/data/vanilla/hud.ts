import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The hud command */
export const hud: CommandInfo[] = [
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "hide", type: ParameterType.keyword, required: true },
      { text: "air_bubbles", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "hide", type: ParameterType.keyword, required: true },
      { text: "all", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "hide", type: ParameterType.keyword, required: true },
      { text: "armor", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "hide", type: ParameterType.keyword, required: true },
      { text: "crosshair", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "hide", type: ParameterType.keyword, required: true },
      { text: "health", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "hide", type: ParameterType.keyword, required: true },
      { text: "horse_health", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "hide", type: ParameterType.keyword, required: true },
      { text: "hotbar", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "hide", type: ParameterType.keyword, required: true },
      { text: "hunger", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "hide", type: ParameterType.keyword, required: true },
      { text: "item_text", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "hide", type: ParameterType.keyword, required: true },
      { text: "paperdoll", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "hide", type: ParameterType.keyword, required: true },
      { text: "progress_bar", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "hide", type: ParameterType.keyword, required: true },
      { text: "status_effects", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "hide", type: ParameterType.keyword, required: true },
      { text: "tooltips", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "hide", type: ParameterType.keyword, required: true },
      { text: "touch_controls", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "reset", type: ParameterType.keyword, required: true },
      { text: "air_bubbles", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "reset", type: ParameterType.keyword, required: true },
      { text: "all", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "reset", type: ParameterType.keyword, required: true },
      { text: "armor", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "reset", type: ParameterType.keyword, required: true },
      { text: "crosshair", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "reset", type: ParameterType.keyword, required: true },
      { text: "health", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "reset", type: ParameterType.keyword, required: true },
      { text: "horse_health", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "reset", type: ParameterType.keyword, required: true },
      { text: "hotbar", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "reset", type: ParameterType.keyword, required: true },
      { text: "hunger", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "reset", type: ParameterType.keyword, required: true },
      { text: "item_text", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "reset", type: ParameterType.keyword, required: true },
      { text: "paperdoll", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "reset", type: ParameterType.keyword, required: true },
      { text: "progress_bar", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "reset", type: ParameterType.keyword, required: true },
      { text: "status_effects", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "reset", type: ParameterType.keyword, required: true },
      { text: "tooltips", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "hud",
    documentation: "Changes the visibility of hud elements.",
    permission_level: 1,
    parameters: [
      { text: "hud", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "reset", type: ParameterType.keyword, required: true },
      { text: "touch_controls", type: ParameterType.keyword, required: false },
    ],
  },
];