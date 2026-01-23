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

import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
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
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
