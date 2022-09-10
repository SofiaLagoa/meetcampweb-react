import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QuestionsCards from '../../components/QuestionsCard';
import Button from '../../components/Button'

const API_URL = "https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter";

function Game() {

    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState([]);
    //preguntas seleccionadas
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    //respuestas
    const [result, setResult] = useState(0);
    const [mostrarResultado, setMostrarResultado] = useState(false);

    function calcularResultado() {
        console.log('boton validar')
        const respuestasCorrectas = selectedAnswers.filter((respuestas) => 
        respuestas.valorOpcion === true );
        console.log(respuestasCorrectas.length);
        setResult(respuestasCorrectas.length);
        setMostrarResultado(true);
    }

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setQuestions(data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="container">
            <section className="section">
                <nav className="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='is-active'>
                            <Link to='/game'>Game</Link>
                        </li>
                    </ul>
                </nav>
                <h1><strong>Harry Potter Quiz</strong></h1>
                <br />
                {
                    loading && (
                        <div>
                            <p>Loading...</p>
                        </div>
                    )
                }
                {
                    !loading && (
                        <form>
                            {
                                questions.map((itemQuestion) => {
                                    return (
                                        <div key={itemQuestion.id} style={{ marginBottom: "15px" }}>
                                            <QuestionsCards
                                                key={itemQuestion.id}
                                                currentQuestion={itemQuestion}
                                                selectedAnswers={selectedAnswers}
                                                //guardar las respuestas seleccionadas
                                                setSelectedAnswers={setSelectedAnswers}
                                                mostrarResultado={mostrarResultado}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </form>
                    )
                }
                <div className='level-right'>
                    { mostrarResultado &&
                        <p>{`Respuestas correctas: ${result}`}/{`${questions.length}`}</p>
                    }
                    <Button
                        disabled={selectedAnswers.length !== questions.length || mostrarResultado}
                        onClick={() => calcularResultado()} 
                        text="Validar" />
                    <Button 
                    disabled={true}
                    onClick={() => console.log('Reseteo de las respuestas')} 
                    text="Reseteo"/>
                </div>
            </section>
        </div>

    )
}
export default Game;

