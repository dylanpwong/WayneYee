// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Splash from './components/main/splash';

function App() {
  return (
    <div className="wrapper">
      <div className='header'>
        <Header/>
      </div>
      <div className='mainContentWrapper'>
        <Splash/>
      </div>  
      <div className='footer'>

      </div>
    </div>
  );
}

export default App;
