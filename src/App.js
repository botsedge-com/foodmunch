import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import 'bootstrap/dist/css/bootstrap.css';


import Navbar from './Navbar';
import Home from './Home';
import WCU from './WCU';
import Menu from './Menu';
import Foodsection from './Foodsection';
import Paymentsection from './Paymentsection';
import Thankingsection from './Thankingsection';
import Followsection from './Followsection';
import Footersection from './Footersection';

function App() {
 
  return <>
  
  <Navbar />
  <Home />
  <WCU />
  <Menu />
  <Foodsection/>
  <Paymentsection/>
  <Thankingsection/>
  <Followsection/>
  <Footersection />

    {/* <div
      class="text-center home-bg-container d-flex justify-content-center flex-column"
    >
      <div style="color: #ffffff">
        <h1>Get Delicious Food Anytime</h1>
        <p>Eat Smart & Healthy</p>
        <button class="btn btn-warning">View Menu</button>
        <button class="btn btn-light">Order Now</button>
      </div>
    </div> */}
  </>
}

export default App;
