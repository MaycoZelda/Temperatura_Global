# 🌡️ Temperatura Global

Projeto de visualização de dados climaticos utilizando **Chart.js** e dados da NASA.

## 📊 Sobre o Projeto
Este projeto mostra a evolucaoo das anomalias de temperatura global desde 1880 até os dias atuais.  
Foram criados tres graficos para mostrar os dados:

## Explicação 
Usei o arquivo CSV que traz a temperatura so dos meses. Como nao tinha medias prontas, e o desafio é nao alterar o arquivo calculei direto no JavaScript, 
somando os 12 meses de cada ano e dividindo pelo total. Assim nao precisei mexer no arquivo original.

Usei Chart.js foi escolhi por ser simples e facil. Permite criar graficos interativos e legiveis com pouco codigo, ideal para quem está aprendendo. 
que é meu caso. Além disso, usei PapaParse para carregar e tratar os dados CSV de forma simples.

A ideia foi manter tudo simples e legível: graficos basicos (linha, barra e pontos) que mostram bem a tendencia de aquecimento global, 
sem excesso de codigo ou visual poluído.

- **Gráfico 1:** Linhas por mês + média anual calculada.
- **Gráfico 2:** Barras com alternância entre meses e média anual.
- **Gráfico 3:** Scatter plot (bolinhas) com todos os meses + média anual.

Os dados são carregados via **PapaParse** a partir do arquivo CSV `GLB.Ts+dSST.csv`.

## 🛠️ Tecnologias Utilizadas
- [Chart.js](https://www.chartjs.org/) → biblioteca para graficos interativos.
- [PapaParse](https://www.papaparse.com/) → parser de CSV em JavaScript.
- HTML + CSS + JavaScript.

## 📂 Estrutura
- `index.html` → pagina principal com os gráficos.
- `script.js` → codigo JavaScript para carregar e processar os dados.
- `GLB.Ts+dSST.csv` → arquivo de dados da NASA.
- `style.css` →  Pouco usado maispara locais especifico,

## 📈 Funcionalidades
- Cálculo da **média anual** diretamente no JavaScript.
- Alternância dinamica entre **meses** e **média anual** no Gráfico 2.
- Visualização clara das tendências de aquecimento global.

## 🔗 Fonte dos Dados
Os dados sao referencia dos dados da NASA:  
[https://data.giss.nasa.gov/gistemp/tabledata_v3](https://data.giss.nasa.gov/gistemp/tabledata_v3)
## Link acesso direto: **https://projeto-temperatura.netlify.app/**

<img width="1391" height="572" alt="image" src="https://github.com/user-attachments/assets/3df704aa-7adc-46cd-bc28-ed2010ae254f" />

<img width="1527" height="589" alt="{F123D762-5411-45F0-A09F-69BEC9C6F414}" src="https://github.com/user-attachments/assets/b90e080d-551b-4673-b38c-f8be872c23f2" />

<img width="1336" height="638" alt="image" src="https://github.com/user-attachments/assets/05dc4579-b90e-4f74-867b-8ebcd28a4a50" />



## 👨‍💻 Autor
Criado por **Mayco Nogueira**
