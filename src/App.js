import "primeflex/primeflex.css";
//import { StyleClass } from 'primereact/styleclass';
import { PrimeReactProvider } from "primereact/api";
import HeadlessDemo from "./components/Slidebar";
import {BrowserRouter , Route , Router, Routes} from "react-router-dom";
import Forecast from "./components/Forecast";
import Graph from "./components/Graph";
import Audit from "./components/Audit";
import Count from "./components/Count";

export default function App() {
  
  return (
    <PrimeReactProvider>
        <BrowserRouter>
        <HeadlessDemo/>
        <Routes>  
          <Route path="/Forecast" element={<Forecast />}/>
          <Route path="/Graph" element={<Graph />}/>
          <Route path="/Audit" element={<Audit />}/>
          <Route path="/Count" element={<Count />}/>

        </Routes>
        </BrowserRouter>
    </PrimeReactProvider>
  )
}