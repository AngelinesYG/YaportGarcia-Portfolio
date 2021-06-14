import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <ul>
                    <li>
                        <p>Angelines Yaport-Garcia</p>
                        <a href="https://www.linkedin.com/in/angelines-yaport-garcia/" target="https://www.linkedin.com/in/angelines-yaport-garcia/">
                            <i className="fab fa-linkedin" aria-hidden="false"></i>
                        </a>
                        <a href="https://github.com/AngelinesYG" target="https://github.com/AngelinesYG">
                            <i className="fab fa-github" aria-hidden="false"></i>
                        </a>
                        <a href="mailto:angelinesyg@gmail.com" target="mailto:angelinesyg@gmail.com">
                            <i className="far fa-envelope-open" aria-hidden="false"></i>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Footer
