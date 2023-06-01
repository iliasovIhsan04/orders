import "./App.css";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Portfolio from "./components/portfolio/portfolio";
import Section from "./components/section/section";
import Services from "./components/services/services";

function App() { 
  return (
    <div className="App">
      <Header />
      <Main />
      <Section/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;