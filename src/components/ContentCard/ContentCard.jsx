export default function ContentCard({ language }) {
    return (
        <div className='description'>
            <h2>
                {language.title}
            </h2>
            <p>
                {language.description}
            </p>
        </div>
    )
}