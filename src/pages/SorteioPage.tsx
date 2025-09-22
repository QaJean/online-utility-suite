import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NumberSorter from "@/components/utilities/NumberSorter";

const SorteioPage = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>Sorteador de Números Online – Rápido e Grátis | Meus Utilitários</title>
      <meta name="description" content="Sorteie números ou nomes de forma rápida e prática. Ferramenta simples, segura e grátis." />
      <meta name="keywords" content="sorteador de números, número aleatório online, sortear números, gerador números, sortear nomes" />
      <meta name="canonical" content="https://meusutilitarios.com/sorteio" />

      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
        <Header />

        <main className="pt-24 pb-8">
          <div className="container mx-auto px-4 max-w-md">
            {/* Título e texto explicativo */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-primary mb-4">
                Sorteador Inteligente
              </h1>
              <p className="text-muted-foreground">
                Sorteie números ou nomes de forma rápida e prática para suas necessidades
              </p>
            </div>

            {/* Área da ferramenta */}
            <div className="mb-8">
              <NumberSorter />
            </div>

            {/* Instruções */}
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-primary mb-3">Como usar?</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-medium text-foreground mb-1">Sorteio de Números:</h4>
                  <p>
                    Defina o valor mínimo, máximo e a quantidade de números que deseja sortear.
                    Perfeito para rifas, jogos e sorteios diversos.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Sorteio de Nomes:</h4>
                  <p>
                    Adicione os nomes à lista. O botão de sorteio só será habilitado com pelo menos 2 nomes.
                    Você pode sortear quantos participantes quiser. Ideal para escolher equipes ou ganhadores de prêmios.
                  </p>
                </div>
                                <div>
                  <h4 className="font-medium text-foreground mb-1">Explicação de utilidade</h4>
                  <p>
                      O sorteador é útil em diversas situações: rifas, promoções, dinâmicas em sala de aula, distribuição de prêmios e até mesmo para decisões pessoais.

                      Ao permitir que números ou nomes sejam sorteados de forma aleatória, a ferramenta garante imparcialidade e praticidade.

                      É uma alternativa simples para quem não quer depender de papéis, bilhetes ou métodos manuais, mantendo a transparência nos resultados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SorteioPage;
