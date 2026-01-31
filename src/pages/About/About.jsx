import "../../styles/About.css";
import AboutImg from "../../assets/Images/Kevin/about-img.webp";
import ExperienceElement from "../../components/ExperienceElement/ExperienceElement";
import { useExperienceElement } from "../../hooks/useExperienceElement";
import { ABOUT_DESCRIPTION } from "../../constants/data";

const About = () => {
  const { dataToFill } = useExperienceElement();

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
              <img src={AboutImg} className="about-img" alt="Kevin Martinez - Desarrollador Full Stack" />
            </div>
          </div>
          <div className="about-text-section">
            <div className="experience-elements">
              {dataToFill.map((element, index) => (
                <ExperienceElement
                  key={`experience-${index}`}
                  icon={element.icon}
                  title={element.title}
                  description={element.description}
                  descriptionBold={element.descriptionBold}
                  button={element.button}
                  onclick={element.onclick}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="bot-row">
          <div className="experience-text">
            <p className="text">{ABOUT_DESCRIPTION}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
