import './App.css';
import "../node_modules//bootstrap/dist/css/bootstrap.css";
import Footer from './components/header & footer/footer/footer';
import Banner from './components/home/BannerPage/banner';
import Victims from './components/home/service/services';
import Neededpeople from './components/home/need/neededpeople';
import Abouts from './components/home/abouts/about';
import Card1 from './components/home/card1/card1';
import Navbar from './components/header & footer/header/menubar';
import Menubar from './components/header & footer/header/menubar';


function App() {
  return (
  <>
  <Menubar/>
  <Banner/>
  <Card1/>
  <Neededpeople/>
  <Abouts/>
  <Victims/>
  <Footer/>
  </>
  );
}

export default App;
