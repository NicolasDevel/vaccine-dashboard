import './CardSquare.scss';
import {Subtitle} from '../titles/Titles';
import {ICardSquare} from './Interface';
import Circle from '../circle/Circle';

export const CardSquare: React.FC<ICardSquare> = ({children, textColor, title, graphicColor, footer=false, textFooter, borderColor,clases='',overflow=false}) => {
    return <div className={`card-square decorarion-card-${borderColor} ${clases} ${overflow ? 'over-flow':''}`}>
        <section className='header'>
            <em><Subtitle text={title} color={textColor} /></em>
        </section>
        <section className='body'>
            {children}
        </section>
        {   footer && 
            <section className={`footer ${footer ? '': 'none'}`}>
                <div className='text-footer'>
                    <Circle color={graphicColor} size='sm' />
                    <Subtitle text={textFooter!} color={textColor} styles='margin'/> 
                </div>
                
            </section>
        }
    </div>
}