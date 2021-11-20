import React, { useState } from 'react';
import { Chart } from "react-google-charts";

/* import logo from './logo.svg';
import './App.css';
 */
function App() {
  const [options, setOptions] = useState({
    title: 'Acertos perguntas'
  });
  const [optionsBar, setOptionsBar] = useState({
    title: 'E-mails Enviados'
  });
  const [data, setData] = useState([
    ['Pergunta', 'Quantidade de Acertos'],
    ['Pergunta 1', 100],
    ['Pergunta 2', 80],
    ['Pergunta 3', 50],
    ['Pergunta 4', 50],
  ]);
  const [dataBar, setDataBar] = useState([
    ['E-mails', '50', '10'],
    ['Sucesso, Erros', 50, 10],

  ])
  return (
    <div className="App">
      <header className="App-header">
        <div style={{display: "flex"}}>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="BarChart"
            data={dataBar}
            options={optionsBar}
          />
            <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            data={data}
            options={options}
          />
        </div>
      </header>
    </div>
  );
}

export default App;