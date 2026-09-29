import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { DeliveryPage } from './pages/DeliveryPage';
import { ProductDetailModal } from './components/product/ProductDetailModal';
import { OrderBagDrawer } from './components/cart/OrderBagDrawer';
import { useCart } from './hooks/useCart';
import { Product } from './types';

export function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'catalog' | 'delivery'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const {
    cart,
    isBagOpen,
    setIsBagOpen,
    addToCart,
    updateQuantity,
    removeFromCart,
    totalItems,
    subtotal,
  } = useCart();

  const handleNavigateCatalog = (category: string = 'all') => {
    setSelectedCategory(category);
    setActiveTab('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7EF] text-[#242824] font-sans antialiased">
      {/* Navigation Header */}
      <Header
        cartItemCount={totalItems}
        cartSubtotal={subtotal}
        onOpenCart={() => setIsBagOpen(true)}
        activeTab={activeTab}
        setActiveTab={(tab) => setActiveTab(tab as any)}
        onSelectCategory={handleNavigateCatalog}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            onAddToCart={addToCart}
            onProductClick={setSelectedProduct}
            onNavigateCatalog={handleNavigateCatalog}
          />
        )}

        {activeTab === 'catalog' && (
          <CatalogPage
            onAddToCart={addToCart}
            onProductClick={setSelectedProduct}
            initialCategory={selectedCategory}
          />
        )}

        {activeTab === 'delivery' && <DeliveryPage />}
      </main>

      {/* Product Detail Modal Dialog */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />

      {/* Order Bag Slide-Over Drawer / Sheet */}
      <OrderBagDrawer
        isOpen={isBagOpen}
        onClose={() => setIsBagOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        subtotal={subtotal}
      />

      {/* Footer Layout */}
      <Footer setActiveTab={(tab) => setActiveTab(tab as any)} />
    </div>
  );
}

export default App;
