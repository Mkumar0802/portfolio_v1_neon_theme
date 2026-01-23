// App.tsx (modified)
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LocalLLMChat from "./pages/blog/LocalLLMChat";

import SeoVsGeo from "./pages/blog/SeoVsGeo";
import AnalyticsListener from "./components/AnalyticsListener";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <title>Muthu Kumar K | Senior MERN Stack & Full Stack Developer Portfolio</title>
          <meta name="description" content="Explore the portfolio of Muthu Kumar K, a highly skilled MERN Stack Developer with 4+ years of experience in React, Node.js, and Laravel. Specialized in building scalable, high-performance web applications." />
          <meta name="keywords" content="MERN Stack Developer, Full Stack Developer, React Developer, Node.js Developer, Laravel Developer, Web Portfolio, Muthu Kumar K, Tamil Nadu Developer" />
          <meta name="author" content="Muthu Kumar K" />
          <link rel="canonical" href="https://muthukumar-portfolio.netlify.app/" />
          <meta name="theme-color" content="#0EA5E9" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://muthukumar-portfolio.netlify.app/" />
          <meta property="og:title" content="Muthu Kumar K | Senior MERN Stack & Full Stack Developer Portfolio" />
          <meta property="og:description" content="Explore the portfolio of Muthu Kumar K, a highly skilled MERN Stack Developer with 4+ years of experience in React, Node.js, and Laravel." />
          <meta property="og:image" content="https://muthukumar-portfolio.netlify.app/og-image.png" />
          <meta property="og:site_name" content="Muthu Kumar K Portfolio" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://muthukumar-portfolio.netlify.app/" />
          <meta property="twitter:title" content="Muthu Kumar K | Senior MERN Stack & Full Stack Developer Portfolio" />
          <meta property="twitter:description" content="Explore the portfolio of Muthu Kumar K, a highly skilled MERN Stack Developer with 4+ years of experience in React, Node.js, and Laravel." />
          <meta property="twitter:image" content="https://muthukumar-portfolio.netlify.app/og-image.png" />
          <meta property="twitter:creator" content="@Mkumar0802" />
        </Helmet>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* analytics needs to be inside BrowserRouter */}
          <AnalyticsListener />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog/local-llm-chat" element={<LocalLLMChat />} />

            <Route path="/blog/seo-vs-geo" element={<SeoVsGeo />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
      <Analytics />
      <SpeedInsights />
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
