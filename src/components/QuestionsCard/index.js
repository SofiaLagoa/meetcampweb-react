import "./style.css";

function QuestionsCards({ currentQuestion, selectedAnswers, setSelectedAnswers, mostrarResultado }) {

    //identificador de que pregunta es, cuando se selecciona una respuesta
    //se asocia la pregunta con la respuesta
    function seleccionarRespuestas(id, valorOpcion) {
        //del array de respuestas filtrame las que tengan un id distinta a la que estoy seleccionando
        const otrasRespuestas = selectedAnswers.filter((respuesta) => respuesta.id !== id)
        setSelectedAnswers([...otrasRespuestas, {id, valorOpcion} ]);
    }

    return (
        <div className="box">
            <div className="box-padding-card">
                <span className="tag is-rounded is-danger is-light ">{currentQuestion.id}</span>
                <span><strong> {currentQuestion.question}</strong></span>
            </div>
            {
                currentQuestion.answers.map((opcion) => (
                    //funcion que me diga que pregunta se selecciono
                    <div key={opcion.id} 
                    onChange={() => seleccionarRespuestas(currentQuestion.id, opcion.is_correct)}
                    >
                        <input type="radio"
                        //el input se identifica con un contenedor y no con cada input
                        //pisa el valor de cada radio, porque no puede tener dos inputs al mismo tiempo seleccionados
                            id={`${currentQuestion.id}`}
                            name={currentQuestion.id}
                            value={opcion.answer}>
                        </input>
                        <label htmlFor={`${currentQuestion.id}`}
                        //validacion de respuestas correctas mediante un condicional en la clase
                        className={
                            mostrarResultado ?
                            opcion.is_correct ? "has-text-primary" : "has-text-danger"
                            : ""
                        }
                        >&nbsp;{opcion.answer}</label>
                    </div>
                ))
            }
        </div>
    )
}

export default QuestionsCards;