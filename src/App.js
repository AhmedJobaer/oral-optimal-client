import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';

function App() {
  return (
    <div className="w-3/4 mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
