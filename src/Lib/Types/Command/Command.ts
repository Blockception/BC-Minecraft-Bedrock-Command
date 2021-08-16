import { CommandInfo } from "../../Data/include";
import { ParameterType } from "../ParameterType";
import { getBestMatches, getCommandData } from "./Functions";
import { Parameter } from "./Parameter";
import { GetParameters, ParameterBuilder } from "./Parse";

/**A class that helps interpeting written commands.*/
export class Command {
  /**The parameters of the command.*/
  public parameters: Parameter[];

  /**Creates a new instance of a command*/
  constructor() {
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
    return getBestMatches(this, edu);
  }

  /**
   *
   * @param edu Wheter or not to include education data
   * @returns
   */
  getSubCommand(edu: boolean = false): Command | undefined {
    const Matches = this.getCommandData(edu);

    for (var I = 0; I < Matches.length; I++) {
      const Item = Matches[I];
      const index = Item.parameters.findIndex((x) => x.type === ParameterType.command);

      if (index > -1 && index < this.parameters.length) {
        return this.slice(index);
      }
    }
  }

  /**
   *
   * @param index
   * @returns If cursor is not inside command then -1 is returned
   */
  findCursorIndex(index: number): number {
    let out = -1;
    for (let I = 0; I < this.parameters.length; I++) {
      const elem = this.parameters[I];

      if (elem.offset >= index) {
        out = elem.offset;

        if (index <= elem.offset + elem.text.length) return out;
      }
    }

    return -1;
  }

  /**
   *
   * @returns
   */
  isEmpty(): boolean {
    return this.parameters.length == 0;
  }

  /**
   *
   * @param start
   * @param end
   * @returns
   */
  slice(start?: number | undefined, end?: number | undefined): Command {
    const Out = new Command();
    Out.parameters = this.parameters.slice(start, end);

    return Out;
  }

  /**Checks if the given cursor offset is in the subcommand or in the main command (or outside)
   * @param cursor The cursor offset*
   * @returns
   */
  isInSubCommand(cursor: number, edu: boolean = false): Command | undefined {
    const get = this.getSubCommand(edu);

    if (get && get.parameters[0].offset >= cursor) return get;

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
