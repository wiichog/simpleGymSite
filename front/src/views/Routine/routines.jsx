import React from "react";
import PropTypes from "prop-types";
import axios from 'axios';
// react plugin for creating charts
import {
  ContentCopy,
  Warning
} from "@material-ui/icons";
import { withStyles, Grid } from "material-ui";
import {
  StatsCard,
  RegularCard,
  Table,
  ItemGrid
} from "components";
import {
  ArrowUpward,
  AccessTime
} from "@material-ui/icons";


import dashboardStyle from "assets/jss/material-dashboard-react/dashboardStyle";

class Dashboard extends React.Component {
  state = {
    value: 0,
    pechoData:[],
    piernaData:[],
    espaldaData:[],
    triceptData:[],
    hombroData:[],
    biceptData:[]

  };
  componentWillMount(){
    axios.get('http://localhost:8080/traerRutinas?userId=1').then(response => {
      var pechoData1=[]
      var piernaData1=[]
      var espaldaData1=[]
      var triceptData1=[]
      var hombroData1=[]
      var biceptData1=[]
    // eslint-disable-next-line
    for(var i=0;i<response.data.length;i++){
      const min = 10;
      const max = 12;
      const rand = Math.round(min + Math.random() * (max - min));
      var musculo = response.data[i]['Musculo']
      var equipo = response.data[i]['Equipo']
      var ejercicio = response.data[i]['Ejercicio']
      switch(musculo) {
        case "Pecho":
            pechoData1.push([ejercicio,equipo,4,rand])
            break;
        case "Pierna":
            piernaData1.push([ejercicio,equipo,4,rand])
            break;
        case "Espalda":
            espaldaData1.push([ejercicio,equipo,4,rand])
            break;
        case "Tricepts":
            triceptData1.push([ejercicio,equipo,4,rand])
            break;
        case "Hombro":
            hombroData1.push([ejercicio,equipo,4,rand])
            break;
        case "Biceps":
            biceptData1.push([ejercicio,equipo,4,rand])
            break;
    }
    }
    this.setState({ 
      pechoData:pechoData1,
      piernaData:piernaData1,
      espaldaData:espaldaData1,
      triceptData:triceptData1,
      hombroData:hombroData1,
      biceptData:biceptData1,
     });
    console.log(this.state)
    });
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    return (
      <div>
        <Grid container>
            <ItemGrid xs={12} sm={12} md={5}>
                <RegularCard
                cardTitle="Pecho"
                content={
                  <Table
                          id="pechoData"
                          tableHeaderColor="primary"
                          tableHead={["Ejercicio","Equipo","Sets","Repeticiones"]}
                          tableData={
                            this.state.pechoData
                          }
                        />
                }
                />
                <RegularCard
                cardTitle="Pierna"
                content={
                  <Table
                          id="piernaData"
                          tableHeaderColor="primary"
                          tableHead={["Ejercicio","Equipo","Sets","Repeticiones"]}
                          tableData={
                            this.state.piernaData
                          }
                        />
                }
                />
                <RegularCard
                cardTitle="Espalda"
                content={
                  <Table
                          id="espaldaData"
                          tableHeaderColor="primary"
                          tableHead={["Ejercicio","Equipo","Sets","Repeticiones"]}
                          tableData={
                            this.state.espaldaData
                          }
                        />
                }
                />
                <RegularCard
                cardTitle="Tricept"
                content={
                  <Table
                          id="triceptData"
                          tableHeaderColor="primary"
                          tableHead={["Ejercicio","Equipo","Sets","Repeticiones"]}
                          tableData={
                            this.state.triceptData
                          }
                        />
                }
                />
                <RegularCard
                cardTitle="Hombro"
                content={
                  <Table
                          id="hombroData"
                          tableHeaderColor="primary"
                          tableHead={["Ejercicio","Equipo","Sets","Repeticiones"]}
                          tableData={
                            this.state.hombroData
                          }
                        />
                }
                />
                <RegularCard
                cardTitle="Bicept"
                content={
                  <Table
                          id="biceptData"
                          tableHeaderColor="primary"
                          tableHead={["Ejercicio","Equipo","Sets","Repeticiones"]}
                          tableData={
                            this.state.biceptData
                          }
                        />
                }
                />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={5}>
              <StatsCard
                icon={ContentCopy}
                iconColor="orange"
                title="Used Space"
                description="49/50"
                small="GB"
                statIcon={Warning}
                statIconColor="danger"
                statLink={{ text: "Get More Space...", href: "#pablo" }}
              />
              <StatsCard
                icon={ContentCopy}
                iconColor="orange"
                title="Used Space"
                description="49/50"
                small="GB"
                statIcon={Warning}
                statIconColor="danger"
                statLink={{ text: "Get More Space...", href: "#pablo" }}
              />
              <StatsCard
                icon={ContentCopy}
                iconColor="orange"
                title="Used Space"
                description="49/50"
                small="GB"
                statIcon={Warning}
                statIconColor="danger"
                statLink={{ text: "Get More Space...", href: "#pablo" }}
              />
            </ItemGrid>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
