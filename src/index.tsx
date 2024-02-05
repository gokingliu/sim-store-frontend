import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'antd/dist/reset.css';
import './assets/css/common.less';

createRoot(document.getElementById('root') as Element).render(<App />);
