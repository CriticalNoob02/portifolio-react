import "./graphics.sass"
import { Pie } from "react-chartjs-2";
import { Chart } from 'chart.js/auto'

function PieChart() {
    const data = {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          label: "Label do Toolip",
          data: [12, 19, 3],
          backgroundColor: ["red", "blue", "yellow"],
          borderWidth: 1,
        },
      ],
    };
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Chart.js Doughnut Chart',
            color: '#fff',
            font:{
                size: 15,
                family: "'Poppins', sans-serif"
            },
            
          },
        },
      };
    return (
      <div>
        <Pie data={data} options={options} />
      </div>
    );
  }


function Graphics(props){ 
    return(
        <div className="graphicsBox">
            <PieChart/>
        </div>
    )
}

export default Graphics