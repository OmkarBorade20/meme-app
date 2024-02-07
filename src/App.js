import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import Edit from './components/Edit';
import  Textadd from './components/textadd';



function App() {
  return (
  <div className='App'>
  <h1>Meme Generator</h1>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/edit" element={<Edit/>}/>
      <Route path="/textfield" element={<Textadd/>}/>
    </Routes>
  </div>
  );
}

export default App;
