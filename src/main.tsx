import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Clear any existing content
const rootElement = document.getElementById('root');
if (rootElement) {
  rootElement.innerHTML = '';
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
