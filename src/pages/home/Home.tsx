import React from 'react';
import CardRectangleInfo from '../../components/card-rectangle-info/CardRectangleInfo';
import {PiewGraphic} from '../../components/piew-graphic/PiewGraphic';
import {EColor} from '../../models/enum';

class Home extends React.Component {
    data = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 }
    ];
    render(){
        return <div>
            <CardRectangleInfo color={'blue'} title={'Vacunacion'} subtitle={'numero123456789'}/>   <br/>
            <CardRectangleInfo color={'red'} title={'Vacunacion'} subtitle={'numero123456789'}/>    <br/>
            <CardRectangleInfo color={'violet'} title={'Vacunacion'} subtitle={'numero123456789'}/> <br/>
            <h2 className="variation">
                aksdh
            </h2>
            <h5>ss</h5>
            <h2>sss</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit similique, dolor natus aliquid odit voluptate maiores delectus? Repellendus tempore necessitatibus vel? Voluptate nesciunt magnam exercitationem facilis voluptatum consectetur quisquam eius.</p>
            <PiewGraphic data={this.data} color={EColor.primary} />
            <PiewGraphic data={this.data} color={EColor.secondary} />
            <PiewGraphic data={this.data} color={EColor.third} />
        </div>
        
    }
}

export default Home;