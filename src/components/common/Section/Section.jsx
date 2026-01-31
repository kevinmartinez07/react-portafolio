import './Section.css';

const Section = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '' 
}) => {
  return (
    <section id={id} className={`section-wrapper ${className}`}>
      {(title || subtitle) && (
        <div className="section-header">
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
          {title && <h2 className="section-title">{title}</h2>}
        </div>
      )}
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default Section;
