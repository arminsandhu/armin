import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFile, faMoon, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const aboutWrapper  = {
    flex: "1,100%",
    display: "flex",
    flexDirection: "column",
};

const content = {
    display: "flex",
    flexDirection: "row"
}

const aboutLinks = {
    flex: "10%",
    display: "flex",
    flexDirection: "column",
    margin: "100px 0px 0px 0px",
    alignContent: "space-around",
    alignItems: "center",
    justifyContent: "center",
}

const icon = {
    display: "flex",
}


const a = {
    marginBottom: "30px",
    fontSize: "30px",
    color: "black"
}

const b = {
    marginTop: "100px",
    fontSize: "40px",
    color: "black" ,
    animation: "bounce 2s infinite",
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

}

const img = {
    width: "400px",
    height: "auto",
    borderRadius: 10,
    overflow: "hidden",
}


const infoStart = {
    margin: "0px",
    fontSize: "30px",
    display: "block",
    fontWeight: "bold"
  };
  

  const infoName = {
    display: "block",
    margin: "0px",
    fontSize: "100px",
    fontWeight: "500",
  };
  

const infoParagraph = {
    margin: "0px 0px 0px 0px",
    fontFamily: 'Montserrat',
}

const infoEnd = {
    display: "block",
    margin: "30px 0px 0px 0px",
    fontWeight: 'bold',
    fontSize: "1.2em"
}

const bar = {
    backgroundColor: "black",
    overflow: "hidden",
    bottom: "0",
    width: "100%",
    padding: "0px 150px 0px 0px",
    position: "-webkit-sticky",
    position: "sticky",
    top: "0"
}

const header = {
    display: 'block',
    fontSize: '1.5em',
    marginBlockStart: '0.83em',
    marginBlockEnd: '0.83em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    fontWeight: 'bold',
    marginLeft: '190px',
    color: 'white'
  };


const About = () => {
    // const element = document.body;
    // darkMode.addEventListener("click", () => {
    //     element.classList.toggle("dark");
    // })
    
    return (
        <div style={aboutWrapper}>
            <div style={content}>
                <div style={aboutLinks}>
                    <div style={icon}>
                        <a href="https://www.linkedin.com/in/armin-sandhu/" target="_blank" ><FontAwesomeIcon style={a} icon={faLinkedin}></FontAwesomeIcon> </a>
                    </div>
                    <div style={icon}>
                        <a href="https://github.com/arminsandhu" target="_blank" ><FontAwesomeIcon style={a} icon={faGithub}></FontAwesomeIcon> </a>
                    </div>
                    <div style={icon}>
                        <a href="https://drive.google.com/file/d/1n28FrT-F7SuTsU_eHtejh_rIQ4ujL7UZ/view?usp=sharing" target="_blank" ><FontAwesomeIcon style={a} icon={faFile}></FontAwesomeIcon> </a>
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
                    <FontAwesomeIcon style={b} icon={faArrowDown}></FontAwesomeIcon>
                </div>
                <div style={aboutPicture}>
                    <img style={img} src="the_pic.png" alt="Armin Sandhu"></img>
                </div>
            </div>
        </div>
        
    )
}

export default About;