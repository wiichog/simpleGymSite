import React from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import ReactSpeedometer from "react-d3-speedometer";
import prom1 from "assets/img/prom1.jpg";
import prom2 from "assets/img/prom2.jpg";
import prom3 from "assets/img/prom3.jpg";
import Calendar from 'react-calendar';
import DateTimePicker from 'react-datetime-picker'
// react plugin for creating charts
import { withStyles, Grid } from "material-ui";
import Button from 'material-ui/Button';
import {
  ItemGrid,
  RegularCard,
  ProfileCard,
  Table,
} from "components";
import avatar from "assets/img/faces/marc.jpg";
import dashboardStyle from "assets/jss/material-dashboard-react/dashboardStyle";
import 'assets/jss/material-dashboard-react/reactPopUp.css';
import Popup from 'react-popup'


class Dashboard extends React.Component {
  state = {
    value: 0,
    rand: 0,
    date: new Date(),
    nombre: "",
    peso: "",
    edad: "",
    userId: "0",
    clinica :[],
  };
  saveDate(date){
    axios.get('http://localhost:8080/saveDate?date='+date+'').then(response => {
                // eslint-disable-next-line  
                console.log(this.state.date)
                if(response.data=="0"){
                    Popup.alert('Cita Guardada con exito');
                    var fechasAnteriores = this.state.clinica
                    fechasAnteriores.push([date,this.state.nombre])
                    this.setState({
                      clinica : fechasAnteriores
                    })
                  }
                else if(response.data=="1"){
                    Popup.alert('Ya contamos con una cita ese dia');
                  }
                else if(response.data=="99"){
                  Popup.alert('error');
                }
            })

  }
  changeAction(e){
    e.preventDefault();
    axios.get('http://localhost:8080/crearRutina?userId='+this.state.userId+'').then(response => {
    // eslint-disable-next-line  
    if(response.data=="0"){
        Popup.alert('Rutina creada exitosamente');
      }
      else{
        Popup.alert('Hola!! Tu ya tienes una rutina generada');
      }
    });
  }
  componentWillMount(){
    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);
    axios.get('http://localhost:8080/userId')
        .then(response => {
            this.setState({
                userId : response.data
              })
              if(this.state.userId!=0){
                axios.get('http://localhost:8080/clinica')
                .then(response => {
                  var temp = []
                    for(var i=0;i<response.data.length;i++){
                      temp.push([response.data[i].fecha,response.data[i].nombre])
                    }
                    this.setState({
                      clinica:temp
                     })
            })
            axios.get('http://localhost:8080/getInfoUser?userId='+this.state.userId+'').then(response => {
            // eslint-disable-next-line  
              this.setState({ 
                rand: Math.round(rand),
                nombre:response.data[0],
                edad:response.data[1],
                peso:response.data[2]
               });
            });
              }
    })
    
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  onChangeDateTimePicker(date){
    this.setState({
      date : date.toLocaleDateString("en-US")
    })
    this.saveDate(date.toLocaleDateString("en-US"))
  }
  logof(e){
    axios.get('http://localhost:8080/logOf').then(response => {
      this.setState({ 
        userId:"0"
       });
    });
  }
  render() {
    return (
      <div>
        {this.state.userId == "0" ? (
            <div>Por favor inicia sesion en la pestaña de Log In</div>
          ) : 
          <div>
            <Popup />
        {document.getElementById('popupContainer')}
        <Grid container>
        <ItemGrid xs={12} sm={12} md={4}>
          <ProfileCard
            avatar={avatar}
            title={this.state.nombre}
            description={"Edad: " +this.state.edad+ " Peso: "+ this.state.peso}
            footer={
              <div>
            <Button variant="raised" color="primary" onClick={(e) => this.changeAction(e)}>
              Generar Rutina
            </Button>
            <Button variant="raised"  color="secondary" onClick={(e) => this.logof(e)}>
            Cerrar sesion
            </Button>
            </div>
            }
          />
        </ItemGrid>
          <ItemGrid xs={12} sm={6} md={4}>
              Selecciona una fecha en el calendario para agendar una cita con la nutricionista:<br />
              <Calendar
                onChange={(date) => this.onChangeDateTimePicker(date)}
                value={this.state.date}
              />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={4}>
          Fechas que ya cuentan con una cita:
                       <Table
                          tableHeaderColor="primary"
                          tableHead={["Fecha","Usuario"]}
                          tableData={
                            this.state.clinica
                          }
                        />
          </ItemGrid>
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={4}>
          <img src={prom1} alt="prom1" />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
          <img src={prom2} alt="prom2" />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
          <img src={prom3} alt="prom3" />
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
