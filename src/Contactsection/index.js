import Footer from '../Footer'
import './index.css';

const ContactSection = () => {
    return (
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>For any inquiries or to book the tour package, contact our representatives:</p>
        <ul>
          <li>Email: <a href="mailto:ck@travelunbounded.com">ck@travelunbounded.com</a></li>
          <li>Email: <a href="mailto:sk@travelunbounded.com">sk@travelunbounded.com</a></li>
          <li>Email: <a href="mailto:sg@travelunbounded.com">sg@travelunbounded.com</a></li>
          <li>Phone: +919845090014 (CK)</li>
          <li>Phone: +919739255255 (SK)</li>
          <li>Phone: +919884023028 (SG)</li>
        </ul>
  
        <h3>Have a Question? Inquire Now!</h3>
        <form className='form-container'>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
  
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
  
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
  
          <button type="submit">Submit</button>
        </form>
        <Footer/>
      </div>
    );
  };
  
export default ContactSection