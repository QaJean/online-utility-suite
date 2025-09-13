import { useState } from "react";
import { Key, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UtilityCard from "../UtilityCard";
import ResultBox from "../ResultBox";

const PasswordGenerator = () => {
  const [length, setLength] = useState("12");
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const lengthNum = parseInt(length);
    if (!lengthNum || lengthNum < 4 || lengthNum > 50) {
      return;
    }

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    let result = "";
    
    for (let i = 0; i < lengthNum; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    setPassword(result);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    if (!password) return;
    
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar:", err);
    }
  };

  return (
    <UtilityCard 
      title="Gerador de Senhas" 
      icon={<Key className="w-5 h-5 text-primary-foreground" />}
    >
      <div className="space-y-4">
        <div>
          <Label htmlFor="length" className="text-sm font-medium">
            Comprimento da senha
          </Label>
          <Input
            id="length"
            type="number"
            min="4"
            max="50"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="mt-1"
          />
        </div>

        <Button 
          onClick={generatePassword} 
          variant="utility" 
          className="w-full"
        >
          Gerar Senha
        </Button>

        {password && (
          <ResultBox variant="success">
            <div className="break-all text-sm font-mono mb-3">
              {password}
            </div>
            <Button
              onClick={copyToClipboard}
              variant="outline"
              size="sm"
              className="flex items-center space-x-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar</span>
                </>
              )}
            </Button>
          </ResultBox>
        )}
      </div>
    </UtilityCard>
  );
};

export default PasswordGenerator;