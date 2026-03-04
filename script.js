Papa.parse("GLB.Ts+dSST.csv", {
  download: true,
  header: true,
  complete: function(results) {
    const anos = results.data.map(row => row.Year);

    // Cria arrays para cada mes // parseFloat transforma o texto em numero
    const janeiro = results.data.map(row => parseFloat(row.Jan));
    const fevereiro = results.data.map(row => parseFloat(row.Feb));
    const marco = results.data.map(row => parseFloat(row.Mar));
    const abril = results.data.map(row => parseFloat(row.Apr));
    const maio = results.data.map(row => parseFloat(row.May));
    const junho = results.data.map(row => parseFloat(row.Jun));
    const julho = results.data.map(row => parseFloat(row.Jul));
    const agosto = results.data.map(row => parseFloat(row.Aug));
    const setembro = results.data.map(row => parseFloat(row.Set));
    const outubro = results.data.map(row => parseFloat(row.Oct));
    const novembro = results.data.map(row => parseFloat(row.Nov));
    const dezembro = results.data.map(row => parseFloat(row.Dec));

    new Chart(document.getElementById("grafico"), {
      type: "line",
      data: {
        labels: anos,
        datasets: [
          { label: "Janeiro", data: janeiro, borderColor: "red", fill: false },
          { label: "Fevereiro", data: fevereiro, borderColor: "blue", fill: false },
          { label: "Março", data: marco, borderColor: "green", fill: false },
          { label: "Abril", data: abril, borderColor: "orange", fill: false },
          { label: "Maio", data: maio, borderColor: "purple", fill: false },
          { label: "Junho", data: junho, borderColor: "brown", fill: false },
          { label: "Julho", data: julho, borderColor: "pink", fill: false },
          { label: "Agosto", data: agosto, borderColor: "cyan", fill: false },
          { label: "Setembro", data: setembro, borderColor: "magenta", fill: false },
          { label: "Outubro", data: outubro, borderColor: "black", fill: false },
          { label: "Novembro", data: novembro, borderColor: "gray", fill: false },
          { label: "Dezembro", data: dezembro, borderColor: "gold", fill: false }
        ]
      },
       options: {
       responsive: true,
      maintainAspectRatio: false
      }
    });
    
// Gráfico 2: Botao Anual ou Mes
const mediaAnual = results.data.map(row => {
  const valores = [
    parseFloat(row.Jan), parseFloat(row.Feb), parseFloat(row.Mar),
    parseFloat(row.Apr), parseFloat(row.May), parseFloat(row.Jun),
    parseFloat(row.Jul), parseFloat(row.Aug), parseFloat(row.Sep),
    parseFloat(row.Oct), parseFloat(row.Nov), parseFloat(row.Dec)
  ];
  // filtra valores validos ignorasNaN
  const validos = valores.filter(v => !isNaN(v));
  const soma = validos.reduce((a,b) => a+b, 0);
  return soma / validos.length;
});

const grafico2 = new Chart(document.getElementById("grafico2"), {
  type: "bar",
  data: {
    labels: anos,
    datasets: [{
      label: "Média Anual",
      data: mediaAnual,
      backgroundColor: mediaAnual.map(v => v > 0 ? "orange" : "blue")
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Temperatura Global - Média Anual"
      }
    }
  }
});

// Select para trocar dataset
document.getElementById("mesSelect").addEventListener("change", function(e) {
  let mes = e.target.value;
  let dados, titulo;
  switch(mes) {
    case "janeiro": dados = janeiro; titulo = "Janeiro"; break;
    case "fevereiro": dados = fevereiro; titulo = "Fevereiro"; break;
    case "marco": dados = marco; titulo = "Março"; break;
    case "abril": dados = abril; titulo = "Abril"; break;
    case "maio": dados = maio; titulo = "Maio"; break;
    case "junho": dados = junho; titulo = "Junho"; break;
    case "julho": dados = julho; titulo = "Julho"; break;
    case "agosto": dados = agosto; titulo = "Agosto"; break;
    case "setembro": dados = setembro; titulo = "Setembro"; break;
    case "outubro": dados = outubro; titulo = "Outubro"; break;
    case "novembro": dados = novembro; titulo = "Novembro"; break;
    case "dezembro": dados = dezembro; titulo = "Dezembro"; break;
    default: dados = mediaAnual; titulo = "Média Anual";
  }
  grafico2.data.datasets[0] = {
    label: titulo,
    data: dados,
    backgroundColor: dados.map(v => v > 0 ? "orange" : "blue")
  };
  grafico2.options.plugins.title.text = "Temperatura Global - " + titulo;
  grafico2.update();
});

//Grafico 3 
const datasetsMeses = [
  { label: "Janeiro", data: anos.map((ano,i)=>({x: parseInt(ano), y: janeiro[i]})), backgroundColor: "red", pointRadius: 4, pointStyle: "circle" },
  { label: "Fevereiro", data: anos.map((ano,i)=>({x: parseInt(ano), y: fevereiro[i]})), backgroundColor: "blue", pointRadius: 4, pointStyle: "circle" },
  { label: "Março", data: anos.map((ano,i)=>({x: parseInt(ano), y: marco[i]})), backgroundColor: "green", pointRadius: 4, pointStyle: "circle" },
  { label: "Abril", data: anos.map((ano,i)=>({x: parseInt(ano), y: abril[i]})), backgroundColor: "orange", pointRadius: 4, pointStyle: "circle" },
  { label: "Maio", data: anos.map((ano,i)=>({x: parseInt(ano), y: maio[i]})), backgroundColor: "purple", pointRadius: 4, pointStyle: "circle" },
  { label: "Junho", data: anos.map((ano,i)=>({x: parseInt(ano), y: junho[i]})), backgroundColor: "brown", pointRadius: 4, pointStyle: "circle" },
  { label: "Julho", data: anos.map((ano,i)=>({x: parseInt(ano), y: julho[i]})), backgroundColor: "pink", pointRadius: 4, pointStyle: "circle" },
  { label: "Agosto", data: anos.map((ano,i)=>({x: parseInt(ano), y: agosto[i]})), backgroundColor: "cyan", pointRadius: 4, pointStyle: "circle" },
  { label: "Setembro", data: anos.map((ano,i)=>({x: parseInt(ano), y: setembro[i]})), backgroundColor: "magenta", pointRadius: 4, pointStyle: "circle" },
  { label: "Outubro", data: anos.map((ano,i)=>({x: parseInt(ano), y: outubro[i]})), backgroundColor: "black", pointRadius: 4, pointStyle: "circle" },
  { label: "Novembro", data: anos.map((ano,i)=>({x: parseInt(ano), y: novembro[i]})), backgroundColor: "gray", pointRadius: 4, pointStyle: "circle" },
  { label: "Dezembro", data: anos.map((ano,i)=>({x: parseInt(ano), y: dezembro[i]})), backgroundColor: "gold", pointRadius: 4, pointStyle: "circle" }
];
  new Chart(document.getElementById("graficoScatterMeses"), {
    type: "scatter",
    data: { datasets: datasetsMeses },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { type: "linear", title: { display: true, text: "Ano" } },
        y: { title: { display: true, text: "Temperatura (°C)" } }
      }
    }
  }); 
  }    
});
