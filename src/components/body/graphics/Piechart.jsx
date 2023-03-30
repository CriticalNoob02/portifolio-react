import { Pie } from "react-chartjs-2";
import { Chart } from 'chart.js/auto'
import  colors from "../../style/variables/colors";

const { colorThema } = colors

function PieChart(props) {
    const data = {
      labels: props.labelData,
      datasets: [
        {
          label: props.descriptionData,
          data: props.valueData,
          backgroundColor: props.color,
          hoverOffset: 4
        },
      ],
    }
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
                color: colorThema.primary_dark,
                padding: 10,
                font:{
                    size: 15,
                    family: "'Poppins', sans-serif"
                }
            }
          },
          tooltip: {
            backgroundColor: colorThema.backgroun_light,
            titleColor: colorThema.backgroun_dark,
            titleFont: {
              font:{
                family:"'Poppins', sans-serif"
              }
            },
            titleAlign: 'center',
            bodyColor: colorThema.backgroun_dark,
            bodyFont: {
              font:{
                family:"'Poppins', sans-serif"
              }
            },
            bodyAlign: 'center',
            borderWidth: 2,
            borderColor: colorThema.backgroun_dark
          },
        },
    }
    return (
      <div>
        <Pie
          data={data} 
          options={options}  
        />
      </div>
    )
  }

  export default PieChart