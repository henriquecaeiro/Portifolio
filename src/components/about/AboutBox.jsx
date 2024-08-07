import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title">3</h3>
                <span className="about__subtitle">Projetos completos</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-badge"></i>

            <div>
                <h3 className="about__title">5+</h3>
                <span className="about__subtitle">Certificados obtidos</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-clock"></i>

            <div>
                <h3 className="about__title">3</h3>
                <span className="about__subtitle">Anos de experiência</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox