
import './index.css';
import './App.css';
import Header from './pages/Header';
import MyRoutes from './MyRoutes';
import Footer from './pages/Footer';

function App() {
  return (
    <div className= 'App md:overflow-visible overflow-hidden ' >
      <Header />
    
      <MyRoutes />
      <Footer />

    </div>
  );
}

export default App;
