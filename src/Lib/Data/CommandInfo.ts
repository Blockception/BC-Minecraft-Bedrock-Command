import { ParameterType } from "../Types/ParameterType";

/**A single command syntax*/
export interface CommandInfo {
  /**The name of the command*/
  name: string;
  /**The documentation that goes with this syntax*/
  documentation: string;
  /**The parameter that make this particular syntax*/
  parameters: ParameterInfo[];
}

/**The information of a single parameter.*/
export interface ParameterInfo {
  /**The text/keyword of the parameter.*/
  text: string;
  /**The type of the parameter.*/
  type: ParameterType;
  /**True if this parameter is required, else false.*/
  required: boolean;

  /**The optional options for this parameter.*/
  options?: ParameterOptions;
}

/**The optional options for a given parameter.*/
export interface ParameterOptions {
  /**if defined, these values are always accepted, no evualation anymore required.*/
  acceptedValues?: string[];

  /**Minimum value or amount of numbers.*/
  minimum?: number;
  /**Maximum value or amount of numbers.*/
  maximum?: number;

  /**Wheter or not this parameter is aimed at players only, excluding entities .*/
  playerOnly?: boolean;
  /**Wheter or not fake / dummy players are allowed.*/
  allowFakePlayers?: boolean;

  /**If the wild card: '*' is allowed.*/
  wildcard?: boolean;
}
