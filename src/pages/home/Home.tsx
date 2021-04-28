import React from "react";
import {CardList} from "../../components/card-list/CardList";
import {CardPiewGraphic} from "../../components/card-piew-graphic/CardPiewGraphic";
import "./home.scss";
import store, {Props} from './store';

import {AreaChart, Area, XAxis, YAxis, Tooltip, Legend} from 'recharts';

import {Subtitle, Title} from "../../components/titles/Titles";
import { GroupByDayWeek } from "../../utils/Date";
import { AverageAccumulate } from "../../utils/Statics";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";

class Home extends React.Component<Props> {

    state = {
        list : [
            {title: "Bogota", value: 770603},
            {title: "Antioquia", value: 458194},
            {title: "Valle", value: 233192},
            {title: "Barranquilla", value: 144935},
            {title: "Cundinamarca", value: 123706},
        ]
    }


    componentDidMount() {
        this.props.getVaccinateCountry();
    }

    render() {
        const { list } = this.state;
        const filter = this.props.vaccinateCountry?.filter(country => {
            return country.country === 'Colombia'
        })
        const week = [...GroupByDayWeek(filter[0]!?.data,'date','daily_vaccinations')!]

        return <>
            { !filter && <LoadingSpinner />}
            <div className="page-home">
                <div ><Title text={`Datos actualizados al ${new Date(filter[0]?.data[filter[0]?.data.length-1].date).toLocaleDateString("es-ES")}`} color={'blue'}/></div>
                <div className="first-row">
                    <div className="one">
                        <CardPiewGraphic
                            keyDate={'daily_vaccinations'}
                            graphicColor="violet"
                            textColor="blue"
                            title="Distribución de vacunas durante los utlimos 5 dias"
                            footer={true}
                            textFooter={`Total de vacunas ${filter[0]?.data[filter[0]?.data?.length - 1].total_vaccinations}`}
                            borderColor="violet"
                            data={filter[0]?.data.slice(Math.max(filter[0]?.data.length - 6, 1))}
                        />
                    </div>

                    <div className="one">
                        <CardPiewGraphic
                            keyDate={'value'}
                            graphicColor="violet"
                            textColor="blue"
                            title="Porcentaje por dia de semana"
                            footer={true}
                            textFooter="Distribucciion de vacunas por dia de la semana"
                            borderColor="violet"
                            data={week}
                        />
                    </div>
                    <div>
                        <CardList
                            graphicColor="violet"
                            textColor="blue"
                            title="Top Casos acumulados por departamento"
                            footer={false}
                            borderColor="violet"
                            data={list}
                            overflow={true}
                        />
                    </div>
                </div>

                <div className={'graficas-rectangulares'}>
                    <div className={'grafica-uno'}>
                        <Subtitle text={'Vacunados vs vacunados totalmente'} color={'blue'} styles={'margin-bo'}/>

                        <AreaChart width={730} height={250} data={filter[0]?.data}
                                   margin={{top: 10, right: 10, left: 22, bottom: 10}}>
                            <Legend verticalAlign="top" height={36}/>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="date"/>
                            <YAxis/>

                            <Tooltip/>
                            <Area type="monotone" dataKey="people_fully_vaccinated" stroke="#8884d8" fillOpacity={1}
                                  fill="url(#colorUv)"/>
                            <Area type="monotone" dataKey="total_vaccinations" stroke="#82ca9d" fillOpacity={1}
                                  fill="url(#colorPv)"/>
                        </AreaChart>
                    </div>

                    <div className={'grafica-uno'}>
                        <Subtitle text={'Historico de vacunados vs Promedio Acumulado'} color={'blue'} styles={'margin-bo'}/>

                        <AreaChart width={730} height={250} data={AverageAccumulate(filter[0]!?.data,'daily_vaccinations')}
                                   margin={{top: 10, right: 10, left: 22, bottom: 10}}>
                            <Legend verticalAlign="top" height={36}/>
                            <defs>

                                <linearGradient id="colorSv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="date"/>
                            <YAxis/>

                            <Tooltip/>
                            <Area type="monotone" dataKey="daily_vaccinations" stroke="#82ca9d" fillOpacity={1}
                                  fill="url(#colorSv)"/>
                            <Area type="monotone" dataKey="average" stroke="#ED756A" fillOpacity={0}/>
                        </AreaChart>
                    </div>
                </div>



            </div>
        </>




    }
}

export default store(Home);
