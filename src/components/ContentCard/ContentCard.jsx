import languages from "../../data/languages"

export default function ContentCard({ language }) {
    return (
        <>
            {languages.map()}
            <div className='description'>
                <h2>
                    {language.title}
                </h2>
                <p>
                    {language.description}
                </p>
            </div>
        </>
    )
}