import "primeflex/primeflex.css";
//import { StyleClass } from 'primereact/styleclass';
import { PrimeReactProvider } from "primereact/api";
import HeadlessDemo from "./components/Slidebar";
import {BrowserRouter , Route , Router, Routes} from "react-router-dom";
import Forecast from "./components/Forecast";

export default function App() {
  return (
    <PrimeReactProvider>
        <BrowserRouter>
        <HeadlessDemo/>
        <Routes>  
          <Route path="/Forecast" element={<Forecast />}/>
        </Routes>
        </BrowserRouter>
    </PrimeReactProvider>
  )
}