import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contacts() {
    return (
        <div className="contact-page" id="Contact">
            <h3>Contact Me</h3>
            <div className="contacts">
                <div className="contact-left box">
                    <p className="inter">Have a project in mind or want to collaborate? Feel free to reach out.</p>
                    <p className="inter">madhumitha5274@gmail.com</p>
                    <a href="https://github.com/madhu-devv"><FaGithub /> Github</a>
                    <a href="https://www.linkedin.com/in/madhumitha-p-4849bb284"><FaLinkedin /> LinkedIn</a>
                </div> 
                <div className="contact-right box">
                    <form className="form">
                        <input className="block" type="text" placeholder="Your Name" />
                        <input className="block" type="email" placeholder="Your Email" />
                        <textarea className="block" name="message" id="message" placeholder="Message..."></textarea>
                        <button className="btn-contact">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacts