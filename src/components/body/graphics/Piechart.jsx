import { Pie } from "react-chartjs-2";
import { Chart } from 'chart.js/auto'
import { colorscolorThema } from "../../style/variables/colors";

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
                color: colorThema.backgroun_light ,
                padding: 20,
                font:{
                    size: 15,
                    family: "'Poppins', sans-serif"
                }
            }
          },
          title: {
            display: true,
            text: props.titleText,
            color: colorThema.backgroun_light,

            font:{
                size: 25,
                family: "'Poppins', sans-serif"
            },
          },
          tooltip: {
            backgroundColor: colorThema.backgroun_light,
            titleColor: colorThema.backgroun_light,
            titleFont: {
              font:{
                family:"'Poppins', sans-serif"
              }
            },
            titleAlign: 'center',
            bodyColor: colorThema.backgroun_light,
            bodyFont: {
              font:{
                family:"'Poppins', sans-serif"
              }
            },
            bodyAlign: 'center',
            borderWidth: 2,
            borderColor: colorThema.backgroun_light
            
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