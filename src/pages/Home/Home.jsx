import React from 'react'
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

const Home = ({ isDark }) => {
  const { isSmallMobile } = useHamburguer()

  return (
    <div className="home-cont">
      <div className="profile">
        <img 
          src={ProfileImg} 
          className={`profile-img ${isDark ? 'dark-shadow' : 'light-shadow'}`} 
          alt="profile-img" 
        />
      </div>
      <div className="sumary">
        <div className="text">
          <h3 className="iam"> Hola, soy</h3>
          <h1 className="name">Kevin Martinez</h1>
          <h2 className="developer">Desarrollador full stack</h2>
        </div>
        {!isSmallMobile ? (
          <>
            <div className="btns">
              <button
                className="cv"
                onClick={() =>
                  window.open('/Documents/CV_Kevin_Martinez.pdf')
                }
              >
                Visualizar CV
              </button>
              <button
                className={`contact ${isDark ? 'dark-btn' : 'ligth-btn'}`}
                onClick={() =>
                  document
                    .getElementById('contact')
                    .scrollIntoView({ behavior: 'smooth' })
                }
              >
                Contáctame
              </button>
            </div>
            <div className="rrss">
              <button
                aria-label='open linkedin'
                className="rrss-btn"
                onClick={() =>
                  window.open(
                    'http://linkedin.com/in/kevin-santiago-martinez-molina-b21a0b166'
                  )
                }
              >
                <LinkedinIcon className="rrss-icon" />
              </button>
              <button
                aria-label='open KevinM github'
                className="rrss-btn"
                onClick={() => window.open('https://github.com/kevinmartinez07')}
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
          <div className="small-btns">
            <button
              className="rrss-small-btn"
              onClick={() =>
                window.open('/Documents/CV_Kevin_Martinez.pdf')
              }
            >
              {isDark ? (
                <DownloadCvWhite className="rrss-icon" />
              ) : (
                <DownloadCV className="rrss-icon" />
              )}
            </button>
            <button
              className="rrss-small-btn"
              onClick={() =>
                document
                  .getElementById('contact')
                  .scrollIntoView({ behavior: 'smooth' })
              }
            >
              {isDark ? (
                <MailWhite className="rrss-icon" />
              ) : (
                <Mail className="rrss-icon" />
              )}
            </button>
            <button
              className="rrss-small-btn"
              onClick={() =>
                window.open(
                  'http://linkedin.com/in/kevin-santiago-martinez-molina-b21a0b166'
                )
              }
            >
              {isDark ? (
                <LinkedinSmallWhite className="rrss-icon" />
              ) : (
                <LinkedinSmall className="rrss-icon" />
              )}
            </button>
            <button
              className="rrss-small-btn"
              onClick={() => window.open('https://github.com/kevinmartinez07')}
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
