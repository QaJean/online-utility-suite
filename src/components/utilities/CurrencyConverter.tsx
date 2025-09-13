import { useState } from "react";
import { DollarSign, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCurrencyAPI } from "@/hooks/useCurrencyAPI";
import { toast } from "@/hooks/use-toast";
import UtilityCard from "../UtilityCard";
import ResultBox from "../ResultBox";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("BRL");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState<number | null>(null);
  const { convert, getRate, currencies, loading, error, lastUpdated, refresh } = useCurrencyAPI();

  const convertCurrency = () => {
    const amountNum = parseFloat(amount);
    if (!amountNum || amountNum <= 0) {
      toast({
        title: "Valor inválido",
        description: "Digite um valor válido para converter",
        variant: "destructive"
      });
      return;
    }

    if (fromCurrency === toCurrency) {
      toast({
        title: "Moedas iguais",
        description: "Selecione moedas diferentes para converter",
        variant: "destructive"
      });
      return;
    }

    const convertedAmount = convert(amountNum, fromCurrency, toCurrency);
    setResult(parseFloat(convertedAmount.toFixed(2)));
    
    toast({
      title: "Conversão realizada!",
      description: `${getCurrencySymbol(fromCurrency)}${amountNum.toFixed(2)} = ${getCurrencySymbol(toCurrency)}${convertedAmount.toFixed(2)}`,
    });
  };

  const getCurrencySymbol = (code: string) => {
    return currencies.find(c => c.code === code)?.symbol || code;
  };

  const getCurrencyName = (code: string) => {
    return currencies.find(c => c.code === code)?.name || code;
  };

  const formatLastUpdated = () => {
    if (!lastUpdated) return 'Nunca';
    return lastUpdated.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <UtilityCard 
      title="Conversor de Moedas Inteligente" 
      icon={<DollarSign className="w-5 h-5 text-primary-foreground" />}
    >
      <div className="space-y-6">
        {/* Status and Refresh */}
        <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
          <div>
            <div className="text-sm font-medium">Status da API</div>
            <div className="text-xs text-muted-foreground">
              {error ? 'Usando taxas aproximadas' : 'Cotações atualizadas'}
            </div>
            <div className="text-xs text-muted-foreground">
              Última atualização: {formatLastUpdated()}
            </div>
          </div>
          <Button
            onClick={refresh}
            variant="outline"
            size="sm"
            disabled={loading}
            className="h-8"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </Button>
        </div>

        {/* Amount Input */}
        <div>
          <Label htmlFor="amount" className="text-sm font-medium">
            Valor a converter
          </Label>
          <Input
            id="amount"
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Digite o valor"
            className="mt-1"
          />
        </div>

        {/* Currency Selectors */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-sm font-medium">De</Label>
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((currency) => (
                  <SelectItem key={currency.code} value={currency.code}>
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs">{currency.code}</span>
                      <span className="text-sm">{currency.symbol}</span>
                      <span className="text-xs text-muted-foreground truncate">
                        {currency.name}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-sm font-medium">Para</Label>
            <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((currency) => (
                  <SelectItem key={currency.code} value={currency.code}>
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs">{currency.code}</span>
                      <span className="text-sm">{currency.symbol}</span>
                      <span className="text-xs text-muted-foreground truncate">
                        {currency.name}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button 
          onClick={convertCurrency} 
          variant="utility" 
          className="w-full"
          disabled={loading || !amount || parseFloat(amount) <= 0}
        >
          {loading ? 'Convertendo...' : 'Converter'}
        </Button>

        {result !== null && (
          <ResultBox variant="success">
            <div className="space-y-3">
              {/* Main Conversion */}
              <div className="text-center">
                <div className="text-sm text-muted-foreground">
                  {getCurrencyName(fromCurrency)}
                </div>
                <div className="text-xl font-bold">
                  {getCurrencySymbol(fromCurrency)} {parseFloat(amount).toFixed(2)}
                </div>
              </div>
              
              <div className="text-center text-2xl">↓</div>
              
              <div className="text-center">
                <div className="text-sm text-muted-foreground">
                  {getCurrencyName(toCurrency)}
                </div>
                <div className="text-2xl font-bold text-primary">
                  {getCurrencySymbol(toCurrency)} {result.toFixed(2)}
                </div>
              </div>

              {/* Exchange Rate Info */}
              <div className="border-t pt-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Taxa de câmbio:</span>
                  <span className="font-medium">
                    1 {fromCurrency} = {getRate(fromCurrency, toCurrency).toFixed(4)} {toCurrency}
                  </span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Taxa inversa:</span>
                  <span className="font-medium">
                    1 {toCurrency} = {getRate(toCurrency, fromCurrency).toFixed(4)} {fromCurrency}
                  </span>
                </div>
                
                {error && (
                  <div className="text-xs text-orange-600 bg-orange-50 p-2 rounded mt-2">
                    ⚠️ {error}
                  </div>
                )}
              </div>
            </div>
          </ResultBox>
        )}
      </div>
    </UtilityCard>
  );
};

export default CurrencyConverter;