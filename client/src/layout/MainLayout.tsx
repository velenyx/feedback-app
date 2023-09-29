import type { ReactNode } from 'react';

import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';

import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  children: ReactNode;
}
export const MainLayout = ({ children }: MainLayoutProps) => (
  <div className={styles.mainLayout}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);
