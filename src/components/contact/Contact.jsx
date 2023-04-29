import React from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_qnhfgb2", "template_g6vlj6o", e.target, 'MTnEQxbMSepVrPFY-',{
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      subject: e.target.subject.value,
    })
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
};

const Contact = () => {
  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Entre em contato</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Fale comigo.</h3>
          <p className="contact__details">Não gosta de formulários? Me mande um email. 👋</p>
        </div>

        <form action="" className="contact__form" onSubmit={sendEmail}>
        <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Insira seu nome' name='name'/>
            </div>
            
            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder='Insira seu email' name='email'/>
            </div>
          </div>

          <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Insira o assunto' name='subject'/>
            </div>

            <div className="contact__form-div contact__form-area">
             <textarea name="message" 
             id="" 
             cols="30" 
             rows="10" 
             className='contact__form-input' 
             placeholder='Escreva sua mensagem'
             ></textarea>
            </div>

            <button className="btn">Enviar mensagem</button>
        </form> 
      </div>
    </section>
  )
}

export default Contact