import {color} from "../../models/type";

export interface ICircle {
    color   :   color | string;
    size?   :   'sm' | 'bg' | 'xl'
}