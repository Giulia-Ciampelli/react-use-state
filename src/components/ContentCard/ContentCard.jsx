// importazioni
import style from '../ContentCard/ContentCard.module.css';

export default function ContentCard({ language }) {
    return (
        <div className={style.description}>
            <h2>
                {language.title}
            </h2>
            <p>
                {language.description}
            </p>
        </div>
    )
}