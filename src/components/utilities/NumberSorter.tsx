import { useState } from "react";
import { Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UtilityCard from "../UtilityCard";
import ResultBox from "../ResultBox";

const NumberSorter = () => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const sortNumber = () => {
    const minNum = parseInt(min);
    const maxNum = parseInt(max);

    if (isNaN(minNum) || isNaN(maxNum) || minNum >= maxNum) {
      return;
    }

    const randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    setResult(randomNumber);
  };

  return (
    <UtilityCard 
      title="Sorteador de Números" 
      icon={<Shuffle className="w-5 h-5 text-primary-foreground" />}
    >
      <div className="space-y-4">
        <div>
          <Label htmlFor="min" className="text-sm font-medium">
            Número mínimo
          </Label>
          <Input
            id="min"
            type="number"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            placeholder="Ex: 1"
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="max" className="text-sm font-medium">
            Número máximo
          </Label>
          <Input
            id="max"
            type="number"
            value={max}
            onChange={(e) => setMax(e.target.value)}
            placeholder="Ex: 100"
            className="mt-1"
          />
        </div>

        <Button 
          onClick={sortNumber} 
          variant="utility" 
          className="w-full"
        >
          Sortear Número
        </Button>

        {result !== null && (
          <ResultBox variant="success">
            <div className="text-2xl font-bold">
              {result}
            </div>
            <div className="text-sm mt-1 text-muted-foreground">
              Número sorteado entre {min} e {max}
            </div>
          </ResultBox>
        )}
      </div>
    </UtilityCard>
  );
};

export default NumberSorter;