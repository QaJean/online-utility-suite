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
      <meta name="description" content="Portal gratuito com utilitários online: calculadora de IMC, gerador de senhas fortes, sorteador de números e conversor de moedas. Ferramentas práticas para o dia a dia." />
      <meta name="keywords" content="utilitários online, calculadora IMC, gerador senha, sorteador números, conversor moedas" />
      
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
        <Header />
        
        <main className="pt-24 pb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Hero Section */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Bem-vindo ao <span className="text-success">Meus Utilitários</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Seu portal gratuito de ferramentas práticas para o dia a dia.
                  Aqui você encontra calculadoras, conversores e geradores rápidos e confiáveis.
                  Adicione aos favoritos e volte sempre que precisar! 🚀
                </p>
              </div>

              {/* Utilities Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {utilities.map((utility, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
                    <CardHeader className="text-center pb-4">
                      <div className={`mx-auto mb-4 p-4 rounded-full bg-muted/30 ${utility.color} group-hover:scale-110 transition-transform duration-300`}>
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
                        <Link to={utility.link}>
                          Usar Ferramenta
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Features Section */}
              <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold text-primary mb-8">Por que escolher nossos utilitários?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-lg bg-card border border-border">
                    <div className="text-3xl mb-4">⚡</div>
                    <h3 className="font-semibold text-primary mb-2">Rápido e Prático</h3>
                    <p className="text-sm text-muted-foreground">Ferramentas otimizadas para resultados instantâneos</p>
                  </div>
                  <div className="p-6 rounded-lg bg-card border border-border">
                    <div className="text-3xl mb-4">🔒</div>
                    <h3 className="font-semibold text-primary mb-2">Seguro e Confiável</h3>
                    <p className="text-sm text-muted-foreground">Seus dados ficam seguros em seu dispositivo</p>
                  </div>
                  <div className="p-6 rounded-lg bg-card border border-border">
                    <div className="text-3xl mb-4">📱</div>
                    <h3 className="font-semibold text-primary mb-2">100% Responsivo</h3>
                    <p className="text-sm text-muted-foreground">Funciona perfeitamente em qualquer dispositivo</p>
                  </div>
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

export default Home;