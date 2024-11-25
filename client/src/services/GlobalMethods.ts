export const formatNumber = (num: number): string => {
  const numStr: string = num.toString();
  let result: string = "";

  for (let i = numStr.length - 1, count = 0; i >= 0; i--, count++) {
    if (count !== 0 && count % 3 === 0) {
      result = "," + result;
    }
    result = numStr[i] + result;
  }

  return result;
};

export const percentageGrowth = (start: number, final: number): string => {
  const value: number = (final - start) / start;
  const percentage: number = value * 100;

  return percentage.toFixed(2);
};

export const isNegative = (numString: string): boolean => {
  const num = parseFloat(numString);
  return !isNaN(num) && num < 0;
};
