import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GuidePage from './pages/GuidePage';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-olive-400 text-black">
      <Header />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guide/:sectionId" element={<GuidePage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
