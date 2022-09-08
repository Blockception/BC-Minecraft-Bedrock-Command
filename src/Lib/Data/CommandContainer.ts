import { CommandInfo } from ".";

/**The type definition of a command container */
export type CommandContainer = {
  /**A collection of accepted command syntaxes*/
  [key: string]: CommandInfo[];
};
