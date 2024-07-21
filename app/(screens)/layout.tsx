import GridPatternDashed from "@/ui/atoms/GridPatternBg";
import Footer from "@/ui/molecules/Footer";
import Navigator from "@/ui/molecules/Navigator";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      {/* <div className="relative"> */}
      <Navigator />
      <GridPatternDashed />
      {children}
      {/* </div> */}
      <ToastContainer />
      <Footer />
    </>
  );
};

export default DashboardLayout;
