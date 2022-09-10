import './style.css';

function Button({text, onClick, disabled}) {
    return (
        <button disabled={disabled} onClick={onClick} className='button is-info is-light'>
            {text}
        </button>
    )
}

export default Button;