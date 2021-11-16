import React from 'react'
import { Line } from 'react-chartjs-2';
import { GraphycStyled } from './styled';

let pastMonth = []
const monthNames = ["Jan", "Fev", "Mar", "Abr", "Maio", "Jun",
  "Jul", "Ago", "Set", "Out", "Nov", "Dez"
];
const date = new Date();
for(let i = 1; i < 7; i++){
    pastMonth.push(monthNames[date.getMonth()-i])
}
const data = {
  labels: [pastMonth[0], pastMonth[1], pastMonth[2], pastMonth[3], pastMonth[4], pastMonth[5]],
  datasets: [
    {
      label: "Produtos",
      data: [0, 1000, 10000, 50000, 10000],
      fill: false,
      backgroundColor: '#1473E6',
      borderColor: '#1473E6',
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};
export default function Graphic() {
    return (
        <GraphycStyled>
            <h1>Estatísticas</h1>
            <Line data={data} options={options} />    
        </GraphycStyled>
    )
}
