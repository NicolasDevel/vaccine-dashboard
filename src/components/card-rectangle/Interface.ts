import {color} from "../../models/type";

export interface ISquareCard {
    borderColor     :   color,
    backgroundColor?:   color | 'white',
    size            :   size,
}

type size = 'xs' | 's' | 'l' | 'xl'