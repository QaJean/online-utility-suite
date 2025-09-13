import { useState } from "react";
import { Shuffle, Users, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import UtilityCard from "../UtilityCard";
import ResultBox from "../ResultBox";

const NumberSorter = () => {
  // Number sorting state
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [numberCount, setNumberCount] = useState("1");
  const [numberResults, setNumberResults] = useState<number[]>([]);
  
  // Name sorting state
  const [newName, setNewName] = useState("");
  const [nameList, setNameList] = useState<string[]>([]);
  const [nameCount, setNameCount] = useState("1");
  const [nameResults, setNameResults] = useState<string[]>([]);

  const sortNumbers = () => {
    const minNum = parseInt(min);
    const maxNum = parseInt(max);
    const count = parseInt(numberCount);

    if (isNaN(minNum) || isNaN(maxNum) || minNum >= maxNum || count < 1) {
      toast({
        title: "Erro na validação",
        description: "Verifique os valores inseridos",
        variant: "destructive"
      });
      return;
    }

    const results: number[] = [];
    for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      results.push(randomNumber);
    }
    
    setNumberResults(results);
    toast({
      title: "Números sorteados!",
      description: `${count} número(s) gerado(s)`
    });
  };

  const addName = () => {
    const trimmedName = newName.trim();
    if (!trimmedName) return;
    
    if (nameList.includes(trimmedName)) {
      toast({
        title: "Nome já existe",
        description: "Este nome já está na lista",
        variant: "destructive"
      });
      return;
    }

    setNameList(prev => [...prev, trimmedName]);
    setNewName("");
    toast({
      title: "Nome adicionado",
      description: `${trimmedName} foi adicionado à lista`
    });
  };

  const removeName = (nameToRemove: string) => {
    setNameList(prev => prev.filter(name => name !== nameToRemove));
    toast({
      title: "Nome removido",
      description: `${nameToRemove} foi removido da lista`
    });
  };

  const sortNames = () => {
    const count = parseInt(nameCount);
    
    if (nameList.length < 2) {
      toast({
        title: "Lista insuficiente",
        description: "Adicione pelo menos 2 nomes para sortear",
        variant: "destructive"
      });
      return;
    }

    if (count > nameList.length) {
      toast({
        title: "Quantidade inválida",
        description: "Quantidade não pode ser maior que o total de nomes",
        variant: "destructive"
      });
      return;
    }

    const shuffled = [...nameList].sort(() => Math.random() - 0.5);
    const results = shuffled.slice(0, count);
    
    setNameResults(results);
    toast({
      title: "Nomes sorteados!",
      description: `${count} nome(s) sorteado(s)`
    });
  };

  return (
    <UtilityCard 
      title="Sorteador Inteligente" 
      icon={<Shuffle className="w-5 h-5 text-primary-foreground" />}
    >
      <Tabs defaultValue="numbers" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="numbers" className="flex items-center space-x-2">
            <Shuffle className="w-4 h-4" />
            <span>Números</span>
          </TabsTrigger>
          <TabsTrigger value="names" className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>Nomes</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="numbers" className="space-y-4 mt-4">
          <div className="grid grid-cols-3 gap-3">
            <div>
              <Label htmlFor="min" className="text-sm font-medium">
                Mínimo
              </Label>
              <Input
                id="min"
                type="number"
                value={min}
                onChange={(e) => setMin(e.target.value)}
                placeholder="1"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="max" className="text-sm font-medium">
                Máximo
              </Label>
              <Input
                id="max"
                type="number"
                value={max}
                onChange={(e) => setMax(e.target.value)}
                placeholder="100"
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
                max="50"
                value={numberCount}
                onChange={(e) => setNumberCount(e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          <Button 
            onClick={sortNumbers} 
            variant="utility" 
            className="w-full"
          >
            Sortear {parseInt(numberCount) > 1 ? 'Números' : 'Número'}
          </Button>

          {numberResults.length > 0 && (
            <ResultBox variant="success">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">
                  {numberResults.join(', ')}
                </div>
                <div className="text-sm text-muted-foreground">
                  {numberResults.length} número(s) sorteado(s) entre {min} e {max}
                </div>
              </div>
            </ResultBox>
          )}
        </TabsContent>

        <TabsContent value="names" className="space-y-4 mt-4">
          <div className="space-y-3">
            <div className="flex space-x-2">
              <div className="flex-1">
                <Label htmlFor="newName" className="text-sm font-medium">
                  Adicionar nome
                </Label>
                <Input
                  id="newName"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addName()}
                  placeholder="Digite um nome"
                  className="mt-1"
                />
              </div>
              <div className="flex items-end">
                <Button
                  onClick={addName}
                  variant="outline"
                  size="icon"
                  className="h-10"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {nameList.length > 0 && (
              <div>
                <Label className="text-sm font-medium">
                  Lista de nomes ({nameList.length})
                </Label>
                <div className="mt-2 space-y-2 max-h-40 overflow-y-auto">
                  {nameList.map((name, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-background border rounded">
                      <span className="text-sm">{name}</span>
                      <Button
                        onClick={() => removeName(name)}
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <Label htmlFor="nameCount" className="text-sm font-medium">
                Quantidade para sortear
              </Label>
              <Input
                id="nameCount"
                type="number"
                min="1"
                max={nameList.length}
                value={nameCount}
                onChange={(e) => setNameCount(e.target.value)}
                className="mt-1"
              />
            </div>

            <Button 
              onClick={sortNames}
              variant="utility" 
              className="w-full"
              disabled={nameList.length < 2}
            >
              Sortear {parseInt(nameCount) > 1 ? 'Nomes' : 'Nome'}
            </Button>

            {nameResults.length > 0 && (
              <ResultBox variant="success">
                <div className="text-center">
                  <div className="text-xl font-bold mb-2">
                    {nameResults.map((name, index) => (
                      <div key={index} className="mb-1">
                        🏆 {name}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {nameResults.length} nome(s) sorteado(s) de {nameList.length} disponíveis
                  </div>
                </div>
              </ResultBox>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </UtilityCard>
  );
};

export default NumberSorter;