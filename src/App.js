import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import BannerBlock from './components/BannerBlock'
import Introduction from './components/Introduction';
import BestProduct from './components/BestProduct';
import Products from './components/Products';
import BrandStory from './components/BrandStory';
import HappenedIssue from './components/HappenedIssue';
import WhatHappened from './components/WhatHappened';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <BannerBlock />
      <Introduction>

      </Introduction>
      <BestProduct/>
       <Products />
       <BrandStory />
       <HappenedIssue />
       <WhatHappened />

       <Footer />
    </div>
  );
}

export default App;
