import React from "react";
import { Doughnut } from "react-chartjs-2";

function DataChart(props) {
  const chartColors = ["#9D9D9D", "#F2613A", "#3A3B3F"];
  const data = props.data.map((item) => item.value);
  const labels = props.data.map((item) => item.label);
  return (
    <div>
      <div className="donut-container">
        <Doughnut
          data={{
            labels: labels,

            datasets: [
              {
                label: "# of Users",
                data: data,
                backgroundColor: chartColors,
                borderColor: chartColors,
                borderWidth: 1,
              },
            ],
          }}
          height={303}
          width={303}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: true,
                text: props.title,
              },
            },
          }}
        />
      </div>

      <div style={{ paddingLeft: 10 }}>
        {labels.map((label, index) => {
          return (
            <div className="legend-row">
              <div
                className="legend-box"
                style={{ backgroundColor: chartColors[index] }}
              ></div>
              <div className="legend-label">{label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DataChart;
