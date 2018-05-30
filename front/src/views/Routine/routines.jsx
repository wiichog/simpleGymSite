import React from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import Button from 'material-ui/Button';
// react plugin for creating charts
import { withStyles, Grid } from "material-ui";
import {
  RegularCard,
  Table,
  ItemGrid
} from "components";
import {
  PlayArrow,
  Pause,
  Stop,
  Save,
} from "@material-ui/icons";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import dashboardStyle from "assets/jss/material-dashboard-react/dashboardStyle";
import Popup from 'react-popup'

class Dashboard extends React.Component {
  state = {
    value: 0,
    pechoData:[],
    piernaData:[],
    espaldaData:[],
    triceptData:[],
    hombroData:[],
    biceptData:[],
    userId: "0",
    seconds:0,
    minutes:0,
    hours:0,
  };
  tick () {
    if(this.state.seconds==59){
      this.setState({
        seconds: 0,
        minutes: (this.state.minutes + 1)
      })
    }
    if(this.state.minutes==59){
      this.setState({
        minutes: 0,
        hours: (this.state.hours + 1)
      })
    }
    this.setState({seconds: (this.state.seconds + 1)})
  }
  startTimer () {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }
  stopTimer () {
    clearInterval(this.timer)
  }
  kill () {
    this.setState({
      seconds: 0,
      minutes: 0,
      hours:0
    })
  }
  save () {
    var time = this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds
    axios.get('http://localhost:8080/saveTime?time=' + time + "&userId=" + this.state.userId)
        .then(response => {
          if(response.data=="0"){
            Popup.alert('Tiempo guardado con exito');
          }
    })
    this.setState({
      seconds: 0,
      minutes: 0,
      hours:0
    })
  }
  componentWillMount(){
    axios.get('http://localhost:8080/userId')
            .then(response => {
              console.log(response)
                this.setState({
                    userId : response.data
                  })
                  if(this.state.userId!=0){
                    axios.get('http://localhost:8080/traerRutinas?userId='+this.state.userId+'').then(response => {
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
    })
    console.log(this.state.userId)
    
    
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const theme = createMuiTheme({
      palette: {//'secondary', 'action', 'disabled', 'error', 'primary'
        primary: {
          main: '#2196f3',//blue
        },
        action: {
          main: '#a7b2be',//gray
        },
        secondary: {
          main: '#fef200',//yellow
        },
        disabled: {
          main: '#ec4a47',//red
        },
      },
    });
    return (
      <div>
        {this.state.userId == "0" ? (
            <div>Por favor inicia sesion en la pestaña de Log In</div>
          ) : 
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


            <MuiThemeProvider theme={theme}>
                <Button variant="fab" color="primary" onClick={this.startTimer.bind(this)}>
                  <PlayArrow />
                </Button><br /><br />
                <Button variant="fab" color="secondary" onClick={this.stopTimer.bind(this)}>
                  <Pause />
                </Button><br /><br />
                <Button variant="fab" color="disabled" onClick={this.kill.bind(this)}>
                  <Stop />
                </Button><br /><br />
                <Button variant="fab" color="disabled" onClick={this.save.bind(this)}>
                  <Save />
                </Button><br /><br />
                <div>
                  Tiempo ejercitandote:<br />
                  Horas: {this.state.hours}<br />
                  Minutos: {this.state.minutes} <br />
                  Segundos: {this.state.seconds}<br />
                </div>
            </MuiThemeProvider>

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
        }
        
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
