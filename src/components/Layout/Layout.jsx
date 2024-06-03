import css from './Layout.module.css';
import Header from '../Header/Header';
import Footer from 'components/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <Header />
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
