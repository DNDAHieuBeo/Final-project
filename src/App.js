import './App.css';
import Navbar from './components/Navbar/index.js';
import Gioithieu from './pages/gioi-thieu';
import Trangchu from './pages/trang-chu.js';
import Footer from './components/Footer/footer.js';

import ToChuc from './pages/tochuc';

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <Trangchu />
    //   <Footer />
    // </div>

    //Trang Gioi Thieu
    // <div className="App">
    //   <Navbar />
    //   {/* <Gioithieu /> */}
    //   <Footer/>
    // </div>

    //Trang To chuc
    <div className='App'>
      <Navbar/>
      <ToChuc/>
      <Footer/>
    </div>
  );
}

export default App;
