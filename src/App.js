import logo from './logo.svg';
import Header from "./components/Header";
import Body from "./components/Body";
import Video from './components/Video';
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <img
          src={logo}
          alt="logo"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            display: "block",
            marginTop: "20px",
            marginLeft: "auto",
            marginRight: "auto",
            alignItems: "center",
          }}/>
      <Header/>
      <Body/>
      <Video/>
      <Footer/>
    </div>
  );
}

export default App;
