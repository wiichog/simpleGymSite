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
  };
  saveDate(e){
    e.preventDefault();
    axios.get('http://localhost:8080/saveDate?date='+this.state.date+'').then(response => {
    // eslint-disable-next-line  
    if(response.data=="0"){
        Popup.alert('Cita Guardada con exito');
      }
      else{
        Popup.alert('Error');
      }
    });
  }
  changeAction(e){
    e.preventDefault();
    axios.get('http://localhost:8080/crearRutina?userId=1').then(response => {
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
    axios.get('http://localhost:8080/getInfoUser').then(response => {
    // eslint-disable-next-line  
      this.setState({ 
        rand: Math.round(rand),
        nombre:response.data[0],
        edad:response.data[1],
        peso:response.data[2]
       });
    });
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  onChangeDateTimePicker = date => this.setState({ date })
  render() {
    return (
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
              <Button variant="raised" color="primary" onClick={(e) => this.changeAction(e)}>
              Generar Rutina
            </Button>
            }
          />
        </ItemGrid>
          <ItemGrid xs={12} sm={6} md={8}>
          <Grid container>
          <ItemGrid xs={12} sm={6} md={6}>
          <RegularCard
              cardTitle="Calendario de Nutricion"
              content={
                <Calendar
                  onChange={this.onChange}
                  value={this.state.date}
                />
              }
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={6}>
              Ingresar Fecha para cita de nutricion:<br />
              <DateTimePicker
                onChange={this.onChangeDateTimePicker}
                value={this.state.date}
              /><br /><br />
              <Button variant="raised" color="primary" onClick={(e) => this.saveDate(e)}>
                  Guardar Cita
              </Button>
          </ItemGrid>
          </Grid>
          
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
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
