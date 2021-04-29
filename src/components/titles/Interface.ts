import {color} from "../../models/type";

export interface ITitles {
    color?      :   color | string;
    text        :   string;
    styles?     :   string;
    stylesText? :   string;
}