import type { Metadata } from "next";
import { Montserrat} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-montserrat',
});


export const metadata: Metadata = {
  title: "CF Moto",
  description: "CF Moto - экскурсии по Кубане",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${montserrat.className} `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
