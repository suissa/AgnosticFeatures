
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Schedule from './features/Schedule/pages/SchedulePage';
import ButtonDemo from './shared/atoms/Button/examples';
import ModalExample from './shared/components/Modal/pages/ModalExample';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/products" element={<Products />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/button/example" element={<ButtonDemo />} />
        <Route path="/modal/example" element={<ModalExample />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;