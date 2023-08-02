const Footer = () => {
    const socialMediaLinks = {
      facebook: 'https://www.facebook.com/travelunbounded',
      twitter: 'https://twitter.com/travelunbounded',
      instagram: 'https://www.instagram.com/travelunbounded',
    };
  
    const currentYear = new Date().getFullYear();
    const copyrightInfo = `© ${currentYear} Travel Unbounded World Pvt Ltd. All rights reserved.`;
  
    return (
      <footer>
        <div>
          <h3>Follow Us</h3>
          <ul>
            <li><a href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href={socialMediaLinks.twitter} target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
        <p>{copyrightInfo}</p>
        <p>Disclaimer: Insert any necessary disclaimers here.</p>
      </footer>
    );

}

export default Footer;