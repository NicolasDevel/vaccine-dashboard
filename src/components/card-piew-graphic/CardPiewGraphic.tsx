import React from "react"
import {EColor} from "../../models/enum"
import {CardSquare} from "../card-square/CardSquare"
import {ICardSquare} from "../card-square/Interface"
import {PiewGraphic} from "../piew-graphic/PiewGraphic"

export const CardPiewGraphic: React.FC<ICardSquare> = (props)=>{

    const {data, graphicColor, keyData, keyDate} = props;
    return <CardSquare {...props}>
                <PiewGraphic
                    data={data}
                    keyData={keyDate}
                    keyDate={keyData}
                    color={graphicColor === 'blue' ? EColor.primary : graphicColor === 'violet' ? EColor.secondary : EColor.third}
                />
            </CardSquare>
}