import './Footer.css';
function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/assets/social.png" alt="Twitter" className="social-icon" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="assets/facebook.png" alt="Facebook" className="social-icon" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="assets/instagram.png" alt="Instagram" className="social-icon" />
                </a>
                <a href="https://github.com/bjorgvinkodehode" target="_blank" rel="noopener noreferrer">
                    <img src="assets/github-logo.png" alt="GitHub" className="social-icon" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
