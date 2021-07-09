import { ParameterType } from "../Types/ParameterType";

/** */
export interface CommandInfo {
  /** */

  name: string;
  /** */
  documentation: string;
  /** */
  parameters: ParameterInfo[];
}

/** */
export interface ParameterInfo {
  /** */
  text: string;
  /** */
  type: ParameterType;
  /** */
  required: boolean;

  /**The optional options for this parameter */
  options?: ParameterOptions;
}

/**The optional options for a given parameter */
export interface ParameterOptions {
  /** */
  acceptedValues?: string[];

  /**Minimum value or amount */
  minimum?: number;
  /**Maximum value or amount */
  maximum?: number;

  /**Wheter or not this parameter is aimed at players only, excluding entities */
  playerOnly?: boolean;
  /**Wheter or not fake / dummy players are allowed */
  allowFakePlayers?: boolean;

  /**If the wild card: '*' is allowed */
  wildcard?: boolean;
}
