import React from "react";
import { Chart } from "react-google-charts";

// TODO: remote no used components
// eslint-disable-next-line  no-unused-vars
const chartEvents = [
  {
    eventName: "select",
    callback({ chartWrapper }) {
      console.log("Selected ", chartWrapper.getChart().getSelection());
    }
  }
];
// TODO: no-unused-vars
// eslint-disable-next-line  no-unused-vars
const data = [
  ["age", "weight"],
  [8, 12],
  [4, 5.5],
  [11, 14],
  [4, 5],
  [3, 3.5],
  [6.5, 7]
];

// TODO no-unused-vars
// eslint-disable-next-line  no-unused-vars
const options = {
  title: "Age vs. Weight comparison",
  hAxis: { title: "Age", viewWindow: { min: 0, max: 15 } },
  vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
  legend: "none"
};

class Metrics extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Chart
            width={"95%"}
            height={"195%"}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Year", "Sales", "Expenses", "Profit"],
              ["2014", 1000, 400, 200],
              ["2015", 1170, 460, 250],
              ["2016", 660, 1120, 300],
              ["2017", 1030, 540, 350]
            ]}
            options={{
              // Material design options
              chart: {
                title: "Company Performance",
                subtitle: "Sales, Expenses, and Profit: 2014-2017"
              }
            }}
            // For tests
            rootProps={{ "data-testid": "2" }}
          />
        </div>
        <div>
          <Chart
            width={"95%"}
            height={"195%"}
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Year", "Sales", "Expenses", "Profit"],
              ["2014", 1000, 400, 200],
              ["2015", 1170, 460, 250],
              ["2016", 660, 1120, 300],
              ["2017", 1030, 540, 350]
            ]}
            options={{
              // Material design options
              chart: {
                title: "Company Performance",
                subtitle: "Sales, Expenses, and Profit: 2014-2017"
              }
            }}
            // For tests
            rootProps={{ "data-testid": "2" }}
          />
        </div>
      </div>
    );
  }
}

export default Metrics;
