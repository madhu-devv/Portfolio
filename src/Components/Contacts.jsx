import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contacts() {

    const form = useRef();
    const [status, setStatus] = useState("");
    

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_e29of7j",
            "template_71nfske",
            form.current,
            "3Mu0xgo524cRz0wwm"
        )
        .then(() => {
            setStatus("Message sent successfully!");
            e.target.reset();
        })
        .catch((error) => {
            console.log(error);
            setStatus("Failed to send message");
        });
    };

    return (
        <div className="contact-page" id="Contact">
            <h3>Contact Me</h3>

            <div className="contacts">

                <div className="contact-left box">
                    <p className="inter">
                        I'm currently looking for frontend development opportunities and interesting projects to work on. Whether it's collaboration, freelance work, or just a tech conversation — feel free to reach out.
                    </p>

                    <p className="inter">
                        madhumitha5274@gmail.com
                    </p>

                    <a href="https://github.com/madhu-devv">
                        <FaGithub /> Github
                    </a>

                    <a href="https://www.linkedin.com/in/madhumitha-p-4849bb284">
                        <FaLinkedin /> LinkedIn
                    </a>
                </div>

                <div className="contact-right box">

                    <form ref={form} onSubmit={sendEmail} className="form">

                        <input
                            className="block"
                            type="text"
                            name="user_name"
                            placeholder="Your Name"
                            required
                        />

                        <input
                            className="block"
                            type="email"
                            name="user_email"
                            placeholder="Your Email"
                            required
                        />

                        <textarea
                            className="block"
                            name="message"
                            placeholder="Message..."
                            required
                        ></textarea>

                        <button type="submit" className="btn-contact">
                            Submit
                        </button>
                        <p className="status-message">{status}</p>

                    </form>

                </div>

            </div>
        </div>
    );
}

export default Contacts;









// import { FaGithub, FaLinkedin } from "react-icons/fa";

// function Contacts() {
//     return (
//         <div className="contact-page" id="Contact">
//             <h3>Contact Me</h3>
//             <div className="contacts">
//                 <div className="contact-left box">
//                     <p className="inter">Have a project in mind or want to collaborate? Feel free to reach out.</p>
//                     <p className="inter">madhumitha5274@gmail.com</p>
//                     <a href="https://github.com/madhu-devv"><FaGithub /> Github</a>
//                     <a href="https://www.linkedin.com/in/madhumitha-p-4849bb284"><FaLinkedin /> LinkedIn</a>
//                 </div> 
//                 <div className="contact-right box">
//                     <form className="form">
//                         <input className="block" type="text" placeholder="Your Name" />
//                         <input className="block" type="email" placeholder="Your Email" />
//                         <textarea className="block" name="message" id="message" placeholder="Message..."></textarea>
//                         <button className="btn-contact">Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Contacts