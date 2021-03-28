import React from 'react';
import {ICircle} from './Interface';
import './Circle.scss';

const Circle = (props:ICircle) =>{
    return <div className={`circle ${props.color}`} />
}

export default Circle;