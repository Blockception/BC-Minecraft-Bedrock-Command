export function IsObject(value: string): boolean {
  if (value.startsWith("{") && value.endsWith("}")) return true;

  return false;
}

export function IsArray(value: string): boolean {
  if (value.startsWith("[") && value.endsWith("]")) return true;

  return false;
}
