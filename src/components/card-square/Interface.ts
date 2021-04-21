import {color} from "../../models/type";

export interface ICardSquare {
    data        :   any[],
    keyData?         :   string,
    keyDate?     : string,
    textColor   :   color,
    title       :   string,
    graphicColor:   color,
    borderColor :   color,
    footer?     :   boolean,
    textFooter? :   string,
    clases?     :   string,
    overflow?   :   boolean,
}