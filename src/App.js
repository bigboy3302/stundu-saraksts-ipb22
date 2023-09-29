import Diena from "./Diena";

function App() {
  const pirmdienasStundas = [
    "sports pie klintas",
    "Dabaszinības mīlu fiziku",
    "Vēsture",
    "🫥"
  ]
  const otradienasStundas = [
    "kissing my niggas",
    "suds janoliek",
    "pie krigerta jaiet ",
    "🫥"
  ]
  return (
    <>
      <div>te būs stundu saraksts šodien</div>
      <Diena diena="pirmdiena" stundas={pirmdienasStundas}/>
      <Diena diena="otradiena" stundas={otradienasStundas}/>
    </>
  )
}

export default App;

// Uztaisi divas jaunas komponentets:
// - Diena.js
// - Stunda.js