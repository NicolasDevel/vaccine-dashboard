import './CardRectangle.scss';
import {ISquareCard} from "./Interface";

export const CardRectangle:React.FC<ISquareCard> = ({children,backgroundColor='white', size, borderColor }) =>{
    return <div className={`card-rectangle ${size} border-${borderColor} background-${backgroundColor}`}>
        <section className='body'>
            {children}
        </section>
    </div>
}