import React from 'react';
import {ICircle} from './Interface';
import './Circle.scss';

const Circle = (props:ICircle) =>{
    const {
        color,
        size = 'bg',
    } = props;
    return <div className={`circle ${size} ${color}`} />
}

export default Circle;