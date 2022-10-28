import { ParameterType } from "../../Types/ParameterType";
import { CommandInfo } from "../CommandInfo";

/**The replaceitem command */
export const replaceitem: CommandInfo[] = [
  {
    name: "replaceitem",
    documentation: "Replaces items in inventories.",
    parameters: [
      { text: "replaceitem", type: ParameterType.keyword, required: true },
      { text: "block", type: ParameterType.keyword, required: true },
      { text: "position x", type: ParameterType.coordinate, required: true },
      { text: "position y", type: ParameterType.coordinate, required: true },
      { text: "position z", type: ParameterType.coordinate, required: true },
      { text: "slot.container", type: ParameterType.keyword, required: true },
      { text: "slot id", type: ParameterType.slotID, required: true },
      { text: "item name", type: ParameterType.item, required: true },
      { text: "amount", type: ParameterType.keyword, required: false },
      { text: "data", type: ParameterType.keyword, required: false },
      { text: "components", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "replaceitem",
    documentation: "Replaces items in inventories.",
    parameters: [
      { text: "replaceitem", type: ParameterType.keyword, required: true },
      { text: "block", type: ParameterType.keyword, required: true },
      { text: "position x", type: ParameterType.coordinate, required: true },
      { text: "position y", type: ParameterType.coordinate, required: true },
      { text: "position z", type: ParameterType.coordinate, required: true },
      { text: "slot.container", type: ParameterType.keyword, required: true },
      { text: "slotId", type: ParameterType.slotID, required: true },
      {
        text: "replacemode",
        type: ParameterType.replaceMode,
        required: true,
      },
      { text: "item name", type: ParameterType.item, required: true },
      { text: "amount", type: ParameterType.keyword, required: false },
      { text: "data", type: ParameterType.keyword, required: false },
      { text: "components", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "replaceitem",
    documentation: "Replaces items in inventories.",
    parameters: [
      { text: "replaceitem", type: ParameterType.keyword, required: true },
      { text: "entity", type: ParameterType.keyword, required: true },
      { text: "selector", type: ParameterType.selector, required: true },
      {
        text: "slot.container",
        type: ParameterType.slotType,
        required: true,
      },
      { text: "slotId", type: ParameterType.slotID, required: true },
      { text: "item name", type: ParameterType.item, required: true },
      { text: "amount", type: ParameterType.integer, required: false },
      { text: "data", type: ParameterType.integer, required: false },
      { text: "components", type: ParameterType.jsonItem, required: false },
    ],
  },
  {
    name: "replaceitem",
    documentation: "Replaces items in inventories.",
    parameters: [
      { text: "replaceitem", type: ParameterType.keyword, required: true },
      { text: "entity", type: ParameterType.keyword, required: true },
      { text: "selector", type: ParameterType.selector, required: true },
      { text: "slot type", type: ParameterType.slotType, required: true },
      { text: "slot id", type: ParameterType.slotID, required: true },
      {
        text: "replace mode",
        type: ParameterType.replaceMode,
        required: true,
      },
      { text: "item name", type: ParameterType.item, required: true },
      { text: "amount", type: ParameterType.integer, required: false },
      { text: "data", type: ParameterType.integer, required: false },
      { text: "components", type: ParameterType.jsonItem, required: false },
    ],
  },
];