import { Link } from "react-router-dom";
import { Calculator, KeyRound, Shuffle, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  const utilities = [
    {
      title: "Calculadora de IMC",
      description: "Descubra seu Índice de Massa Corporal e saiba se está no peso ideal",
      icon: <Calculator className="w-8 h-8" />,
      link: "/imc",
      color: "text-primary"
    },
    {
      title: "Gerador de Senhas",
      description: "Crie senhas fortes e seguras para proteger suas contas online",
      icon: <KeyRound className="w-8 h-8" />,
      link: "/senha",
      color: "text-success"
    },
    {
      title: "Sorteador Inteligente",
      description: "Sorteie números de forma rápida e prática para suas necessidades",
      icon: <Shuffle className="w-8 h-8" />,
      link: "/sorteio",
      color: "text-warning"
    },
    {
      title: "Conversor de Moedas",
      description: "Converta valores entre diferentes moedas com cotação atualizada",
      icon: <DollarSign className="w-8 h-8" />,
      link: "/moeda",
      color: "text-primary"
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Meus Utilitários - Ferramentas Online Gratuitas | Calculadoras e Conversores</title>
      <meta 
        name="description" 
        content="Portal gratuito com utilitários online: calculadora de IMC, gerador de senhas fortes, sorteador de números e conversor de moedas. Ferramentas práticas para o dia a dia." 
      />
      <meta 
        name="keywords" 
        content="utilitários online, calculadora IMC, gerador senha, sorteador números, conversor moedas" 
      />

      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
        <Header />

        <main className="pt-24 pb-8">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Introdução */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Bem-vindo ao <span className="text-success">Meus Utilitários</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Seu portal gratuito de ferramentas práticas para o dia a dia.
                Aqui você encontra calculadoras, conversores e geradores rápidos e confiáveis. 
                Use sempre que precisar, sem custo e direto do navegador 🚀
              </p>
            </div>

            {/* Grid de utilitários */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {utilities.map((utility, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1"
                >
                  <CardHeader className="text-center pb-4">
                    <div 
                      className={`mx-auto mb-4 p-4 rounded-full bg-muted/30 ${utility.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {utility.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-primary">
                      {utility.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {utility.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center pb-6">
                    <Button asChild variant="utility" className="w-full">
                      <Link to={utility.link}>Usar Ferramenta</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Explicação sobre cada utilitário */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Nossos principais utilitários
              </h2>
              <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
                <p>
                  🔹 <strong>Calculadora de IMC:</strong> muito usada por profissionais de saúde 
                  para avaliar se uma pessoa está no peso ideal em relação à altura. 
                  Uma forma prática de acompanhar a saúde e adotar hábitos mais equilibrados.
                </p>
                <p>
                  🔹 <strong>Gerador de Senhas:</strong> essencial para proteger contas online. 
                  Gera combinações fortes de letras, números e símbolos, reduzindo o risco de invasões.
                </p>
                <p>
                  🔹 <strong>Sorteador Inteligente:</strong> útil em rifas, brincadeiras, jogos 
                  ou para formar equipes. Permite sortear números ou nomes de forma justa e prática.
                </p>
                <p>
                  🔹 <strong>Conversor de Moedas:</strong> ideal para quem viaja, faz compras no exterior 
                  ou acompanha investimentos. Mostra valores atualizados em tempo real.
                </p>
              </div>
            </section>

            {/* Features Section */}
            <section className="mb-16 text-center">
              <h2 className="text-2xl font-bold text-primary mb-8">
                Por que escolher nossos utilitários?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg bg-card border border-border">
                  <div className="text-3xl mb-4">⚡</div>
                  <h3 className="font-semibold text-primary mb-2">Rápido e Prático</h3>
                  <p className="text-sm text-muted-foreground">Resultados instantâneos em qualquer dispositivo</p>
                </div>
                <div className="p-6 rounded-lg bg-card border border-border">
                  <div className="text-3xl mb-4">🔒</div>
                  <h3 className="font-semibold text-primary mb-2">Seguro e Confiável</h3>
                  <p className="text-sm text-muted-foreground">Os cálculos e resultados ficam no seu navegador</p>
                </div>
                <div className="p-6 rounded-lg bg-card border border-border">
                  <div className="text-3xl mb-4">📱</div>
                  <h3 className="font-semibold text-primary mb-2">100% Responsivo</h3>
                  <p className="text-sm text-muted-foreground">Funciona perfeitamente em celular, tablet e computador</p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                Perguntas Frequentes
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p><strong>Os utilitários são gratuitos?</strong> Sim, todas as ferramentas podem ser usadas sem custo.</p>
                <p><strong>Preciso instalar algo?</strong> Não, tudo funciona direto no navegador, sem downloads.</p>
                <p><strong>Os resultados são confiáveis?</strong> Sim, os cálculos usam fórmulas reconhecidas e APIs de referência.</p>
                <p><strong>É seguro usar o gerador de senhas?</strong> Sim, tudo é processado localmente, sem envio de dados.</p>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
