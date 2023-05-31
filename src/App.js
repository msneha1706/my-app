import Card from './CollageProject'
import Internship from './Internship'
import './App.css';
import Navbar from './Navbar';
import Contact from './Contact'
import Body from './Body';

function App() {
  return (
    <div className="App" style={{backgroundColor:"black"}}>
      <Body/>
      <Navbar/>
      <Card/>
      <Internship/>
      <Contact/>
    </div>
  );
}

export default App;
