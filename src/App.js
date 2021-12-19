import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainBanner from './components/MainBanner'
import Introduction from './components/Introduction';
import BestProduct from './components/BestProduct';
import Products from './components/Products';
import BrandStory from './components/BrandStory';
import HappenedIssue from './components/HappenedIssue';
import WhatHappened from './components/WhatHappened';
import Footer from './components/Footer';
import { BiUpArrow } from 'react-icons/bi';
import { useCallback } from 'react';
function App() {
  const goToTop = useCallback(() => {
    document.getElementById("root").scrollIntoView({behavior: "smooth"});
  }, [])
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <Introduction>

      </Introduction>
      <BestProduct/>
       <Products />
       <BrandStory />
       <HappenedIssue />
       <WhatHappened />

       <Footer />
       <button onClick={goToTop} className="text-primary p-1" style={{position: "fixed", bottom: "20px", right: "20px", borderColor: "#11182F", zIndex: "5000", backgroundColor: "#11182F"}}>
         <BiUpArrow size={30} />
       </button>
    </div>
  );
}

export default App;
