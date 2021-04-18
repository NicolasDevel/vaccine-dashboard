import { ICardRectangleMedium } from './Interface';
import { CardRectangle } from '../card-rectangle/CardRectangle';
import { Title, Subtitle } from '../titles/Titles';

import './CardRectangleMedium.scss';

export const CardRectangleMedium:React.FC<ICardRectangleMedium> = ({cardSquare,title,subTItle}) =>{
    return <div className={'card-rectangle-medium'}>
        <CardRectangle {...cardSquare}>
            <div className={'information'}>
                <Subtitle text={title} color={cardSquare.colorCircle} />
                <Title text={subTItle} color={cardSquare.colorCircle} />
            </div>
            <div className={`button ${cardSquare.colorCircle}`}>
                <button>+</button>
            </div>
        </CardRectangle>
    </div>
}