import Circle from '../circle/Circle';
import {Title , Subtitle } from '../titles/Titles';
import './CardRectangleInfo.scss';

import {ICardRectangleInfoComponent} from './Interface';


const CardRectangleInfo = (props:ICardRectangleInfoComponent) => {
    const { color, subtitle, title} = props;
    return <div className={`container background-${color}`}>
        <div className={'position'}>
            <Circle color={color}/> 
            <div className={'container-text'}>
                <Title text={title} color={color} />
                <Subtitle text={subtitle} color={color} styles={'subtitle-text'}/>
            </div>
        </div>
    </div>
}

export default CardRectangleInfo;