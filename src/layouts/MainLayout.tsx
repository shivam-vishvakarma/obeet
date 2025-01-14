import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MouseFollower from "@/components/MouseFollower";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <MouseFollower />
    </>
  );
}
