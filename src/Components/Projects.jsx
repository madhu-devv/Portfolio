

function Projects() {

    return (
        <div className="project" id="project">
            <div className="card-1">
                <h3 className="poppins">Ecommerce Website</h3>
                <p className="inter">A sleek e-commerce app built with React where users can search for products, view details, and add items to their cart effortlessly. Designed for smooth navigation and a clean shopping experience.</p>
                <div className="Tech inter" >
                    <span>React</span>
                    <span>JavaScript</span>
                    <span>HTML</span>
                    <span>CSS</span>
                </div>
                <a className="pro-btn" href="https://e-commerce-nine-pi-75.vercel.app/">View Project</a>
            </div>
            <div className="card-2">
                <h3 className="poppins">Maze Game</h3>
                <p className="inter">A fun and interactive maze game where players find their way out of a tricky labyrinth. Built with React, it features smooth controls, simple design, and an engaging challenge to test your navigation skills.</p>
                 <div className="Tech inter">
                    <span>React</span>
                    <span>JavaScript</span>
                    <span>HTML</span>
                    <span>CSS</span>
                </div>
                <a className="pro-btn" href="https://strange-maze.vercel.app/">Play Now</a>
            </div>
        </div>
    )
}

export default Projects