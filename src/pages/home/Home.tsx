import React from 'react';
import {CardPiewGraphic} from '../../components/card-piew-graphic/CardPiewGraphic';
import CardRectangleInfo from '../../components/card-rectangle-info/CardRectangleInfo';
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
            <CardPiewGraphic
                graphicColor='violet'
                textColor='blue' 
                title='test' 
                footer={true} 
                textFooter='test footer' 
                borderColor='violet' 
                data={this.data}
            />
        </div>
        
    }
}

export default Home;