import React from "react";
import {CardList} from "../../components/card-list/CardList";
import {CardPiewGraphic} from "../../components/card-piew-graphic/CardPiewGraphic";
import "./home.scss";
import store, {Props} from './store';
import {CardRectangle} from "../../components/card-rectangle/CardRectangle";
import {CardSmall} from '../../components/card-xs/CardSmall';
import {CardRectangleMedium} from '../../components/card-rectangle-medium/CardRectangleMedium';

class Home extends React.Component<Props> {

    list = [
        {title: "Bogota", value: 669076},
        {title: "Antioquia", value: 393199},
        {title: "Valle", value: 212816},
        {title: "Cundinamarca", value: 112627},
        {title: "barranquilla", value: 106335},
    ];

    componentDidMount() {
        this.props.getVaccinateCountry();
    }

    render() {
        const filter = this.props.vaccinateCountry?.filter(country => {
            return country.country === 'Colombia'
        })
        return (
            <div className="page-home">
                <div><h2>Hola soy un titulo que debo cambiar</h2></div>
                <div className="first-row">
                    <div className="one">
                        <CardPiewGraphic
                            keyDate={'daily_vaccinations'}
                            graphicColor="violet"
                            textColor="blue"
                            title="Distribución de vacunas durante los utlimos 5 dias"
                            footer={true}
                            textFooter={`Total de vacunas ${filter[0]?.data[filter[0]?.data?.length-1].total_vaccinations}`}
                            borderColor="violet"
                            data={filter[0]?.data.slice(Math.max(filter[0]?.data.length - 6, 1))}
                        />
                    </div>
                    <div className="one">
                        <CardPiewGraphic
                            graphicColor="violet"
                            textColor="blue"
                            title="Ucis durante los ultimos 5 dias"
                            footer={true}
                            textFooter="Ocupacion de Ucis"
                            borderColor="violet"
                            data={[]}
                        />
                    </div>
                    <div>
                        <CardList
                            graphicColor="violet"
                            textColor="blue"
                            title="Top Casos acumulados por departamento"
                            footer={false}
                            borderColor="violet"
                            data={this.list}
                            overflow={true}
                        />
                    </div>
                </div>
                <CardSmall cardSquare={{borderColor: 'blue', size: 'xs', colorCircle: 'blue', sizeCircle: 'sm'}}
                           text={'prueba'}/>
                <CardSmall cardSquare={{borderColor: 'red', size: 's', colorCircle: 'red', sizeCircle: 'sm'}}
                           text={'prueba'}/>
                <CardRectangleMedium cardSquare={{
                    borderColor: 'violet',
                    size: 'l',
                    colorCircle: 'violet',
                    sizeCircle: 'bg',
                    backgroundColor: 'violet'
                }} title={'item titulo'} subTItle={'61.232'}/>


                <CardRectangle borderColor={'violet'} size={'xl'} colorCircle={'violet'} sizeCircle={'xl'}/>
            </div>

        );
    }
}

export default store(Home);
