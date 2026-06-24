import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Index from './pages/index';

const root = createRoot(document.querySelector('#root'));
root.render(<Index />);
