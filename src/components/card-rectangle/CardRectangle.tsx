import './CardRectangle.scss';
import {ISquareCard} from "./Interface";
import Circle from './../circle/Circle'

export const CardRectangle:React.FC<ISquareCard> = ({children,backgroundColor='white', size, borderColor,sizeCircle,colorCircle }) =>{
    return <div className={`card-rectangle ${size} border-${borderColor} background-${backgroundColor}`}>
        <div className={`container ${size}`}>
            <section className={'circle'}>
                <Circle size={sizeCircle} color={colorCircle}/>
            </section>
            <section className='body-container'>
                {children}
            </section>
        </div>
    </div>
}