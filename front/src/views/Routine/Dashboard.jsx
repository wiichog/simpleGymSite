import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import {
  ContentCopy,
  Store,
  InfoOutline,
  Warning,
  DateRange,
  LocalOffer,
  Update,
  ArrowUpward,
  AccessTime,
  Accessibility
} from "@material-ui/icons";
import { withStyles, Grid } from "material-ui";

import {
  StatsCard,
  ChartCard,
  TasksCard,
  RegularCard,
  Table,
  ItemGrid
} from "components";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-react/dashboardStyle";

class Dashboard extends React.Component {
  state = {
    value: 0,
    routineData:[]
  };
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
            <ItemGrid xs={12} sm={12} md={7}>
                <RegularCard
                cardTitle="Pecho"
                content={
                  <Table
                          id="transactionData"
                          tableHeaderColor="primary"
                          tableHead={["Ejercicio","Equipo","Sets","Repeticiones","Peso"]}
                          tableData={
                            this.state.routineData
                          }
                        />
                }
                />
                <RegularCard
                cardTitle="Pecho"
                content={
                  <Table
                          id="transactionData"
                          tableHeaderColor="primary"
                          tableHead={["Ejercicio","Equipo","Sets","Repeticiones","Peso"]}
                          tableData={
                            this.state.routineData
                          }
                        />
                }
                />
                <RegularCard
                cardTitle="Pecho"
                content={
                  <Table
                          id="transactionData"
                          tableHeaderColor="primary"
                          tableHead={["Ejercicio","Equipo","Sets","Repeticiones","Peso"]}
                          tableData={
                            this.state.routineData
                          }
                        />
                }
                />
                <RegularCard
                cardTitle="Pecho"
                content={
                  <Table
                          id="transactionData"
                          tableHeaderColor="primary"
                          tableHead={["Ejercicio","Equipo","Sets","Repeticiones","Peso"]}
                          tableData={
                            this.state.routineData
                          }
                        />
                }
                />
                <RegularCard
                cardTitle="Pecho"
                content={
                  <Table
                          id="transactionData"
                          tableHeaderColor="primary"
                          tableHead={["Ejercicio","Equipo","Sets","Repeticiones","Peso"]}
                          tableData={
                            this.state.routineData
                          }
                        />
                }
                />
                <RegularCard
                cardTitle="Pecho"
                content={
                  <Table
                          id="transactionData"
                          tableHeaderColor="primary"
                          tableHead={["Ejercicio","Equipo","Sets","Repeticiones","Peso"]}
                          tableData={
                            this.state.routineData
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
