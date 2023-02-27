import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Video from './components/Video';
import Footer from "./components/Footer";
import Empty from "./components/Empty";
import MyButton from './components/MyButton';
function App() {
  const [canView,check] = useState(false);
  const checkAuthentication = () => {
    check(!canView);
  };
  function confirmed() {
    checkAuthentication();
  }
  return (
    <div>
      <Header/>
      <Body/>
      <Video/>
      <MyButton onClick={confirmed} text="Programme"/>
      {canView ? (<Empty text="Friday 10th March 2023"/>) : ("")}
      <Footer/>
    </div>
  );
}

export default App;
