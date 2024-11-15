// importazioni
import style from '../ContentCard/ContentCard.module.css';

export default function EmptyCard() {
    return (
        <div className={style.description}>
            <p>
                Nessun linguaggio selezionato
            </p>
        </div>
    )
}