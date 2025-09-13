import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="text-8xl font-bold text-primary mb-6">404</div>
        <h1 className="text-2xl font-semibold text-foreground mb-4">
          Página não encontrada
        </h1>
        <p className="text-muted-foreground mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Button asChild variant="utility">
          <a href="/" className="inline-flex items-center space-x-2">
            <Home className="w-4 h-4" />
            <span>Voltar ao início</span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
