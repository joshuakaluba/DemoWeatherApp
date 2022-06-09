import PrimaryInputProps from '../models/PrimaryInputProps';

const PrimaryInput = ({ loading, disabled, type = 'text', placeholder, onChange, value }: PrimaryInputProps) => {
    return (
        <div className='field'>
            <div className={`control ${!!loading && loading === true ? 'is-loading' : ''}`}>
                <input className={`input is-large`}
                    type={type}
                    disabled={disabled}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange} />
            </div>
        </div>
    );
};

export default PrimaryInput;