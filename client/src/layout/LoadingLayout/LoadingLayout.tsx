import { ReactNode } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import styles from "./LoadingLayout.module.scss";

interface ILoadingLayoutProps {
  children: ReactNode;
}
export const LoadingLayout = ({ children }: ILoadingLayoutProps) => {
  return (
    <div className={styles.loadingLayout}>
      <Header />
      <main className={styles.loadingMain}>{children}</main>
      <Footer />
    </div>
  );
};
