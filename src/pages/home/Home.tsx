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
import { CardRectangleMedium } from "../../components/card-rectangle-medium/CardRectangleMedium";

class Home extends React.Component<Props> {

    TOTAL_POPULATION = 50374000;

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
        });

        let data = filter[0]?.data;
        const week = [...GroupByDayWeek(data,'date','daily_vaccinations')!]
        const RO = 1.75;
        const P = 1/(this.TOTAL_POPULATION/data?.[data?.length-1].people_fully_vaccinated!) || 0;
        const RP = (1 - P)*RO;
        const PC = 1 - 1/RP;
        return <>
            { !filter && <LoadingSpinner />}
            <div className="page-home">
                <div ><Title text={`Datos actualizados al ${new Date(data?.[data?.length-1].date).toLocaleDateString("es-ES")}`} color={'blue'}/></div>
                <div className="first-row">
                    <div className="one">
                        <CardPiewGraphic
                            keyDate={'daily_vaccinations'}
                            graphicColor="violet"
                            textColor="blue"
                            title="Distribución de vacunas durante los utlimos 5 dias"
                            footer={true}
                            textFooter={`Total de vacunas ${data?.[data?.length - 1].total_vaccinations}`}
                            borderColor="violet"
                            data={data?.slice(Math.max(data?.length - 6, 1))}
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

                        <AreaChart width={730} height={250} data={data}
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
                <div className="page-home-second-part">
                    <div className="sections">
                        <img src="./images/Divisions_Of_Colombia_Map_clip_art.svg" alt={'Mapa de colombia'}/>
                    </div>
                    <div className="sections right">
                        <div className="Conclusion">
                            <Title text={`Faltan 1000000 dias para llegar al 70% de la poblacion colombiana vacunada`} stylesText={"textTItle"} color={'red'}/>
                        </div>

                        <div className="triptico">
                            <div className="uno">
                                <CardRectangleMedium cardSquare={{
                                    borderColor: 'blue',
                                    size: 'l',
                                    colorCircle: 'blue',
                                    sizeCircle: 'bg',
                                    backgroundColor: 'blue'
                                }} title={'R0'} subTItle={RO.toString()}/>
                            </div>
                            <div className="dos">
                                <CardRectangleMedium cardSquare={{
                                    borderColor: 'violet',
                                    size: 'l',
                                    colorCircle: 'violet',
                                    sizeCircle: 'bg',
                                    backgroundColor: 'violet'
                                }} title={'RP'} subTItle={RP.toFixed(2).toString()}/>
                            </div>
                            <div className="tres">
                                <CardRectangleMedium cardSquare={{
                                    borderColor: 'red',
                                    size: 'l',
                                    colorCircle: 'red',
                                    sizeCircle: 'bg',
                                    backgroundColor: 'red'
                                }} title={'PC'} subTItle={`${PC.toFixed(2).toString()}%`}/>
                            </div>
                        </div>

                    </div>
                </div>





            </div>
        </>




    }
}

export default store(Home);
