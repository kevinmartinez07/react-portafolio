import '../../styles/Home.css'
import { useHamburguer } from '../../hooks/useHamburguer'
import ProfileImg from '../../assets/Images/Kevin/profile-img.webp'
import GithubIconDark from '../../assets/Icons/Logos/GitHub_dark.svg?react'
import GithubIconLight from '../../assets/Icons/Logos/GitHub_light.svg?react'
import LinkedinIcon from '../../assets/Icons/Logos/linkedin.svg?react'
import DownloadCV from '../../assets/Icons/Other/CV.svg?react'
import DownloadCvWhite from '../../assets/Icons/Other/CV-white.svg?react'
import MailWhite from '../../assets/Icons/Other/mail-white.svg?react'
import Mail from '../../assets/Icons/Other/mail.svg?react'
import LinkedinSmallWhite from '../../assets/Icons/Other/linkedin-white.svg?react'
import LinkedinSmall from '../../assets/Icons/Other/linkedin.svg?react'
import GithubSmallWhite from '../../assets/Icons/Other/github-white.svg?react'
import GithubSmall from '../../assets/Icons/Other/github.svg?react'
import { PERSONAL_INFO } from '../../constants/data'
import { scrollToSection, openInNewTab } from '../../utils/scrollTo'

const Home = ({ isDark }) => {
  const { isSmallMobile } = useHamburguer()

  const handleCVClick = () => openInNewTab(PERSONAL_INFO.cvPath)
  const handleContactClick = () => scrollToSection('contact')
  const handleLinkedinClick = () => openInNewTab(PERSONAL_INFO.linkedin)
  const handleGithubClick = () => openInNewTab(PERSONAL_INFO.github)

  return (
    <div className="home-cont">
      <div className="profile">
        <div className="profile-image-wrapper">
          <img 
            src={ProfileImg} 
            className={`profile-img ${isDark ? 'dark-shadow' : 'light-shadow'}`} 
            alt={`${PERSONAL_INFO.name} - Desarrollador Full Stack`}
            loading="eager"
          />
        </div>
      </div>
      
      <div className="sumary">
        <div className="text">
          <h3 className="iam">{PERSONAL_INFO.greeting}</h3>
          <h1 className="name">{PERSONAL_INFO.shortName}</h1>
          <h2 className="developer">{PERSONAL_INFO.title}</h2>
        </div>
        
        {!isSmallMobile ? (
          <>
            <div className="btns">
              <button
                className="cv"
                onClick={handleCVClick}
                aria-label="Visualizar CV"
              >
                Visualizar CV
              </button>
              <button
                className={`contact ${isDark ? 'dark-btn' : 'light-btn'}`}
                onClick={handleContactClick}
                aria-label="Ir a contacto"
              >
                Contáctame
              </button>
            </div>
            
            <div className="rrss" role="list" aria-label="Redes sociales">
              <button
                aria-label='Abrir perfil de LinkedIn'
                className="rrss-btn"
                onClick={handleLinkedinClick}
              >
                <LinkedinIcon className="rrss-icon" />
              </button>
              <button
                aria-label='Abrir perfil de GitHub'
                className="rrss-btn"
                onClick={handleGithubClick}
              >
                {isDark ? (
                  <GithubIconDark className="rrss-icon" />
                ) : (
                  <GithubIconLight className="rrss-icon" />
                )}
              </button>
            </div>
          </>
        ) : (
          <div className="small-btns" role="list" aria-label="Acciones rápidas">
            <button
              className="rrss-small-btn"
              onClick={handleCVClick}
              aria-label="Visualizar CV"
            >
              {isDark ? (
                <DownloadCvWhite className="rrss-icon" />
              ) : (
                <DownloadCV className="rrss-icon" />
              )}
            </button>
            <button
              className="rrss-small-btn"
              onClick={handleContactClick}
              aria-label="Ir a contacto"
            >
              {isDark ? (
                <MailWhite className="rrss-icon" />
              ) : (
                <Mail className="rrss-icon" />
              )}
            </button>
            <button
              className="rrss-small-btn"
              onClick={handleLinkedinClick}
              aria-label="Abrir perfil de LinkedIn"
            >
              {isDark ? (
                <LinkedinSmallWhite className="rrss-icon" />
              ) : (
                <LinkedinSmall className="rrss-icon" />
              )}
            </button>
            <button
              className="rrss-small-btn"
              onClick={handleGithubClick}
              aria-label="Abrir perfil de GitHub"
            >
              {isDark ? (
                <GithubSmallWhite className="rrss-icon" />
              ) : (
                <GithubSmall className="rrss-icon" />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
