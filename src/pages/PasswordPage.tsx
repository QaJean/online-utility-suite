import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PasswordGenerator from "@/components/utilities/PasswordGenerator";

const PasswordPage = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>Gerador de Senhas Fortes Online – Crie Senhas Seguras | Meus Utilitários</title>
      <meta
        name="description"
        content="Crie senhas fortes e seguras automaticamente. Use nosso gerador online grátis e proteja suas contas."
      />
      <meta
        name="keywords"
        content="gerador de senha, senha forte, senha online, criar senha segura, gerador senha"
      />
      <meta name="canonical" content="https://meusutilitarios.com/senha" />

      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
        <Header />

        <main className="pt-24 pb-8">
          <div className="container mx-auto px-4 max-w-md">
            {/* Título e texto explicativo */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-primary mb-4">
                Gerador de Senhas Fortes
              </h1>
              <p className="text-muted-foreground">
                Crie senhas seguras e personalizadas para proteger suas contas online
              </p>
            </div>

            {/* Área da ferramenta */}
            <div className="mb-8">
              <PasswordGenerator />
            </div>

            {/* Informações adicionais */}
            <div className="p-6 bg-card rounded-lg border border-border mb-6">
              <h3 className="font-semibold text-primary mb-3">Por que usar um gerador de senhas?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                A maioria dos ataques virtuais ocorre porque senhas fracas ou repetidas são usadas em várias contas. 
                O gerador de senhas é uma ferramenta essencial para criar combinações únicas, longas e difíceis de adivinhar, 
                reduzindo significativamente os riscos de invasão. 
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Esse tipo de utilitário é muito usado para proteger e-mails, redes sociais, serviços bancários e qualquer outra 
                conta que contenha informações pessoais. Com ele, você garante mais segurança sem precisar inventar senhas 
                manualmente.
              </p>
            </div>

            {/* Dicas de segurança */}
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-primary mb-3">Dicas de Segurança</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-success mt-1">•</span>
                  <span>Use senhas diferentes para cada conta</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-success mt-1">•</span>
                  <span>Prefira senhas com pelo menos 12 caracteres</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-success mt-1">•</span>
                  <span>Inclua letras, números e símbolos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-success mt-1">•</span>
                  <span>Evite informações pessoais óbvias</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-success mt-1">•</span>
                  <span>Use um gerenciador de senhas confiável</span>
                </li>
              </ul>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PasswordPage;
