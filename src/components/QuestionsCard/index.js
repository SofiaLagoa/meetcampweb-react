import "./style.css";

function QuestionsCards({ currentQuestion, selectedAnswers, setSelectedAnswers }) {

    //identificador de que pregunta es, cuando se selecciona una respuesta
    //se asocia la pregunta con la respuesta
    function selectedAnswers(id, valorOpcion) {
        //del array de respuestas filtrame las que tengan un id distinta a la que estoy seleccionando
        const othersAnswers = selectedAnswers.filter((answer) => answer.id !== id)
        setSelectedAnswers([...othersAnswers, {id, valorOpcion} ]);
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
                    onChange={() => selectedAnswers(currentQuestion.id, opcion.is_correct)}
                    >
                        <input type="radio"
                        //el input se identifica con un contenedor y no con cada input
                        //pisa el valor de cada radio, porque no puede tener dos inputs al mismo tiempo seleccionados
                            id={`${currentQuestion.id}`}
                            name={currentQuestion.id}
                            value={opcion.answer}>
                        </input>
                        <label htmlFor={`${currentQuestion.id}`}> {opcion.answer}</label>
                    </div>
                ))
            }
        </div>
    )
}

export default QuestionsCards;