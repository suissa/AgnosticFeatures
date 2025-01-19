
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Schedule from './features/schedule/pages/SchedulePage';
import ButtonExample from './shared/atoms/Button/example';
import ModalExample from './shared/components/Modal/pages/example';
import PatientListExample from './features/patientList/pages/example';
import FAQExample from './features/faq/pages/example';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/products" element={<Products />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/button/example" element={<ButtonExample />} />
        <Route path="/modal/example" element={<ModalExample />} />
        <Route path="/patients/example" element={<PatientListExample />} />
        <Route path="/faq/example" element={<FAQExample />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;