import './CardRectangle.scss';
import {ISquareCard} from "./Interface";

export const CardRectangle = (props:ISquareCard) =>{
    const {
        backgroundColor='white',
        size,
        borderColor } = props;
    return <div className={`card-rectangle ${size} border-${borderColor} background-${backgroundColor}`}>
        Fuck you
    </div>
}