import {ITitle} from './Interface';
import './Title.scss';

const Title = (props:ITitle) => {
    const {text, color} = props;
    return <h2 className={`title text-${color}`}>{text}</h2>
}
export default Title;