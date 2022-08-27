import './style.css';

function Button({text, onClick}) {
    return (
        <button onClick={onClick} className='button is-info is-light'>{text}</button>
    )
}

export default Button;