import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import styles from "./MainLayout.module.scss";

interface MainLayoutProps {
  children: ReactNode;
}
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.mainLayout}>
      <ToastContainer />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
