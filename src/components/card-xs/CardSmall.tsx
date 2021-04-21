import { ICardXs } from "./Interface";
import {CardRectangle} from '../card-rectangle/CardRectangle';
import { Subtitle } from '../titles/Titles';

import './CardXs.scss';


export  const CardSmall:React.FC<ICardXs> = ({cardSquare, text}) =>{
    return <div className={'card-xs'}>
        <CardRectangle {...cardSquare}>
            <Subtitle text={text} color={cardSquare.colorCircle}/>
        </CardRectangle>
    </div>
}