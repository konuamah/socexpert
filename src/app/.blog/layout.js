// components/Layout.js
import Navbar from "../components/navbar"
import Footer from "../components/footer";

export default function BlogLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="mt-16">{children}</main>
      <Footer/>
    </>
  );
}
