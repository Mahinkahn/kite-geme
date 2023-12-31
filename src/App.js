import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className='  mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
