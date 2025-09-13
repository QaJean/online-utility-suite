import { useState } from "react";
import { Key, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { usePasswordGenerator } from "@/hooks/usePasswordGenerator";
import { toast } from "@/hooks/use-toast";
import UtilityCard from "../UtilityCard";
import ResultBox from "../ResultBox";

const PasswordGenerator = () => {
  const { options, updateOption, validateOptions, generatePasswords } = usePasswordGenerator();
  const [passwords, setPasswords] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = () => {
    try {
      const newPasswords = generatePasswords();
      setPasswords(newPasswords);
      toast({
        title: "Senhas geradas com sucesso!",
        description: `${newPasswords.length} senha(s) criada(s)`,
      });
    } catch (error) {
      toast({
        title: "Erro na validação",
        description: error instanceof Error ? error.message : "Erro desconhecido",
        variant: "destructive",
      });
    }
  };

  const copyToClipboard = async (password: string, index: number) => {
    try {
      await navigator.clipboard.writeText(password);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
      toast({
        title: "Copiado!",
        description: "Senha copiada para a área de transferência",
      });
    } catch (err) {
      console.error("Erro ao copiar:", err);
    }
  };

  const copyAllPasswords = async () => {
    try {
      const allPasswords = passwords.join('\n');
      await navigator.clipboard.writeText(allPasswords);
      toast({
        title: "Todas copiadas!",
        description: "Todas as senhas foram copiadas",
      });
    } catch (err) {
      console.error("Erro ao copiar:", err);
    }
  };

  const validationError = validateOptions();

  return (
    <UtilityCard 
      title="Gerador de Senhas Inteligente" 
      icon={<Key className="w-5 h-5 text-primary-foreground" />}
    >
      <div className="space-y-6">
        {/* Basic Options */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="length" className="text-sm font-medium">
              Comprimento
            </Label>
            <Input
              id="length"
              type="number"
              min="4"
              max="50"
              value={options.length}
              onChange={(e) => updateOption('length', parseInt(e.target.value) || 4)}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="count" className="text-sm font-medium">
              Quantidade
            </Label>
            <Input
              id="count"
              type="number"
              min="1"
              max="10"
              value={options.count}
              onChange={(e) => updateOption('count', parseInt(e.target.value) || 1)}
              className="mt-1"
            />
          </div>
        </div>

        {/* Character Type Options */}
        <div className="space-y-4">
          <Label className="text-sm font-medium">Tipos de Caracteres</Label>
          
          {/* Numbers */}
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="numbers"
                checked={options.includeNumbers}
                onCheckedChange={(checked) => updateOption('includeNumbers', !!checked)}
              />
              <Label htmlFor="numbers" className="text-sm">Números (0-9)</Label>
            </div>
            {options.includeNumbers && (
              <div className="flex items-center space-x-2">
                <Label className="text-xs text-muted-foreground">Mín:</Label>
                <Input
                  type="number"
                  min="1"
                  max="20"
                  value={options.numbersMin}
                  onChange={(e) => updateOption('numbersMin', parseInt(e.target.value) || 1)}
                  className="w-16 h-8 text-xs"
                />
              </div>
            )}
          </div>

          {/* Uppercase */}
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="uppercase"
                checked={options.includeUppercase}
                onCheckedChange={(checked) => updateOption('includeUppercase', !!checked)}
              />
              <Label htmlFor="uppercase" className="text-sm">Maiúsculas (A-Z)</Label>
            </div>
            {options.includeUppercase && (
              <div className="flex items-center space-x-2">
                <Label className="text-xs text-muted-foreground">Mín:</Label>
                <Input
                  type="number"
                  min="1"
                  max="20"
                  value={options.uppercaseMin}
                  onChange={(e) => updateOption('uppercaseMin', parseInt(e.target.value) || 1)}
                  className="w-16 h-8 text-xs"
                />
              </div>
            )}
          </div>

          {/* Lowercase */}
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="lowercase"
                checked={options.includeLowercase}
                onCheckedChange={(checked) => updateOption('includeLowercase', !!checked)}
              />
              <Label htmlFor="lowercase" className="text-sm">Minúsculas (a-z)</Label>
            </div>
            {options.includeLowercase && (
              <div className="flex items-center space-x-2">
                <Label className="text-xs text-muted-foreground">Mín:</Label>
                <Input
                  type="number"
                  min="1"
                  max="20"
                  value={options.lowercaseMin}
                  onChange={(e) => updateOption('lowercaseMin', parseInt(e.target.value) || 1)}
                  className="w-16 h-8 text-xs"
                />
              </div>
            )}
          </div>

          {/* Special */}
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="special"
                checked={options.includeSpecial}
                onCheckedChange={(checked) => updateOption('includeSpecial', !!checked)}
              />
              <Label htmlFor="special" className="text-sm">Especiais (!@#$%)</Label>
            </div>
            {options.includeSpecial && (
              <div className="flex items-center space-x-2">
                <Label className="text-xs text-muted-foreground">Mín:</Label>
                <Input
                  type="number"
                  min="1"
                  max="20"
                  value={options.specialMin}
                  onChange={(e) => updateOption('specialMin', parseInt(e.target.value) || 1)}
                  className="w-16 h-8 text-xs"
                />
              </div>
            )}
          </div>
        </div>

        {validationError && (
          <div className="text-sm text-destructive bg-destructive/10 p-2 rounded">
            {validationError}
          </div>
        )}

        <Button 
          onClick={handleGenerate} 
          variant="utility" 
          className="w-full"
          disabled={!!validationError}
        >
          Gerar Senha{options.count > 1 ? 's' : ''}
        </Button>

        {passwords.length > 0 && (
          <ResultBox variant="success">
            <div className="space-y-3">
              {passwords.length > 1 && (
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{passwords.length} senhas geradas</span>
                  <Button
                    onClick={copyAllPasswords}
                    variant="outline"
                    size="sm"
                    className="text-xs"
                  >
                    Copiar Todas
                  </Button>
                </div>
              )}
              
              {passwords.map((password, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-background/50 rounded border">
                  <span className="font-mono text-sm break-all flex-1 mr-2">
                    {password}
                  </span>
                  <Button
                    onClick={() => copyToClipboard(password, index)}
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </ResultBox>
        )}
      </div>
    </UtilityCard>
  );
};

export default PasswordGenerator;