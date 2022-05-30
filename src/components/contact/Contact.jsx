import React, {useRef} from 'react';
import emailjs from 'emailjs-com'
import './contact.css'
import { ContactData } from './ContactData'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_58opvza', 'template_0fmcqn7', form.current, 'kWxi_dTDg52yCrF9v')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
        
      });

    e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {ContactData.map(data =><article key={data.id} className="contact__option">
            {data.icon}
            <h4>{data.header}</h4>
            <h5>{data.content}</h5>
            <a href='mailto:adeekotobiloba8@gmail.com}'>Send a message</a>
          </article>)}
        </div>

        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name'  placeholder='Your full name' required />
          <input type="email" name='name'  placeholder='Email' required />
          <textarea name="message" id=""  cols="30" rows="8" placeholder='Your message' required/>
          <button type='submit'  className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact