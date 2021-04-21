import {EColor} from "../../models/enum";

export interface IPiewGraphic {
    color?  :   EColor,
    data    :   any[],
    keyData?         :  string,
    keyDate?     : string,
}