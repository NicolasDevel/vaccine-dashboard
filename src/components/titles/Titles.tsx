import {ITitles} from './Interface';

export const Title = (props:ITitles) => {
    const {text, color, styles,stylesText} = props;
    return <div className={styles}>
        <h2 className={`title text-${color} ${stylesText}`}>{text}</h2>
    </div>
}

export const Subtitle = (props:ITitles) => {
    const {text, color, styles, stylesText} = props;
    return <div className={styles}>
        <h5 className={`subtitle text-${color} ${stylesText}`}>{text}</h5>
    </div>
}