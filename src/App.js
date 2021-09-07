
import './App.css';
import UseRed from './UseReducer/UseRed';
 import ConrextApi from "./ContextAPI/ContextApi";
import Main from './UseContex Hook/Main';
import ContextApi1 from './Sample useContexthook/ContextApi';
function App() {
  return (
    <div className="App">
      <UseRed/>
       <ConrextApi/>
       <Main/>
       <ContextApi1/>
    </div>
  );
}

export default App;
