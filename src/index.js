import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Page2 from './whatsappChat/page2/Page2';
import Page3 from './whatsappChat/page3/Page3';
import Page4 from './whatsappChat/page4/Page4';
import Page5 from './whatsappChat/page5/Page5';
import Route from './Route';
import ChatView5Route from './whatsappChat/page5/chatView5/ChatView5Route';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App />
    <Page2/>
    <Page3/>
    <Page4/>
    <Page5/>
    <Route/>
    <ChatView5Route/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
