import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ContextProvider } from './Context/Context';
ReactDOM.render(
<ContextProvider>
<App />
</ContextProvider>
  ,
  document.getElementById('root')
);
