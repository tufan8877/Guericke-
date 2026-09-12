import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MobileContactBar from './MobileContactBar';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="pt-[100px] md:pt-[132px] lg:pt-[140px]">
        <Outlet />
      </main>
      <Footer />
      <MobileContactBar />
      <div className="lg:hidden h-14" />
    </>
  );
}
