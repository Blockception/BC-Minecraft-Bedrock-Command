import { CommandInfo } from "./CommandInfo";
import { Edu } from "./Edu";
import { Vanilla } from "./Vanilla";

export function getCommandData(name: string, edu: boolean = false): CommandInfo[] {
  const out: CommandInfo[] = [];

  Add(out, Vanilla[name]);

  if (edu) {
    Add(out, Edu[name]);
  }

  return out;
}

function Add(receiver: CommandInfo[], items: CommandInfo[] | undefined): void {
  if (items) receiver.push(...items);
}
