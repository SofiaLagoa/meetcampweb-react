import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QuestionsCards from '../../components/QuestionsCard';

const API_URL = "https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter";

function Game() {

    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState([]);
    //preguntas seleccionadas
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    //respuestas
    const [result, setResult] =useState(0);

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
                                        <div key={itemQuestion.id} style={{marginBottom:"15px"}}>
                                            <QuestionsCards 
                                            key={itemQuestion.id}
                                            currentQuestion={itemQuestion} 
                                            selectedAnswers={selectedAnswers}
                                            //guardar las respuestas seleccionadas
                                            setSelectedAnswers={setSelectedAnswers}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </form>
                    )
                }
            </section>
        </div>

    )
}
export default Game;

