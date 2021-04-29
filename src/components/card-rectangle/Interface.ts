import {color} from "../../models/type";

export interface ISquareCard {
    borderColor     :   color,
    backgroundColor?:   color | 'white',
    size            :   size,
    sizeCircle      :   'sm' | 'bg' | 'xl'
    colorCircle     :   color | string
}

type size = 'xs' | 's' | 'l' | 'xl'