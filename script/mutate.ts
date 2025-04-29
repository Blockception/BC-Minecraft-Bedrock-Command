import { Command, CommandOverload } from "./minecraft-data";

const mutateData: Array<[string, string[]]> = [["ALLOWLISTACTION", ["add", "remove", "list", "reload", "on", "off"]]];

export function mutate(data: Command) {
  data.overloads = mutateOverload(data.overloads);
}

function mutateOverload(data: CommandOverload[]): CommandOverload[] {
  const result: CommandOverload[] = [];

  for (const overload of data) {
    for (const [original, others] of mutateData) {
      const newOverloads = mutateOverloadWith(overload, original, others);
      result.push(...newOverloads);
    }
  }

  return result;
}

function mutateOverloadWith(data: CommandOverload, orignal: string, others: string[]): CommandOverload[] {
  const i = data.params.findIndex((p) => p.type.name === orignal);
  if (i === -1) {
    return [data];
  }

  const result: CommandOverload[] = [];

  for (const o of others) {
    const newData: CommandOverload = {
      ...data,
      params: [...data.params],
    };
    newData.params[i] = {
      name: o,
      type: { name: "KEYWORD" },
      is_optional: data.params[i].is_optional,
    };
    result.push(newData);
  }

  return result;
}
