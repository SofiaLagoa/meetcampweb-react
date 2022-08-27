import Button from "../../components/Button";
import { useNavigate } from 'react-router-dom';
import background from "../../assets/background.png";

function Home() {
    const navigate = useNavigate();

    const onClickButton = (url) => {
        navigate(url);
    }

    return (
        <section className="hero is-medium is-fullheight" style={{backgroundImage: `url(${background})`, backgroundSize: `cover`}}>
            <div className="hero-body">
                <div className="container has-text-centered">
                <Button onClick={() => onClickButton('/game')} text='MetCamp Quiz' />
                {/* <Button onClick={() => onClickButton('/about')} text='About Me' /> */}
                </div>
            </div>
        </section>
    )
}

export default Home;