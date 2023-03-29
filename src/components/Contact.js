import  "../App.css"
import React from 'react'

export const Contact = ()=>{
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
              <div className="text">Message me</div>
              <form action="mailto:khayri.allala@outlook.fr" method="post" encType="text/plain">
                <div className="fields">
                  <div className="field name">
                    <input type="text" placeholder="Name" required />
                  </div>
                  <div className="field email">
                    <input type="email" placeholder="Email" required />
                  </div>
                </div>
                <div className="field">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="field textarea">
                  <textarea cols={30} rows={10} placeholder="Message.." required defaultValue={""} />
                </div>
                <div className="button-area">
                  <button type="submit">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}