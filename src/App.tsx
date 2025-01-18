// App.tsx
import React, { useState } from 'react';
import { Drawer } from './shared/components/Drawer';
import './index.css';
const App = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false)
  return (
    <div className="relative inset-y-0 right-0">
      <button 
        className="fixed top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setOpen(!open)}
      >
        Abrir
      </button>
      <Drawer 
        title='Título'
        open={open} onClose={onClose}
        className='bg-black text-black'>
          <p>
          Mussum Ipsum, cacilds vidis litro abertis.  Detraxit consequat et quo num tendi nada. Suco de cevadiss, é um leite divinis, 
          qui tem lupuliz, matis, aguis e fermentis. Suco de cevadiss deixa as pessoas mais interessantis. In elementis mé pra quem é 
          amistosis quis leo.
          </p>
      </Drawer>
    </div>
  );
};

export default App;