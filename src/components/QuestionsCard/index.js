
function QuestionsCards({ currentQuestion }) {

    return (
        <>
            <span>{currentQuestion.question}</span>
            <br/>
            {
                currentQuestion.answers.map((opcion) => (
                    <>
                    <span>{opcion.answer}</span>
                    <br/>
                    </>
                ))
            }
            <br />
        </>

    )
}

export default QuestionsCards;