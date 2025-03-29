import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { LanguageProvider } from "../context/LanguageContext";
import "./../styles/globals.css";
import Script from "next/script";

// Use font optimization from Next.js - with more explicit options
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  display: "swap", // Optimize font loading
  fallback: ['system-ui', 'arial', 'sans-serif'],
  preload: true,
  weight: ['400', '500', '600', '700']
});

export default function App({ Component, pageProps }) {
    const router = useRouter();
    
    return (
        <LanguageProvider>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Petru Tîrlă - Full-Stack Developer Portfolio" />
                <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
                <meta name="theme-color" content="#1b1b1b" media="(prefers-color-scheme: dark)" />
                <link rel="icon" href="/favicon.ico" />
                
                {/* Performance optimizations */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                
                {/* SEO */}
                <meta name="robots" content="index, follow" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Petru Tîrlă" />
            </Head>
            
            {/* Skip to main content for accessibility */}
            <a 
              href="#main-content" 
              className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-primary focus:text-light z-50"
            >
              Skip to main content
            </a>
            
            <main
                className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
                id="main-content"
            >
                <NavBar />
                <AnimatePresence mode="wait">
                    <Component key={router.asPath} {...pageProps} />
                </AnimatePresence>
                <Footer />
            </main>
        </LanguageProvider>
    );
}
