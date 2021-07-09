/**
 *
 * @param text
 * @returns
 */
export function IsInteger(text: string): boolean {
  return /^[\-\d]*$/.test(text);
}
