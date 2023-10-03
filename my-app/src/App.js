import './App.css';
import Header from './Header'
import About from './About'
import Navigation from './Navigation'
import Community from './Community'
import Proficiency from './Proficiency'
import Portfolio from './Portfolio'
import Good from './Good'
import Next from './Next'
import Contact from './Contact'

const appStyle = {
  height: "100%",
  // display: "block",
};

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



function App() {
  return (
    <div className="App" style={appStyle}>
      <Header />
      <About />
      {/* <div style={bar} className='navbar'>
                <h2 style={header}>
                    Armin Sandhu.
                </h2>
                <a href="#home" style={{marginLeft:"250px"}}>Home</a>
                <a href="#community">Community</a>
                <a href="#proficiency">Proficiency</a>
                <a href="#portfolio" >Portfolio</a>
                <a href="#timeline">Timeline</a>
                <a href="#contact">Contact</a>
            </div> */}
      <Navigation />
      <Community />
      <Portfolio />
      <Proficiency />
      <Good />
      <Next />
      <Contact />
    </div>
  );
}

export default App;
