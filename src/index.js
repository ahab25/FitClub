import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
    domain="dev-emb2d1wv50ol6ng4.us.auth0.com"
    clientId="H4D7hf95I1BYwZTfZvjzjP7h5jVYgf7p"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />

    </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals