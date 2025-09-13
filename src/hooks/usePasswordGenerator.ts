import { useState } from 'react';

export interface PasswordOptions {
  length: number;
  count: number;
  includeNumbers: boolean;
  numbersMin: number;
  includeUppercase: boolean;
  uppercaseMin: number;
  includeLowercase: boolean;
  lowercaseMin: number;
  includeSpecial: boolean;
  specialMin: number;
}

const DEFAULT_OPTIONS: PasswordOptions = {
  length: 12,
  count: 1,
  includeNumbers: true,
  numbersMin: 1,
  includeUppercase: true,
  uppercaseMin: 1,
  includeLowercase: true,
  lowercaseMin: 1,
  includeSpecial: true,
  specialMin: 1
};

export const usePasswordGenerator = () => {
  const [options, setOptions] = useState<PasswordOptions>(DEFAULT_OPTIONS);
  
  const updateOption = <K extends keyof PasswordOptions>(key: K, value: PasswordOptions[K]) => {
    setOptions(prev => ({ ...prev, [key]: value }));
  };

  const validateOptions = (): string | null => {
    const { length, numbersMin, uppercaseMin, lowercaseMin, specialMin } = options;
    const { includeNumbers, includeUppercase, includeLowercase, includeSpecial } = options;
    
    let totalMin = 0;
    if (includeNumbers) totalMin += numbersMin;
    if (includeUppercase) totalMin += uppercaseMin;
    if (includeLowercase) totalMin += lowercaseMin;
    if (includeSpecial) totalMin += specialMin;
    
    if (totalMin > length) {
      return `A soma das quantidades mínimas (${totalMin}) não pode exceder o comprimento total (${length})`;
    }
    
    if (!includeNumbers && !includeUppercase && !includeLowercase && !includeSpecial) {
      return 'Selecione pelo menos um tipo de caractere';
    }
    
    return null;
  };

  const generatePasswords = (): string[] => {
    const validation = validateOptions();
    if (validation) throw new Error(validation);
    
    const passwords: string[] = [];
    
    for (let i = 0; i < options.count; i++) {
      passwords.push(generateSinglePassword());
    }
    
    return passwords;
  };

  const generateSinglePassword = (): string => {
    const numbers = '0123456789';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const special = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let result = '';
    let availableChars = '';
    
    // Add required minimums
    if (options.includeNumbers) {
      for (let i = 0; i < options.numbersMin; i++) {
        result += numbers[Math.floor(Math.random() * numbers.length)];
      }
      availableChars += numbers;
    }
    
    if (options.includeUppercase) {
      for (let i = 0; i < options.uppercaseMin; i++) {
        result += uppercase[Math.floor(Math.random() * uppercase.length)];
      }
      availableChars += uppercase;
    }
    
    if (options.includeLowercase) {
      for (let i = 0; i < options.lowercaseMin; i++) {
        result += lowercase[Math.floor(Math.random() * lowercase.length)];
      }
      availableChars += lowercase;
    }
    
    if (options.includeSpecial) {
      for (let i = 0; i < options.specialMin; i++) {
        result += special[Math.floor(Math.random() * special.length)];
      }
      availableChars += special;
    }
    
    // Fill remaining length with random characters from available sets
    const remainingLength = options.length - result.length;
    for (let i = 0; i < remainingLength; i++) {
      result += availableChars[Math.floor(Math.random() * availableChars.length)];
    }
    
    // Shuffle the password
    return result.split('').sort(() => Math.random() - 0.5).join('');
  };

  return {
    options,
    updateOption,
    validateOptions,
    generatePasswords
  };
};