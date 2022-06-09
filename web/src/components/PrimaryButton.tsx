import PrimaryButtonProps from '../models/PrimaryButtonProps';

const PrimaryButton = ({ loading, disabled, text, onClick }: PrimaryButtonProps) => {
    return (
        <button className={`button is-large is-responsive is-dark is-fullwidth ${loading ? 'is-loading' : ''}`}
            onClick={onClick}
            disabled={disabled}>
            {text}
        </button>
    )
}

export default PrimaryButton;