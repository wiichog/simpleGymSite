import React from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import Button from 'material-ui/Button';
import ReactDom from 'react-dom';
import Stopwatch from 'react-stopwatch';
// react plugin for creating charts
import { withStyles, Grid } from "material-ui";
import {
  RegularCard,
  Table,
  ItemGrid
} from "components";


import dashboardStyle from "assets/jss/material-dashboard-react/dashboardStyle";
const styleT = {
        containerOutter: {
        width: '200px',
        height: '200px',
        },
        containerInner: {
        lineHeight: '10'
        }
}
class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

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
      // eslint-disable-next-line
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

  handleClick(){
    <Stopwatch
    seconds={0}
    minutes={0}
    hours={0}
    limit={"00:00:10"}
    withLoop={true}
    onCallback={() => console.log('Finish')}
   />
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
            <Button variant="raised" size="large" color="primary" onClick={(handleClick) => this.changeAction(handleClick)}>
                Iniciar Rutina
                

              </Button>
              
              <Stopwatch
                seconds={0}
                minutes={0}
                hours={0}
                limit={"10:00:00"}
                withLoop={true}
                onCallback={() => console.log('Finish')}
               />
               
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
