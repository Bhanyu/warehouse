import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter} from "react-router-dom";

import './i18n';

// import { Provider } from "react-redux";

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

  <App />
 
   
    </BrowserRouter>

)
