import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImcCalculator from "@/components/utilities/ImcCalculator";
import PasswordGenerator from "@/components/utilities/PasswordGenerator";
import NumberSorter from "@/components/utilities/NumberSorter";
import CurrencyConverter from "@/components/utilities/CurrencyConverter";

const Index = () => {
  const [activeSection, setActiveSection] = useState("imc");

  const renderUtility = () => {
    switch (activeSection) {
      case "imc":
        return <ImcCalculator />;
      case "senhas":
        return <PasswordGenerator />;
      case "sorteio":
        return <NumberSorter />;
      case "moedas":
        return <CurrencyConverter />;
      default:
        return <ImcCalculator />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            {renderUtility()}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
