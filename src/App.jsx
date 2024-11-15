// importazioni
import { useState } from 'react'
import './App.css'
import languages from './assets/languages';

function App() {

  // logica
  const [active, setActive] = useState(0);

  // funzione per le tabs
  function contentShow(e) {
    const newActive = e.target.getAttribute('data-index');
    setActive(newActive);

    if (active == newActive) {
      setActive(null);
    }
  }

  // markup
  return (
    <>
      <div className="container">
        <div className="tabs">
          {languages.map((language, index) => (
            <div className={active == index ? 'tabs-item active' : 'tabs-item hide'} key={language.id}>
              <h2 onClick={contentShow} data-index={index}>
                {language.title}
              </h2>
              <div>
                {language.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App