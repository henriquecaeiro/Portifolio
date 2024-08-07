import React from 'react'
import "./About.css"
import Image from "../../assets/avatar-2.svg"
import AboutBox from './AboutBox'


const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">Sobre mim</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className='about__img'/>

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">Profissional de TI com mais de três anos de experiência em desenvolvimento front-end e back-end, especializando-se em PHP e tecnologias web. Com formação em Análise e Desenvolvimento de Sistemas pela Estácio de Sá, possuo uma base sólida em JavaScript, PHP, frameworks modernos e controle de versão utilizando Git e GitHub. Apaixonado por resolver problemas e otimizar processos através de soluções digitais inovadoras.</p>
            <a href="/Curriculo.pdf" className='btn' rel="noreferrer" download>Baixar CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">HTML/CSS/Js/Bootstrap </h3>
                <span className="skills__number"><i class="fa-solid fa-code"></i></span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">ReactJS</h3>
                <span className="skills__number"><i class="fa-brands fa-react"></i></span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage react"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">NodeJs/Express</h3>
                <span className="skills__number"><i class="fa-brands fa-node-js"></i></span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage node"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">PHP</h3>
                <span className="skills__number"><i class="fa-brands fa-php"></i></span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage php"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">MongoDB/Mongoose</h3>
                <span className="skills__number"><i class="fa-brands fa-envira"></i></span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage mongoDb"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">MySql</h3>
                <span className="skills__number"><i class="fa-solid fa-database"></i></span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage mySql"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox/>
    </section>
  )
}

export default About