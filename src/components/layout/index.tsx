import type { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
  noFooter?: boolean;
};

export default function Layout({ children, noFooter = false }: Props) {
  return (
    <>
      <Header />
      {children}
      {!noFooter && <Footer />}
    </>
  );
}
