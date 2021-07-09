/** */
export class Parameter {
  /** */
  public offset: number;
  /** */
  public text: string;

  /**
   *
   * @param text
   * @param offset
   */
  constructor(text: string = "", offset: number = 0) {
    this.offset = offset;
    this.text = text;
  }
}
