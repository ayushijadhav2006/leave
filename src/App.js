import "primeflex/primeflex.css";
import './components/Sidebar.css';
import { PrimeReactProvider } from "primereact/api";
import HeadlessDemo from "./components/Slidebar";
import Header from "./components/Header";
import {BrowserRouter , Route , Routes} from "react-router-dom";
import Forecast from "./components/Forecast";
import Graph from "./components/Graph";
import Audit from "./components/Audit";
import Count from "./components/Count";
import PredictCount from "./components/PredictCount";
import { Welcome } from "./components/Welcome";

export default function App() {
  
  return (
    <PrimeReactProvider>
        <BrowserRouter>
        <Header />
        <HeadlessDemo />
        <div style={{ marginLeft: '200px', padding: '20px' }}>
        <Routes>  
          <Route path="/" element={<Welcome />}/>
          <Route path="/Forecast" element={<Forecast />}/>
          <Route path="/Graph" element={<Graph />}/>
          <Route path="/Audit" element={<Audit />}/>
          <Route path="/Count" element={<Count />}/>
          <Route path="/PredictCount" element={<PredictCount />}/>

        </Routes>
        </div>
        </BrowserRouter>
    </PrimeReactProvider>
  )
}