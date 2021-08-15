import { CommandInfo } from "./CommandInfo";
import { Edu } from "./Edu";
import { Vanilla } from "./Vanilla";

/**Retrieves the command data related to the given keyword
 * @param name The command to retrieve
 * @param edu Wheter or not to include education commands
 * @returns An array with commands info*/
export function getCommandData(name: string, edu: boolean = false): CommandInfo[] {
  const out: CommandInfo[] = [];

  Add(out, Vanilla[name]);

  if (edu) {
    Add(out, Edu[name]);
  }

  return out;
}

/**Checks if the given commanddata is present
 * @param name The command to retrieve
 * @param edu Wheter or not to include education commands
 * @returns An array with commands info*/
export function hasCommandData(name: string, edu: boolean = false): boolean {
  if (Vanilla[name]) return true;
  if (edu && Edu[name]) return true;

  return false;
}

function Add(receiver: CommandInfo[], items: CommandInfo[] | undefined): void {
  if (items) receiver.push(...items);
}
