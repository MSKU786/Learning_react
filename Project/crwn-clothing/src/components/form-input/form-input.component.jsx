import './form-input.component.scss';

export const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      {' '}
      <input
        className="form-input"
        {...otherProps}
      />
      {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
