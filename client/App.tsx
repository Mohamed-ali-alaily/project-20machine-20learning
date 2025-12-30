import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Model from "./pages/Model";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/model" element={<Model />} />
          <Route
            path="/docs"
            element={
              <Placeholder
                title="Documentation"
                description="Comprehensive guides and documentation for deploying and using the customer satisfaction prediction model."
              />
            }
          />
          <Route
            path="/api"
            element={
              <Placeholder
                title="API Reference"
                description="Complete API documentation for integrating our prediction model into your applications."
              />
            }
          />
          <Route
            path="/about"
            element={
              <Placeholder
                title="About"
                description="Learn more about PredictAI and our mission to make customer satisfaction prediction accessible."
              />
            }
          />
          <Route
            path="/blog"
            element={
              <Placeholder
                title="Blog"
                description="Latest insights, tutorials, and case studies about machine learning and customer satisfaction."
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Placeholder
                title="Contact"
                description="Get in touch with our team for support, partnerships, or inquiries."
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
