
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Schedule from './pages/Schedule';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/products" element={<Products />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;