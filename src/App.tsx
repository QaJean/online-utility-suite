import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ImcPage from "./pages/ImcPage";
import PasswordPage from "./pages/PasswordPage";
import SorteioPage from "./pages/SorteioPage";
import MoedaPage from "./pages/MoedaPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/online-utility-suite/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imc" element={<ImcPage />} />
          <Route path="/senha" element={<PasswordPage />} />
          <Route path="/sorteio" element={<SorteioPage />} />
          <Route path="/moeda" element={<MoedaPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
