import React from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import ReactSpeedometer from "react-d3-speedometer";
import FacebookProvider, { EmbeddedPost,Page  } from 'react-facebook';
// react plugin for creating charts
import { withStyles, Grid } from "material-ui";
import Button from 'material-ui/Button';
import {
  ItemGrid,
  ChartCard,
  Table,
  RegularCard,
} from "components";
import {
  ArrowUpward,
  AccessTime
} from "@material-ui/icons";

import dashboardStyle from "assets/jss/material-dashboard-react/dashboardStyle";
import 'assets/jss/material-dashboard-react/reactPopUp.css';
import Popup from 'react-popup'

class Dashboard extends React.Component {
  state = {
    value: 0,
    rand: 0
  };
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
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  componentWillMount(){
    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);
    this.setState({ rand: Math.round(rand) });
  }
  render() {
    return (
      <div>
        <Popup />
        {document.getElementById('popupContainer')}
        <Grid container>
          <ItemGrid xs={12} sm={6} md={3}>
              <Button variant="raised" color="primary" onClick={(e) => this.changeAction(e)}>
                Generar Rutina
              </Button>
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
          <RegularCard
              plainCard
              cardTitle="Cantidad de personas dentro del gimnasio"
              content={
                <div style={{
                  width: "100px",
                  height: "250px",
                  background: "#EFEFEF"
                  }}>
                  <ReactSpeedometer
                    fluidWidth = {false}
                    startColor="green"
                    segments={10}
                    endColor="red"
                    value={this.state.rand}
                    needleTransitionDuration={4000}
                    needleTransition="easeElastic"
                    maxValue = {110}
                    ringWidth = {20}
                  />
              </div>
                
              }
            />
              
          </ItemGrid>
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={4}>
          <FacebookProvider appId="1802119613165004">
            <EmbeddedPost href="https://www.facebook.com/DinamicFitnessGym/photos/a.925163244219072.1073741829.886559111412819/1659876280747761/?type=3" width="500" />
          </FacebookProvider>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
          <FacebookProvider appId="1802119613165004">
            <EmbeddedPost href="https://www.facebook.com/DinamicFitnessGym/photos/a.925163244219072.1073741829.886559111412819/1659876280747761/?type=3" width="500" />
          </FacebookProvider>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
          <FacebookProvider appId="1802119613165004">
            <EmbeddedPost href="https://www.facebook.com/DinamicFitnessGym/photos/a.925163244219072.1073741829.886559111412819/1659876280747761/?type=3" width="500" />
          </FacebookProvider>
          </ItemGrid>
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={6}>
         
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
