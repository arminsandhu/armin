import './App.css';
import Header from './Header'
import About from './About'
import Navigation from './Navigation'
import Expirience from './Expirience'
import Skillset from './Skillset'
import Projects from './Projects'
import Good from './Good'
import Next from './Next'
import Contact from './Contact'

const appStyle = {
  height: "100%"
}


function App() {
  return (
    <div className="App" style={appStyle}>
      <Header />
      <About />
      <Navigation />
      <Expirience />
      <Skillset />
      <Projects />
      <Good />
      <Next />
      <Contact />
    </div>
  );
}

export default App;
