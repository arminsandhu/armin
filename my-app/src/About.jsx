import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFile, faEnvelope, faMoon} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const aboutWrapper  = {
    flex: "1,100%",
    display: "flex",
    flexDirection: "row",
};


const aboutLinks = {
    flex: "10%",
    display: "flex",
    flexDirection: "column",
    margin: "100px 0px 0px 0px",
    alignContent: "space-around",
    alignItems: "center",
    justifyContent: "center",
}

const linkedin = {
    display: "flex",
}


const git = {
    display: "flex",
}


const resume = {
    display: "flex",
}


const mail = {
    display: "flex",
}

const a = {
    marginBottom: "30px",
    fontSize: "30px",
    color: "black"
}


const aboutInfo = {
    flex: "40%",
    display: "flex",
    justifyContent: "flex-start",
    textAlign: "left",
    flexDirection: "column",
    margin: "100px 120px 0px 50px"
}


const aboutPicture = {
    flex: "40%",
    display: "flex",
    // padding: "0px 0px 0px 150px"
}

const img = {
    width: "400px",
    height: "auto"
}


const infoStart = {
    margin: "0px 0px 0px 0px",
    fontSize: "30px"
    // color: "#6B9080"
}

const infoName = {
    margin: "0px 0px 0px 0px",
    fontSize: "100px"
    // color: "#A4C3B2"
}

const infoParagraph = {
    margin: "0px 0px 0px 0px",
    fontFamily: 'Montserrat',
    // color: "#E3E7E7"
}

const infoEnd = {
    margin: "30px 0px 0px 0px"
}


const About = () => {
    // const element = document.body;
    // darkMode.addEventListener("click", () => {
    //     element.classList.toggle("dark");
    // })
    
    return (
        <div style={aboutWrapper}>
            <div style={aboutLinks}>
                <div style={linkedin}>
                    <a href="https://www.linkedin.com/in/armin-sandhu/" target="_blank" ><FontAwesomeIcon style={a} icon={faLinkedin}></FontAwesomeIcon> </a>
                </div>
                <div style={git}>
                    <a href="https://github.com/arminsandhu" target="_blank" ><FontAwesomeIcon style={a} icon={faGithub}></FontAwesomeIcon> </a>
                </div>
                <div style={resume}>
                    <a href="https://drive.google.com/file/d/1n28FrT-F7SuTsU_eHtejh_rIQ4ujL7UZ/view?usp=sharing" target="_blank" ><FontAwesomeIcon style={a} icon={faFile}></FontAwesomeIcon> </a>
                </div>
                <div style={mail}>
                    <a href="mailto:arminsandhuu@gmail.com?" target="_blank" ><FontAwesomeIcon style={a} icon={faEnvelope}></FontAwesomeIcon> </a>
                </div>
                <div >
                    <FontAwesomeIcon style={a} icon={faMoon}></FontAwesomeIcon>
                </div>
            </div>
            <div style={aboutInfo}>
                <h3 style={infoStart}>Hey there! I'm</h3>
                <h1 style={infoName}>Armin.</h1>
                <p style={infoParagraph}>A 3rd year SWE at University of Calgary. I am constantly seeking ways to utilize my technical abilities in order to solve complex problems and improve the world around us. I am excited to apply my skills and problem solving abilities to create innovative solutions that create a real impact!</p>
                <h4 style={infoEnd}>Keep scrolling to learn whats new about me, and a few projects I've been working on.</h4>
            </div>
            <div style={aboutPicture}>
                <img style={img} src="the_pic.png" alt="Armin Sandhu"></img>
            </div>
        </div>
        
    )
}

export default About;