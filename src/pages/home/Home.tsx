import React from 'react';
import {CardList} from '../../components/card-list/CardList';
import {CardPiewGraphic} from '../../components/card-piew-graphic/CardPiewGraphic';

class Home extends React.Component {
    data = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 }
    ];
    list = [
        {title:'Uno',value:2450},
        {title:'Dos',value:2450},
        {title:'Tres',value:2450},
        {title:'Cuatro',value:2450},
    ]
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
            <CardList 
                graphicColor='violet'
                textColor='blue' 
                title='Lista' 
                footer={false} 
                borderColor='violet' 
                data={this.list}
                overflow={true}
            />
        </div>
        
    }
}

export default Home;