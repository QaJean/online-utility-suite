import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-16 py-8 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground flex items-center justify-center space-x-2">
          <span>Feito com</span>
          <Heart className="w-4 h-4 text-destructive fill-current" />
          <span>para facilitar seu dia. Volte sempre ao Meus Utilitários!</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;