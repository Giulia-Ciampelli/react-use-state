// importazioni
import { useState } from 'react'
import './App.css'
import languages from './assets/languages';

function App() {

  // logica
  const [active, setActive] = useState(0);

  // funzione per le tabs
  function contentShow(e) {
    const newActive = e.target.getAttribute('index');

    setActive(newActive);
  }

  // markup
  return (
    <>
      <div className="tabs">
        {languages.map((language, index) => (
          <div className="tabs-item" key={index}>
            <h2 onClick={contentShow} data-index={index}>
              {language.title}
            </h2>
            <div>
              {language.description}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App