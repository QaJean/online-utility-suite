import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto p-8 bg-card rounded-lg border border-border">
          <div className="text-8xl font-bold text-primary mb-6">404</div>
          <h1 className="text-2xl font-semibold text-foreground mb-4">
            Página não encontrada
          </h1>
          <p className="text-muted-foreground mb-6">
            A página que você está procurando não existe ou foi movida. Verifique o endereço ou volte à página inicial.
          </p>

          <Button asChild variant="utility" className="mt-4">
            <a href="/" className="inline-flex items-center space-x-2">
              <Home className="w-4 h-4" />
              <span>Voltar ao início</span>
            </a>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
