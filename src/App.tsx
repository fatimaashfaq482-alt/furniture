import React, { useEffect } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { StoreProvider, useStore } from './context/StoreContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { SearchOverlay } from './components/SearchOverlay';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { CollectionsPage } from './pages/CollectionsPage';
import { CollectionPage } from './pages/CollectionPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { WishlistPage } from './pages/WishlistPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OurStoryPage } from './pages/OurStoryPage';
import { JournalPage } from './pages/JournalPage';
import { AccountPage } from './pages/AccountPage';
import { CustomerCarePage } from './pages/CustomerCarePage';
import { Check, X } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function ToastBanner() {
  const { toastMessage, dismissToast } = useStore();
  if (!toastMessage) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 px-4 py-3 rounded-[6px] bg-[#242522] text-[#F8F6F2] text-xs shadow-xl border border-[#41453C]"
    >
      <Check className="w-4 h-4 text-[#DCD1C3] shrink-0" aria-hidden="true" />
      <span>{toastMessage}</span>
      <button
        type="button"
        onClick={dismissToast}
        aria-label="Dismiss notification"
        className="text-[#A49A8E] hover:text-[#F8F6F2] ml-1"
      >
        <X className="w-3.5 h-3.5" aria-hidden="true" />
      </button>
    </div>
  );
}

function AppShell() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F2] text-[#242522]">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/collections/:slug" element={<CollectionPage />} />
          <Route path="/product/:slug" element={<ProductDetailPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/contact" element={<CustomerCarePage topic="contact" />} />
          <Route path="/shipping-returns" element={<CustomerCarePage topic="shipping-returns" />} />
          <Route path="/faq" element={<CustomerCarePage topic="faq" />} />
          <Route path="/care-guide" element={<CustomerCarePage topic="care-guide" />} />
          <Route path="/order-tracking" element={<CustomerCarePage topic="order-tracking" />} />
          <Route path="/privacy" element={<CustomerCarePage topic="privacy" />} />
          <Route path="/terms" element={<CustomerCarePage topic="terms" />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />
      <SearchOverlay />
      <ToastBanner />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <StoreProvider>
        <AppShell />
      </StoreProvider>
    </HashRouter>
  );
}
