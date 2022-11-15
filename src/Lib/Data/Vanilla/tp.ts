import { ParameterType } from "../../Types/ParameterType";
import { CommandInfo } from "../CommandInfo";

/**The teleport command */
export const tp: CommandInfo[] = [
  {
    name: "tp",
    documentation: "Teleport Entities.",
    parameters: [
      { text: "tp", type: ParameterType.keyword, required: true },
      { text: "destination", type: ParameterType.selector, required: true },
      {
        text: "check for blocks",
        type: ParameterType.boolean,
        required: false,
      },
    ],
  },
  {
    name: "tp",
    documentation: "Teleport Entities.",
    parameters: [
      { text: "tp", type: ParameterType.keyword, required: true },
      {
        text: "destination x",
        type: ParameterType.coordinate,
        required: true,
      },
      {
        text: "destination y",
        type: ParameterType.coordinate,
        required: true,
      },
      {
        text: "destination z",
        type: ParameterType.coordinate,
        required: true,
      },
      {
        text: "check for blocks",
        type: ParameterType.boolean,
        required: false,
      },
    ],
  },
  {
    name: "tp",
    documentation: "Teleport Entities.",
    parameters: [
      { text: "tp", type: ParameterType.keyword, required: true },
      { text: "victim", type: ParameterType.selector, required: true },
      { text: "destination", type: ParameterType.selector, required: true },
      {
        text: "check for blocks",
        type: ParameterType.boolean,
        required: false,
      },
    ],
  },
  {
    name: "tp",
    documentation: "Teleport Entities.",
    parameters: [
      { text: "tp", type: ParameterType.keyword, required: true },
      { text: "victim", type: ParameterType.selector, required: true },
      {
        text: "destination x",
        type: ParameterType.coordinate,
        required: true,
      },
      {
        text: "destination y",
        type: ParameterType.coordinate,
        required: true,
      },
      {
        text: "destination z",
        type: ParameterType.coordinate,
        required: true,
      },
      {
        text: "check for blocks",
        type: ParameterType.boolean,
        required: false,
      },
    ],
  },
  {
    name: "tp",
    documentation: "Teleport Entities.",
    parameters: [
      { text: "tp", type: ParameterType.keyword, required: true },
      { text: "destination", type: ParameterType.selector, required: true },
      { text: "yRot", type: ParameterType.coordinate, required: false },
      { text: "xRot", type: ParameterType.coordinate, required: false },
      {
        text: "check for blocks",
        type: ParameterType.boolean,
        required: false,
      },
    ],
  },
  {
    name: "tp",
    documentation: "Teleport Entities.",
    parameters: [
      { text: "tp", type: ParameterType.keyword, required: true },
      {
        text: "destination x",
        type: ParameterType.coordinate,
        required: true,
      },
      {
        text: "destination y",
        type: ParameterType.coordinate,
        required: true,
      },
      {
        text: "destination z",
        type: ParameterType.coordinate,
        required: true,
      },
      { text: "yRot", type: ParameterType.coordinate, required: false },
      { text: "xRot", type: ParameterType.coordinate, required: false },
      {
        text: "check for blocks",
        type: ParameterType.boolean,
        required: false,
      },
    ],
  },
  {
    name: "tp",
    documentation: "Teleport the entity to the destination with rotation.",
    parameters: [
      { text: "tp", type: ParameterType.keyword, required: true },
      { text: "victim", type: ParameterType.selector, required: true },
      { text: "destination", type: ParameterType.selector, required: true },
      { text: "facing", type: ParameterType.keyword, required: true },
      { text: "yRot", type: ParameterType.coordinate, required: false },
      { text: "xRot", type: ParameterType.coordinate, required: false },
      {
        text: "check for blocks",
        type: ParameterType.boolean,
        required: false,
      },
    ],
  },
  {
    name: "tp",
    documentation: "Teleport Entities.",
    parameters: [
      { text: "tp", type: ParameterType.keyword, required: true },
      { text: "victim", type: ParameterType.selector, required: true },
      {
        text: "destination x",
        type: ParameterType.coordinate,
        required: true,
      },
      {
        text: "destination y",
        type: ParameterType.coordinate,
        required: true,
      },
      {
        text: "destination z",
        type: ParameterType.coordinate,
        required: true,
      },
      { text: "yRot", type: ParameterType.coordinate, required: false },
      { text: "xRot", type: ParameterType.coordinate, required: false },
      {
        text: "check for blocks",
        type: ParameterType.boolean,
        required: false,
      },
    ],
  },
  {
    name: "tp",
    documentation: "Teleport Entities.",
    parameters: [
      { text: "tp", type: ParameterType.keyword, required: true },
      { text: "destination", type: ParameterType.selector, required: true },
      { text: "facing", type: ParameterType.keyword, required: true },
      { text: "look at", type: ParameterType.selector, required: true },
      {
        text: "check for blocks",
        type: ParameterType.boolean,
        required: false,
      },
    ],
  },
  {
    name: "tp",
    documentation: "Teleport Entities.",
    parameters: [
      { text: "tp", type: ParameterType.keyword, required: true },
      { text: "destination", type: ParameterType.selector, required: true },
      { text: "facing", type: ParameterType.keyword, required: true },
      { text: "look at x", type: ParameterType.coordinate, required: true },
      { text: "look at y", type: ParameterType.coordinate, required: true },
      { text: "look at z", type: ParameterType.coordinate, required: true },
      {
        text: "check for blocks",
        type: ParameterType.boolean,
        required: false,
      },
    ],
  },
  {
    name: "tp",
    documentation: "Teleport Entities.",
    parameters: [
      { text: "tp", type: ParameterType.keyword, required: true },
      { text: "victim", type: ParameterType.selector, required: true },
      { text: "destination", type: ParameterType.selector, required: true },
      { text: "facing", type: ParameterType.keyword, required: true },
      { text: "look at", type: ParameterType.selector, required: true },
      {
        text: "check for blocks",
        type: ParameterType.boolean,
        required: false,
      },
    ],
  },
  {
    name: "tp",
    documentation: "Teleport Entities.",
    parameters: [
      { text: "tp", type: ParameterType.keyword, required: true },
      { text: "victim", type: ParameterType.selector, required: true },
      { text: "destination", type: ParameterType.selector, required: true },
      { text: "facing", type: ParameterType.keyword, required: true },
      { text: "look at x", type: ParameterType.coordinate, required: true },
      { text: "look at y", type: ParameterType.coordinate, required: true },
      { text: "look at z", type: ParameterType.coordinate, required: true },
      {
        text: "check for blocks",
        type: ParameterType.boolean,
        required: false,
      },
    ],
  },
  {
    name: "tp",
    documentation: "Teleport Entities.",
    parameters: [
      { text: "tp", type: ParameterType.keyword, required: true },
      {
        text: "destination x",
        type: ParameterType.coordinate,
        required: true,
      },
      {
        text: "destination y",
        type: ParameterType.coordinate,
        required: true,
      },
      {
        text: "destination z",
        type: ParameterType.coordinate,
        required: true,
      },
      { text: "facing", type: ParameterType.keyword, required: true },
      { text: "look at", type: ParameterType.selector, required: true },
      {
        text: "check for blocks",
        type: ParameterType.boolean,
        required: false,
      },
    ],
  },
  {
    name: "tp",
    documentation: "Teleport Entities.",
    parameters: [
      { text: "tp", type: ParameterType.keyword, required: true },
      {
        text: "destination x",
        type: ParameterType.coordinate,
        required: true,
      },
      {
        text: "destination y",
        type: ParameterType.coordinate,
        required: true,
      },
      {
        text: "destination z",
        type: ParameterType.coordinate,
        required: true,
      },
      { text: "facing", type: ParameterType.keyword, required: true },
      { text: "look at x", type: ParameterType.coordinate, required: true },
      { text: "look at y", type: ParameterType.coordinate, required: true },
      { text: "look at z", type: ParameterType.coordinate, required: true },
      {
        text: "check for blocks",
        type: ParameterType.boolean,
        required: false,
      },
    ],
  },
  {
    name: "tp",
    documentation: "Teleport Entities.",
    parameters: [
      { text: "tp", type: ParameterType.keyword, required: true },
      { text: "victim", type: ParameterType.selector, required: true },
      {
        text: "destination x",
        type: ParameterType.coordinate,
        required: true,
      },
      {
        text: "destination y",
        type: ParameterType.coordinate,
        required: true,
      },
      {
        text: "destination z",
        type: ParameterType.coordinate,
        required: true,
      },
      { text: "facing", type: ParameterType.keyword, required: true },
      { text: "look at", type: ParameterType.selector, required: true },
      {
        text: "check for blocks",
        type: ParameterType.boolean,
        required: false,
      },
    ],
  },
  {
    name: "tp",
    documentation: "Teleport Entities.",
    parameters: [
      { text: "tp", type: ParameterType.keyword, required: true },
      { text: "victim", type: ParameterType.selector, required: true },
      {
        text: "destination x",
        type: ParameterType.coordinate,
        required: true,
      },
      {
        text: "destination y",
        type: ParameterType.coordinate,
        required: true,
      },
      {
        text: "destination z",
        type: ParameterType.coordinate,
        required: true,
      },
      { text: "facing", type: ParameterType.keyword, required: true },
      { text: "look at x", type: ParameterType.coordinate, required: true },
      { text: "look at y", type: ParameterType.coordinate, required: true },
      { text: "look at z", type: ParameterType.coordinate, required: true },
      {
        text: "check for blocks",
        type: ParameterType.boolean,
        required: false,
      },
    ],
  },
];