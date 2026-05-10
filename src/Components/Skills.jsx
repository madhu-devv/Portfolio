import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";


function Skills() {

    return (
        <div className="skill-page">
            <h3>My Skills</h3>
            <div className="skill">
                <div className="React">
                    <svg className="progress" width="120" height="120">
                        <circle className="bg" cx="60" cy="60" r="50" />
                        <circle className="react-progress-ring progress-ring" cx="60" cy="60" r="50" />
                    </svg>

                    <div className="skill-content">
                        <FaReact className="icon react-icon " />
                        <p>React</p>
                    </div>
                </div>
                <div className="JavaScript">
                    <svg className="progress" width="120" height="120">
                        <circle className="bg" cx="60" cy="60" r="50" />
                        <circle className="js-progress-ring progress-ring" cx="60" cy="60" r="50" />
                    </svg>

                    <div className="skill-content">
                        <FaJs className="icon js-icon" />
                        <p>JavaScript</p>
                    </div>
                </div>
                <div className="HTML">
                    <svg className="progress" width="120" height="120">
                        <circle className="bg" cx="60" cy="60" r="50" />
                        <circle className="html-progress-ring progress-ring" cx="60" cy="60" r="50" />
                    </svg>

                    <div className="skill-content">
                        <FaHtml5 className="icon html-icon" />
                        <p>HTML</p>
                    </div>
                </div>
                <div className="CSS">
                    <svg className="progress" width="120" height="120">
                        <circle className="bg" cx="60" cy="60" r="50" />
                        <circle className="css-progress-ring progress-ring" cx="60" cy="60" r="50" />
                    </svg>

                    <div className="skill-content">
                        <FaCss3Alt className="icon css-icon" />
                        <p>CSS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills