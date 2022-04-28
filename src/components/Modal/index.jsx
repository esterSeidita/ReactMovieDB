import "./style.css"

export default function Modal ({showModal}) {
    console.log(showModal)
    return (
        <div id={showModal} className="ModalWrapper">
            <div className="overlay"></div>
            <div className="modal">
                <h1>Yeeh!</h1>
                <p>Card aggiunta con successo.</p>
                <p>Fra tre secondi farò puff e tornerai alla homepage :D</p>
            </div>
        </div>
    )
}