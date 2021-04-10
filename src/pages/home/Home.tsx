import React from "react";
import { CardList } from "../../components/card-list/CardList";
import { CardPiewGraphic } from "../../components/card-piew-graphic/CardPiewGraphic";
import "./home.scss";

class Home extends React.Component {
  data = [
    { name: "2-Abril", value: 8677 },
    { name: "3-Abril", value: 3278 },
    { name: "4-Abril", value: 8674 },
    { name: "5-Abril", value: 7507 },
    { name: "6-Abril", value: 13567 },
  ];
  list = [
    { title: "Bogota", value: 669076 },
    { title: "Antioquia", value: 393199 },
    { title: "Valle", value: 212816 },
    { title: "Cundinamarca", value: 112627 },
    { title: "barranquilla", value: 106335 },
  ];
  render() {
    return (
      <div className="page-home">
        <div className="first-row">
          <div className="one">
            <CardPiewGraphic
              graphicColor="violet"
              textColor="blue"
              title="Distribución de vacunas durante los utlimos 5 dias"
              footer={true}
              textFooter="Total vacunados 486.156"
              borderColor="violet"
              data={this.data}
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
      </div>
    );
  }
}

export default Home;
