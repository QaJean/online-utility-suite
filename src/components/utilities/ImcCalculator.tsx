import { useState } from "react";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UtilityCard from "../UtilityCard";
import ResultBox from "../ResultBox";

const ImcCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<{
    imc: number;
    classification: string;
    variant: "primary" | "success" | "warning";
  } | null>(null);

  const calculateIMC = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (!weightNum || !heightNum || weightNum <= 0 || heightNum <= 0) {
      return;
    }

    const imc = weightNum / (heightNum * heightNum);
    let classification = "";
    let variant: "primary" | "success" | "warning" = "primary";

    if (imc < 18.5) {
      classification = "Abaixo do peso";
      variant = "warning";
    } else if (imc < 24.9) {
      classification = "Peso normal";
      variant = "success";
    } else if (imc < 29.9) {
      classification = "Sobrepeso";
      variant = "warning";
    } else {
      classification = "Obesidade";
      variant = "warning";
    }

    setResult({ imc: parseFloat(imc.toFixed(1)), classification, variant });
  };

  return (
    <UtilityCard 
      title="Calculadora de IMC" 
      icon={<Calculator className="w-5 h-5 text-primary-foreground" />}
    >
      <div className="space-y-4">
        <div>
          <Label htmlFor="weight" className="text-sm font-medium">
            Peso (kg)
          </Label>
          <Input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Ex: 70"
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="height" className="text-sm font-medium">
            Altura (m)
          </Label>
          <Input
            id="height"
            type="number"
            step="0.01"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Ex: 1.75"
            className="mt-1"
          />
        </div>

        <Button 
          onClick={calculateIMC} 
          variant="utility" 
          className="w-full"
        >
          Calcular IMC
        </Button>

        {result && (
          <ResultBox variant={result.variant}>
            <div className="text-lg font-bold">
              IMC: {result.imc}
            </div>
            <div className="text-sm mt-1">
              {result.classification}
            </div>
          </ResultBox>
        )}
      </div>
    </UtilityCard>
  );
};

export default ImcCalculator;