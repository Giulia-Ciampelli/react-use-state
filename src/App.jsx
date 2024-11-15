// importazioni
import { useState } from 'react'
import './App.css'
import languages from './assets/languages';

function App() {

  // logica
  const [active, setActive] = useState(0);

  // markup
  return (
    <>
      <div className="tabs">
        {languages.map((language, index) => (
          <div className="tabs-item">
            <h2>
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