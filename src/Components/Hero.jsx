

function Hero() {
    return (
        <div className="hero" id="home">
            <div className="hero-left">
                <h1 className="inter margin">Madhumitha P</h1>
                <h2 className="inter margin">Front-End Developer</h2>
                <p className="inter margin" >I build clean, responsive, and user-friendly web applications.</p>
                <div className="button">
                    <a href="#project"><button className="btn-hero">View My Projects</button></a>
                    <a href="#Contact"><button className="btn-hero">Contact Me</button></a>
                </div>
            </div>
             <div className="hero-right">
                <div className="card card1 animate-float">React</div>
                <div className="card card2 animate-float">JavaScript</div>
                <div className="card card3 animate-float">UI Design</div>
            </div>
        </div>
    )

}

export default Hero