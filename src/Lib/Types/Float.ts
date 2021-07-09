export function IsFloat(text: string): boolean {
  return /^[\-\.\d]*$/.test(text);
}
