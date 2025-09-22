import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImcCalculator from "@/components/utilities/ImcCalculator";

const ImcPage = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>Calculadora de IMC Online – Descubra seu Índice de Massa Corporal | Meus Utilitários</title>
      <meta name="description" content="Calcule seu IMC grátis em segundos. Descubra se está no peso ideal e acompanhe sua saúde com nossa calculadora online." />
      <meta name="keywords" content="calculadora IMC, índice de massa corporal, peso ideal, IMC online, calcular IMC" />
      <meta name="canonical" content="https://meusutilitarios.com/imc" />

      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
        <Header />

        <main className="pt-24 pb-8">
          <div className="container mx-auto px-4 max-w-md">
            {/* Título e texto explicativo */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-primary mb-4">
                Calculadora de IMC
              </h1>
              <p className="text-muted-foreground">
                Descubra seu Índice de Massa Corporal e saiba se está no peso ideal para sua altura
              </p>
            </div>

            {/* Área da ferramenta */}
            <div className="mb-8">
              <ImcCalculator />
            </div>

            {/* Informação adicional sobre IMC */}
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-primary mb-3">Sobre o IMC</h3>
              <p className="text-sm text-muted-foreground mb-4">
                O Índice de Massa Corporal (IMC) é uma medida internacional usada para avaliar se uma pessoa está dentro do peso ideal em relação à sua altura. Ele é amplamente utilizado por médicos, nutricionistas e profissionais de saúde como uma forma rápida de identificar riscos de sobrepeso ou desnutrição.

Embora seja um cálculo simples, o IMC ajuda a direcionar hábitos de vida mais saudáveis e pode ser o primeiro passo para buscar orientação profissional. Vale lembrar que ele não substitui exames médicos detalhados, já que não considera fatores como massa muscular ou percentual de gordura.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-warning font-medium">Abaixo do peso:</span>
                  <span>Menor que 18,5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-success font-medium">Peso normal:</span>
                  <span>18,5 a 24,9</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-warning font-medium">Sobrepeso:</span>
                  <span>25,0 a 29,9</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-destructive font-medium">Obesidade:</span>
                  <span>30,0 ou mais</span>
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

export default ImcPage;
