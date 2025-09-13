import { useState } from "react";
import { DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UtilityCard from "../UtilityCard";
import ResultBox from "../ResultBox";

const CurrencyConverter = () => {
  const [brlAmount, setBrlAmount] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const EXCHANGE_RATE = 0.19; // 1 BRL = 0.19 USD (taxa fixa conforme solicitado)

  const convertCurrency = () => {
    const amount = parseFloat(brlAmount);
    if (!amount || amount <= 0) {
      return;
    }

    const usdAmount = amount * EXCHANGE_RATE;
    setResult(parseFloat(usdAmount.toFixed(2)));
  };

  return (
    <UtilityCard 
      title="Conversor de Moedas" 
      icon={<DollarSign className="w-5 h-5 text-primary-foreground" />}
    >
      <div className="space-y-4">
        <div>
          <Label htmlFor="brl" className="text-sm font-medium">
            Valor em Reais (BRL)
          </Label>
          <Input
            id="brl"
            type="number"
            step="0.01"
            value={brlAmount}
            onChange={(e) => setBrlAmount(e.target.value)}
            placeholder="Ex: 100.00"
            className="mt-1"
          />
        </div>

        <Button 
          onClick={convertCurrency} 
          variant="utility" 
          className="w-full"
        >
          Converter para USD
        </Button>

        {result !== null && (
          <ResultBox variant="success">
            <div className="text-lg font-bold">
              US$ {result}
            </div>
            <div className="text-sm mt-1 text-muted-foreground">
              Taxa: 1 BRL = {EXCHANGE_RATE} USD
            </div>
          </ResultBox>
        )}
      </div>
    </UtilityCard>
  );
};

export default CurrencyConverter;