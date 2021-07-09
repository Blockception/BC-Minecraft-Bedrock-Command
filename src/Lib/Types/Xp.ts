/**
 *
 * @param text
 * @returns
 */
export function IsXpLevel(text: string): boolean {
  return /^([\-\d]*|[\-\d]*[Ll])$/.test(text);
}
