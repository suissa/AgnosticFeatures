// src/pages/Products.tsx
import React, { useState } from 'react';
import { Drawer } from '../shared/components/Drawer';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  specs: string[];
}

// Dados de exemplo
const products: Product[] = [
  {
    id: 1,
    name: "Smartphone XYZ",
    description: "Um smartphone incrível com características avançadas e tecnologia de ponta para suas necessidades diárias.",
    price: 999.90,
    image: "https://placehold.co/400x300",
    specs: ["Tela 6.5\"", "128GB", "Câmera 48MP"]
  },
  {
    id: 2,
    name: "Notebook ABC",
    description: "Notebook potente para suas necessidades profissionais e de entretenimento.",
    price: 3499.90,
    image: "https://placehold.co/400x300",
    specs: ["Intel i7", "16GB RAM", "SSD 512GB"]
  },
  {
    id: 3,
    name: "Tablet Ultra",
    description: "Tablet perfeito para produtividade e entretenimento em qualquer lugar.",
    price: 1299.90,
    image: "https://placehold.co/400x300",
    specs: ["Tela 10\"", "64GB", "Android 12"]
  }
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">Produtos</h1>
        </div>
      </header>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600 mt-2 line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold">
                    R$ {product.price.toFixed(2)}
                  </span>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Product Details Drawer */}
      <Drawer 
        open={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)}
        title={selectedProduct?.name || "Detalhes do Produto"}
      >
        {selectedProduct && (
          <div className="space-y-4">
            <img 
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover rounded-md"
            />
            
            <div>
              <h2 className="text-xl font-semibold">{selectedProduct.name}</h2>
              <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
            </div>

            <div className="w-fullflex justify-between items-center">
              <span className="text-2xl font-bold">
                R$ {selectedProduct.price.toFixed(2)}
              </span>
            </div>
            <div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                  Adicionar ao Carrinho
                </button>
            </div>

            <div className="border-t pt-4 mt-4">
              <h3 className="font-medium mb-2">Especificações</h3>
              <ul className="space-y-1">
                {selectedProduct.specs.map((spec, index) => (
                  <li key={index} className="text-gray-600">• {spec}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default Products;