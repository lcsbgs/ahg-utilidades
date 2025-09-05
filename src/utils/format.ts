/**
 * Formata um número para exibição como moeda
 * @param value Valor a ser formatado
 * @returns String formatada (ex: 10.5 -> "10,50")
 */
export const formatCurrency = (value: number): string => {
  return value.toFixed(2).replace('.', ',');
};
