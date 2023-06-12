import { Line } from "react-chartjs-2";
import { Chart } from 'chart.js/auto'
import  colors from "../../components/style/variables/colors";

const { colorThema } = colors

function LineChart(props) {
  const data = {
    labels: props.labelData,
    datasets: [{
        label: props.descriptionData,
        data: props.valueData,
        borderColor: colorThema.primary_light,
        hoverOffset: 4,
        tension: 0.3,
        fill: true
    }]
  }
  const options = {
      scales: {
          y: {
              min: 0,
              max: 12,
              title: {
                  color: colorThema.primary_dark
              }
          }
      },
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 1,
      plugins: {
          legend: {
              labels: {
                  color: colorThema.primary_dark,
                  padding: 10,
                  font: {
                      size: 20,
                      family: "'Poppins', sans-serif"
                  }
              }
          },
          tooltip: {
              backgroundColor: colorThema.backgroun_light,
              titleColor: colorThema.backgroun_dark,
              titleFont: {
                  font: {
                      family: "'Poppins', sans-serif"
                  }
              },
              titleAlign: "center",
              bodyColor: colorThema.backgroun_dark,
              bodyFont: {
                  font: {
                      family: "'Poppins', sans-serif"
                  }
              },
              bodyAlign: "center",
              borderWidth: 2,
              borderColor: colorThema.backgroun_dark
          }
      }
  }

    return (
      <div>
        <Line
          data={data} 
          options={options}  
          height= {450}
        />
      </div>
    )
  }

  export default LineChart