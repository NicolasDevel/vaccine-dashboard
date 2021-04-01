import React from "react"
import {EColor} from "../../models/enum"
import {CardSquare} from "../card-square/CardSquare"
import {ICardSquare} from "../card-square/Interface"
import {PiewGraphic} from "../piew-graphic/PiewGraphic"

export const CardPiewGraphic: React.FC<ICardSquare> = (props)=>{
    return <CardSquare {...props}> 
                <PiewGraphic data={props.data} color={EColor.secondary} />
            </CardSquare>
}