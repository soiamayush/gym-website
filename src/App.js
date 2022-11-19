import './App.css';
import { BrowserRouter as Router} from "react-router-dom"
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reason from './components/Reasons/Reason';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <Router>

    <div className="App">
     <Hero/>
     <Programs/>
     <Reason/>
     <Plans/>
     <Testimonials/>
     <Join/>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
