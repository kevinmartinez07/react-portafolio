import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick, 
  className = '',
  ariaLabel,
  disabled = false,
  type = 'button'
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
