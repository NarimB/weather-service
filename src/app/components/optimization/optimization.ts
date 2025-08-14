function performComplexCalculation(num: number): number {
  return num * num;
}

function processLargeData(nums: number[]): number[] {
  return nums.map((n) => performComplexCalculation(n));
}

const largeData = Array.from({ length: 10000 }, (_, i) => i);
console.log(processLargeData(largeData));

//////////////////////////////////////////////////////////////////////////

async function performComplexCalculationAsync(num: number): Promise<number> {
  return new Promise((resolve) => resolve(num * num));
}

async function processLargeDataAsync(nums: number[]): Promise<number[]> {
  const results = await Promise.all(nums.map((n) => performComplexCalculationAsync(n)));
  return results;
}

const largeData1 = Array.from({ length: 10000 }, (_, i) => i);
processLargeDataAsync(largeData).then(console.log);
