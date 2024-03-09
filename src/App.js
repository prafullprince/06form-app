import './App.css';
import Form from './components/Form';
import {countries,citiesInIndia} from "./data"

function App() {
  return (
    <div className="flex justify-center">
      <Form countries={countries} citiesInIndia={citiesInIndia}/>
    </div>
  );
}

export default App;
