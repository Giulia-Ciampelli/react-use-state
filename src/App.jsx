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
              nome tab
            </h2>
            <div>
              content dinamico
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App