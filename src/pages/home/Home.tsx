import React from 'react';
import CardRectangleInfo from '../../components/card-rectangle-info/CardRectangleInfo';

class Home extends React.Component {
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
        </div>
    }
}

export default Home;