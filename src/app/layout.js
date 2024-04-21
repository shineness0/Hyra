import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

export const metadata = {
  title: "Hyra",
  description: "Discover a world where education meets excitement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
