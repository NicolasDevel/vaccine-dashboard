import React from 'react';
import CardRectangleInfo from '../../components/card-rectangle-info/CardRectangleInfo';

class Home extends React.Component {
    render(){
        return <div>
            <CardRectangleInfo color={'blue'} title={'Vacunacion'} subtitle={'numero123456789'}/>   <br/>
            <CardRectangleInfo color={'red'} title={'Vacunacion'} subtitle={'numero123456789'}/>    <br/>
            <CardRectangleInfo color={'violet'} title={'Vacunacion'} subtitle={'numero123456789'}/> <br/>
        </div>
    }
}

export default Home;