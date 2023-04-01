import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header';
import CardLoad from './components/card load/CardLoad';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QandA from './components/q&a/QandA';
function App() {
  return (
    <div className="App">
      <div className='container-lg'>
        <Header></Header>
        <hr/>
        <CardLoad></CardLoad>
        <QandA></QandA>
        <ToastContainer/>
      </div>
    </div>
  );
}

export default App;
