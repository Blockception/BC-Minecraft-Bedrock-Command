import { Parameter } from "./Parameter";

/**The interface of a basic word builder*/
export class ParameterBuilder {
  /** */
  private offset: number;
  /** */
  public items: Parameter[];

  constructor(offset: number = 0) {
    this.offset = offset;
    this.items = [];
  }

  /**
   * Add the given text as a word to the internal list, starting at the given offset
   * @param text The word text
   * @param offset The offset where the word was found
   */
  Add(text: string, offset: number): void {
    this.items.push({ offset: offset + this.offset, text: text });
  }
}

export function GetParameters(text: string, Builder: ParameterBuilder): void {
  let level = 0;
  let startindex = 0;
  let Instring = false;

  for (let index = 0; index < text.length; index++) {
    let c = text.charAt(index);

    //If instring or not
    if (Instring) {
      //Is end of string and not escaped?
      if (c == '"' && text.charAt(index - 1) !== "\\") Instring = false;
    } else {
      //Switch on character
      switch (c) {
        //Its a string start
        case '"':
          Instring = true;
          break;

        //Bracket start
        case "[":
        case "(":
        case "{":
          level++;
          break;

        //Bracket end
        case "]":
        case ")":
        case "}":
          level--;
          break;

        //Empty spaces
        case " ":
        case "\t":
          if (level == 0) {
            if (startindex < index) {
              const word = text.substring(startindex, index).trim();
              Builder.Add(word, startindex);
            }

            startindex = index + 1;
          }
          break;

        //Coordinates start
        case "~":
        case "^":
          if (level == 0) {
            if (startindex < index) {
              const word = text.substring(startindex, index).trim();
              Builder.Add(word, startindex);
            }

            startindex = index;
          }

          break;
        default:
          break;
      }
    }

    if (level < 0) break;
  }

  if (startindex < text.length) {
    const word = text.substring(startindex, text.length).trim();
    Builder.Add(word, startindex);
  }
}
