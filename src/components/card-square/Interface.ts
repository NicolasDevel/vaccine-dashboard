import {color} from "../../models/type";

export interface ICardSquare {
    data        :   any[],
    textColor   :   color,
    title       :   string,
    graphicColor:   color,
    borderColor :   color,
    footer?     :   boolean,
    textFooter? :   string,
}