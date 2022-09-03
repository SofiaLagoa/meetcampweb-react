import "./style.css";

function QuestionsCards({ currentQuestion }) {
    return (
        <div className="box">
            <div className="box-padding-card">
                <span className="tag is-rounded is-danger is-light ">{currentQuestion.id}</span>
                <span><strong> {currentQuestion.question}</strong></span>
            </div>
            {
                currentQuestion.answers.map((opcion) => (
                    <div key={opcion.id}>
                        <input type="radio" id={`${opcion.id}`} name={opcion.id}
                            value={opcion.answer}></input>
                        <label htmlFor={`${opcion.id}`}> {opcion.answer}</label>
                    </div>
                ))
            }
        </div>
    )
}

export default QuestionsCards;