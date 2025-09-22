import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CurrencyConverter from "@/components/utilities/CurrencyConverter";

const MoedaPage = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>Conversor de Moedas Online – Cotação Atualizada | Meus Utilitários</title>
      <meta
        name="description"
        content="Converta valores entre diferentes moedas com cotação atualizada em tempo real. Simples, rápido e grátis."
      />
      <meta
        name="keywords"
        content="conversor de moedas, real para dólar, câmbio online, cotação moeda, conversor BRL USD"
      />
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
            </div>

            {/* Área da ferramenta */}
            <div className="mb-8">
              <CurrencyConverter />
            </div>

            {/* Informações adicionais sobre moedas */}
            <div className="p-6 bg-card rounded-lg border border-border mb-6">
              <h3 className="font-semibold text-primary mb-3">Por que usar um conversor de moedas?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                O conversor de moedas é uma ferramenta essencial para quem realiza compras internacionais,
                trabalha com comércio exterior ou simplesmente quer acompanhar o valor de diferentes moedas
                em relação ao Real. Ele ajuda a entender quanto seu dinheiro vale em outra moeda e a planejar
                melhor gastos em viagens, investimentos e negociações.
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Ter acesso à cotação em tempo real facilita decisões financeiras e evita surpresas com
                variações cambiais. Além disso, é muito utilizado por profissionais de finanças, turistas
                e até mesmo no dia a dia de quem acompanha notícias econômicas.
              </p>
            </div>

            {/* Lista de moedas disponíveis */}
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
