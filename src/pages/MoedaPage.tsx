import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CurrencyConverter from "@/components/utilities/CurrencyConverter";

const MoedaPage = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>Conversor de Moedas Online – Cotação Atualizada | Meus Utilitários</title>
      <meta name="description" content="Converta valores entre diferentes moedas com cotação atualizada em tempo real. Simples, rápido e grátis." />
      <meta name="keywords" content="conversor de moedas, real para dólar, câmbio online, cotação moeda, conversor BRL USD" />
      <meta name="canonical" content="https://meusutilitarios.com/moeda" />

      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
        <Header />

        <main className="pt-24 pb-8">
          <div className="container mx-auto px-4 max-w-md">
            {/* Título e texto explicativo */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-primary mb-4">
                Conversor de Moedas
              </h1>
              <p className="text-muted-foreground">
                Converta valores entre diferentes moedas com cotações atualizadas em tempo real
              </p>

              {/* Local para anúncio AdSense */}
              <div className="my-6 text-center">
                <div id="adsense-moeda" className="bg-gray-100 border border-gray-300 p-4 rounded">
                  {/* Código do anúncio será inserido aqui */}
                  <p className="text-sm text-muted-foreground">[Anúncio AdSense]</p>
                </div>
              </div>
            </div>

            {/* Área da ferramenta */}
            <div className="mb-8">
              <CurrencyConverter />
            </div>

            {/* Informações adicionais sobre moedas */}
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-primary mb-3">Moedas Disponíveis</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">BRL</span>
                    <span className="text-muted-foreground">Real Brasileiro</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">USD</span>
                    <span className="text-muted-foreground">Dólar Americano</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">EUR</span>
                    <span className="text-muted-foreground">Euro</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">GBP</span>
                    <span className="text-muted-foreground">Libra Esterlina</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">JPY</span>
                    <span className="text-muted-foreground">Iene Japonês</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">CAD</span>
                    <span className="text-muted-foreground">Dólar Canadense</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                * Cotações atualizadas automaticamente. Em caso de indisponibilidade da API, são exibidas taxas aproximadas.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MoedaPage;
