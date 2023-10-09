import Diena from "./Diena";

function App() {

  const visasStundas = [
    {diena: "Pirmdiena", 
  stundas: [
    "sports pie klintas",
    "Dabaszinības mīlu fiziku",
    "Vēsture",
    "🫥"
  ]
},
{diena: "Otradiena", 
  stundas: [
    "dzersana",
    "pumpisi",
    "matene",
    "🫥"
  ]
},
{diena: "Trešdiena", 
  stundas: [
    " pie ",
    "zinības ",
    "Vē",
    "["
  ]
},
{diena: "ceturtdiena", 
  stundas: [
    "sports ",
    "Dabaszinības",
    "Vēst",
    "."
  ]
},
{diena: "Piekdiena", 
  stundas: [
    "klinta",
    " fiziku",
    "ure",
    "!"
  ]
}
   
  ];

  const DienasJSX = visasStundas.map((diena, indekss) => {
    return <Diena key={indekss} diena={diena.diena} stundas={diena.stundas} />
});
  return (
    <>
      <div>te būs stundu saraksts šodien</div>
      <Diena diena="pirmdiena" stundas={DienasJSX}/>
      
    </>
  )
}

export default App;

// Uztaisi divas jaunas komponentets:
// - Diena.js
// - Stunda.js