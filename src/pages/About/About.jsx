import "../../styles/About.css";
import AboutImg from "../../assets/Images/Kevin/about-img.webp";
import { 
  ABOUT_HEADLINE, 
  ABOUT_HIGHLIGHTS, 
  ABOUT_STACK,
  ABOUT_STATS 
} from "../../constants/data";
import { CheckCircle2 } from 'lucide-react';
import DesarrolloWeb from '../../assets/Icons/Other/folder-code.svg?react';
import Consultores from '../../assets/Icons/Other/clipboard-list.svg?react';
import Educacion from '../../assets/Icons/Other/graduation-cap.svg?react';
import { scrollToSection } from '../../utils/scrollTo';

const About = () => {
  const iconMap = {
    'folder-code': DesarrolloWeb,
    'clipboard-list': Consultores,
    'graduation-cap': Educacion
  };

  const handleCTAClick = (action) => {
    switch (action) {
      case 'scroll-projects':
        scrollToSection('projects');
        break;
      case 'scroll-skills':
        scrollToSection('skills');
        break;
      case 'open-projects-doc':
        window.open('/Documents/Proyectos_HYG_Consultores_KevinMartinez.pdf', '_blank');
        break;
      case 'open-certificate':
        window.open('/Documents/Certificado_tecnolgia_desarrollo_de_software.pdf', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <div className="section about-section">
      <div className="name-section">
        <p className="section-subtitle">Conoce más</p>
        <h2 className="section-title">Sobre Mí</h2>
      </div>
      <div className="about-cont">
        <div className="top-row">
          <div className="about-img-section">
            <div className="image-wrapper">
              <img 
                src={AboutImg} 
                className="about-img" 
                alt="Kevin Martinez - Desarrollador Full Stack" 
              />
            </div>
          </div>
          
          <div className="about-content-section">
            {/* Headline + Value Proposition */}
            <div className="about-headline">
              <h3>{ABOUT_HEADLINE}</h3>
            </div>

            {/* Evidence-based Highlights */}
            <div className="about-highlights">
              {ABOUT_HIGHLIGHTS.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <CheckCircle2 className="highlight-icon" />
                  <p>{highlight}</p>
                </div>
              ))}
            </div>

            {/* Main Stack Line */}
            <div className="about-stack">
              <span className="stack-label">Stack principal:</span>
              <span className="stack-text">{ABOUT_STACK}</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="stats-row">
          {ABOUT_STATS.map((stat, index) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <div key={index} className="stat-card">
                <div className="stat-icon-wrapper">
                  <IconComponent className="stat-icon" />
                </div>
                <div className="stat-content">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-subtitle">{stat.subtitle}</div>
                  <button 
                    className="stat-cta"
                    onClick={() => handleCTAClick(stat.ctaAction)}
                    aria-label={stat.ctaText}
                  >
                    {stat.ctaText} →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
