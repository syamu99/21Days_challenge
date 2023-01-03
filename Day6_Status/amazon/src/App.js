import Header from './Components/Header';
import Slideshow from './Components/grid1-slides'
import Grid2 from './Components/AmazonAdds/Grid2'
import { BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
   
      <Router>
        <Header />
        < Slideshow />
        <Grid2 />
          {/* < Categories /> */}

          
      </Router>
    

  );
}

export default App;
