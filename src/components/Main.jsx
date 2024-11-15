// importazioni
import { useState } from 'react';
import languages from '../data/languages.js';
import ContentCard from './ContentCard/ContentCard.jsx';
import EmptyCard from './ContentCard/EmptyCard.jsx';

export default function Main() {

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
        <div className="container">
            <div className="tabs">
                {languages.map((language, index) => (
                    <div className={active == index ? 'tabs-item active' : 'tabs-item hide'} key={language.id}>
                        <h2 className='tabs-title' onClick={contentShow} data-index={index}>
                            {language.title}
                        </h2>
                    </div>
                ))}

                {/* card condizionale */}
                {active !== null ? (<ContentCard language={languages[active]}/>) : (<EmptyCard />)}
            </div>
        </div>
    )
}