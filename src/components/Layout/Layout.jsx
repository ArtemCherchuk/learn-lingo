import css from "./Layout.module.css";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
