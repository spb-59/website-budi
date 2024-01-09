
import './index.css';
import './App.css';
import Header from './pages/Header';
import MyRoutes from './MyRoutes';
import Footer from './pages/Footer';
import Callbtn from './components/Callbtn';

function App() {
  return (
    <div className= 'App relative bg-white' >
         <Callbtn />
      <Header />
   
    
      <MyRoutes />
      <Footer />

    </div>
  );
}

export default App;
