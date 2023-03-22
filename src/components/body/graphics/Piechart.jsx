import { Pie } from "react-chartjs-2";
import { Chart } from 'chart.js/auto'

function PieChart(props) {
    const data = {
      labels: props.labelData,
      datasets: [
        {
          label: props.descriptionData,
          data: props.valueData,
          backgroundColor: props.color,
        },
      ],
    }
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
                color: '#ece0e0',
                font:{
                    family: "'Poppins', sans-serif"
                }
            }
          },
          title: {
            display: true,
            text: props.titleText,
            color: '#ece0e0',
            font:{
                size: 15,
                family: "'Poppins', sans-serif"
            },
          },
          tooltip: {
            backgroundColor: '#ece0e0',
            titleColor: '#201a1b',
            titleFont: {
              font:{
                family:"'Poppins', sans-serif"
              }
            },
            titleAlign: 'center',
            bodyColor: '#201a1b',
            bodyFont: {
              font:{
                family:"'Poppins', sans-serif"
              }
            },
            bodyAlign: 'center',
            borderWidth: 2,
            borderColor: '#201a1b'
            
          },
        },
      }
    return (
      <div>
        <Pie data={data} options={options} />
      </div>
    )
  }

  export default PieChart