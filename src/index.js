import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import BaseBackground from './Components/BaseBackground';
import "./Fonts/Lobster-Regular.ttf"
import { QueryClient, QueryClientProvider} from 'react-query';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowMount: false,
      refetchOnWindowFocus: false,
    }
  }
});


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <BaseBackground />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
