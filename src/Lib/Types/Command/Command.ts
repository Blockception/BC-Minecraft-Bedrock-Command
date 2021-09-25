import { CommandInfo } from "../../Data/include";
import { ParameterType } from "../ParameterType";
import { getBestMatches, getCommandData } from "./Functions";
import { Parameter } from "./Parameter";
import { GetParameters, ParameterBuilder } from "./Parse";

/**A class that helps interpeting written commands.*/
export class Command {
  private __matches : CommandInfo[] | undefined;

  /**The parameters of the command.*/
  public parameters: Parameter[];

  /**Creates a new instance of a command*/
  constructor() {
    this.__matches = undefined;
    this.parameters = [];
  }

  /**Gets the keyword of this command (first parameter)
   *@returns The keyword or "" is command is empty*/
  getKeyword(): string {
    if (this.parameters.length <= 0) return "";

    return this.parameters[0].text;
  }

  /**Gets all the command data that is the possible best match data
   * @param edu Wheter or not to include education data
   * @returns An array with commands info*/
  getCommandData(edu: boolean = false): CommandInfo[] {
    return getCommandData(this.getKeyword(), edu);
  }

  /**Gets the best matching commandinfo data, if multiple are returned, it unclear or somewhere not fully specified
   * @param edu Wheter or not to include education data
   * @returns An array with commands info*/
  getBestMatch(edu: boolean = false): CommandInfo[] {
    if (this.__matches) return this.__matches;

    return (this.__matches = getBestMatches(this, edu));
  }

  /**Gets the subcommand if there is any present
   * @param edu Wheter or not to include education data
   * @returns A sub command or undefined if there is no subcommand*/
  getSubCommand(edu: boolean = false): Command | undefined {
    const Matches = this.getBestMatch(edu);

    for (var I = 0; I < Matches.length; I++) {
      const Item = Matches[I];
      const index = Item.parameters.findIndex((x) => x.type === ParameterType.command);

      if (index > -1 && index < this.parameters.length) {
        return this.slice(index);
      }
    }
  }

  /**Finds the parameter index the cursor is at
   * @param index The index
   * @returns If cursor is not inside command then -1 is returned*/
  findCursorIndex(cursor: number): number {
    let out = 0;
    for (let I = 0; I < this.parameters.length; I++) {
      const elem = this.parameters[I];

      //If the cursor is bigger or equal to the offset of the parameter its but be in that parameter or further ahead, else break; and return 0
      if (elem.offset <= cursor) {
        out = I;

        const endindex = elem.offset + elem.text.length;
        //If the cursor is below the end of parameter or equal to it, return this parameter index
        if (cursor <= endindex) {
          return I;
          //if the cursofr is further then the end of the parameter, move it atleast by one, cause its not this parameter.
        } else if (cursor > endindex) {
          out = I + 1;
        }
      } else {
        break;
      }
    }

    return out;
  }

  /**Checks if this command is empty or not
   * @returns True or false if this command is empty*/
  isEmpty(): boolean {
    return this.parameters.length == 0;
  }

  /**Creates a slice of the command on the specified parameter indexes
   * @param start The startindex or undefined
   * @param end The startindex or undefined
   * @returns A new command that is represents the slice*/
  slice(start?: number | undefined, end?: number | undefined): Command {
    const Out = new Command();
    Out.parameters = this.parameters.slice(start, end);

    return Out;
  }

  /**Checks if the given cursor offset is in the subcommand or in the main command (or outside)
   * @param cursor The cursor offset
   * @returns A subcommand if the cursor is in the subcommand else returned undefined*/
  isInSubCommand(cursor: number, edu: boolean = false): Command | undefined {
    const get = this.getSubCommand(edu);

    if (get && get.parameters[0].offset <= cursor) return get;

    return undefined;
  }

  /**Parses the given text as a command
   * @param text The text to process
   * @param offset The offset the text starts at in the document
   * @returns A command*/
  static parse(text: string, offset: number = 0): Command {
    const Out = new Command();

    //Record start offset from trimming
    const oldlength = text.length;
    text = text.trimStart();
    offset += oldlength - text.length;
    //Trim end
    text = text.trimEnd();

    const builder = new ParameterBuilder(offset);
    GetParameters(text, builder);

    Out.parameters = builder.items;

    return Out;
  }
}
