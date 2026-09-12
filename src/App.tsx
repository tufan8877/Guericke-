import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Leistungen from '@/pages/Leistungen';
import Gas from '@/pages/Gas';
import Sanitaer from '@/pages/Sanitaer';
import Heizung from '@/pages/Heizung';
import Service from '@/pages/Service';
import UeberUns from '@/pages/UeberUns';
import FAQ from '@/pages/FAQ';
import Kontakt from '@/pages/Kontakt';
import Impressum from '@/pages/Impressum';
import Datenschutz from '@/pages/Datenschutz';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/gas" element={<Gas />} />
          <Route path="/sanitaer" element={<Sanitaer />} />
          <Route path="/heizung" element={<Heizung />} />
          <Route path="/service" element={<Service />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
