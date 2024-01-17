// pages/_app.js
import '../styles/App.css';

import Header from '../components/Header';

import Footer from '../components/Footer';
import Callbtn from '../components/Callbtn';

function _app({ Component, pageProps }) {
  return (
    <div className="relative App bg-white">
      <Callbtn />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default _app;