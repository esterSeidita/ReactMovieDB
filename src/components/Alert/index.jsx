import "./style.scss"

export default function Alert ({content, response}) {
    return (
        <div className={`Alert ${response}`}>
            <p>{content}</p>
        </div>
    )
}