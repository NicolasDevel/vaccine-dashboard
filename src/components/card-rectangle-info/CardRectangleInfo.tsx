import Circle from '../circle/Circle';
import './CardRectangleInfo.scss';
import Title from '../title/Title';

import {ICardRectangleInfoComponent} from './Interface';


const CardRectangleInfo = (props:ICardRectangleInfoComponent) => {
    return <div className={`container background-${props.color}`}>
        <div className={'position'}>
            <Circle color={props.color}/> 
            <div className={'container-text'}>
                <Title text={'test'} color={props.color}/>
                <div>aa</div>
            </div>
        </div>
    </div>
}

export default CardRectangleInfo;