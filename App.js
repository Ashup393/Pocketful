import Contactpage from './Components/Contactpage';
import Homepage from './Components/Homepage';
import Crouselpage from './Components/Crouseldata';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'; 

import Homecontent from './Components/Homecontent';
import Mission from './Components/Mission';
import Aboutme from './Components/Aboutme';

function App() {
  return (
    <div className="App" >
   <Router>
    <Routes>  
                 <Route exact path='/' element={<Homecontent />}></Route> 
                 {/* <Route exact path='/Homecontent' element={<Homecontent />}></Route>  */}
                 <Route exact path='/Crousel' element={<Crouselpage/>}></Route>  
                 <Route exact path='/Contact' element={<Contactpage />}></Route> 
                 <Route exact path='/Mission' element={<Mission/>}/>
                 <Route exact path='/Aboutme' element={<Aboutme/>}/>
          </Routes>  
    </Router>
   
    </div>
  );
}

export default App;
