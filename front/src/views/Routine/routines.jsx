import React from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import Button from 'material-ui/Button';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';
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
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={5}>
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
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={2}>
            <Button variant="raised" size="large" color="primary" onClick={(e) => this.changeAction(e)}>
                Iniciar Rutina
              </Button>
              <div>
              
              </div>
              <Button variant="raised" size="large" color="primary" onClick={(e) => this.changeAction(e)}>
                Finalizar Rutina
              </Button>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={5}>
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
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={5}>
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
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={5}>
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
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={5}>
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
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
