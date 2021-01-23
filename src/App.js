
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home'
import Products from './components/pages/Products';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/products" exact component={Products}></Route>
          <Route path="/blog" exact component={Blog}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          
        </Switch>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
