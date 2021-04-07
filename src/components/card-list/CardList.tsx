import React from "react"
import {CardSquare} from "../card-square/CardSquare"
import {ICardSquare} from "../card-square/Interface"
import Circle from "../circle/Circle"
import {Subtitle, Title} from "../titles/Titles";
import './CardList.scss';


export const CardList: React.FC<ICardSquare> = (props)=>{
    const {data} = props;
    return <CardSquare {...props}> 
                <div className="container">
                    {data.map((item:any, index)=>{
                        return <div key={index}>
                            <div className={`item ${index < data.length-1 ? 'border-bottom':''}`}>
                                <Circle color={`${(index%3)+1===1?'violet-medium':(index%3)+1===2?'red-medium':'blue-medium'}`}/>
                                <div className='margin-left'>
                                    <em><Subtitle text={item.title} /></em>
                                    <Title styles='value' stylesText='size-letter' text={item.value}/>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </CardSquare>
}