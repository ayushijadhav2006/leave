import "primeflex/primeflex.css";
import { StyleClass } from 'primereact/styleclass';
import { PrimeReactProvider } from "primereact/api";
import HeadlessDemo from "./components/Slidebar";
import {BrowserRouter , Route , Router, Routes} from "react-router-dom";
import Forecasting from "./components/Main";

export default function App() {
  return (
    <PrimeReactProvider>
        <BrowserRouter>
        <HeadlessDemo/>
        <Routes>  
          <Route path="/Main" element={<Forecasting/>}/>
        </Routes>
        </BrowserRouter>
    </PrimeReactProvider>
  )
}