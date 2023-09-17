import  "../App.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = ()=>{
  const form=useRef()
  
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs.sendForm('service_39d7s49', 'template_efrn2f8', form.current, 'vqoAFG7RTQdDDpEfa')
      .then((result) => {
        alert("Message sent successfully");

      }, (error) => {
       alert(error.text);
      });
      e.target.reset()
  };


    return (
        <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact me </h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Get in Touch</div>
              <p>I'm extremely open to any kind of ideas exchange.<br/>So feel free to contact me .</p>
              <div className="icons">
                <div className="row">
                  <i className="fas fa-user" />
                  <div className="info">
                    <div className="head">Phone number</div>
                    <div className="sub-title">+216 54 192 964</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-map-marker-alt" />
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">Rue Ibn Rochd Teboulba 5080, Monastir , Tunisia</div>
                  </div>
                </div>
                <br/>
                <div className="row">
                  <i className="fas fa-envelope" />
                  <div className="info">
                    <div className="head">Emails</div>
                    <div className="sub-title">mohamedkhayri.allala@ensi-uma.tn</div>
                    <div className="sub-title">khayri.allala@outlook.fr</div>
                  </div>
                </div>
              </div>
            </div>





            <div className="column right">
            <div class="text">Message me</div>

            <form method="post" ref={form} onSubmit={sendEmail}>
              <div class="fields">
              <div class="field name">
              <input type="text" name="user_name" placeholder="Name" required />
              </div>
            <div class="field email">
            <input type="email" name="user_email" placeholder="Email" required />
          </div>
          </div>
           < div class="field">
            <input type="text" name="subject" placeholder="Subject" required />
          </div>
            <div class="field textarea">
         <textarea name="message" cols="30" rows="10" placeholder="Message.." required></textarea>
           </div>
          <div class="button-area">
         <button type="submit">Send message</button>
          </div>
           </form>
        </div>
        </div>
        </div>
      </section>
    )
}
