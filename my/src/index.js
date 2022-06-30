import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';

import { FavoritesContextProvider } from './components/store/favourites-context';

const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <FavoritesContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
    </FavoritesContextProvider>
  );

// import named export between curly braces