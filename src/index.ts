interface TaxDetailsBand {
  band: string,
  taxableUpto?: number,
  taxableFrom: number,
  rate: number,
  taxedInBand: string,
}

interface TaxDetails {
  takeHomePay: string,
  incomeTaxPaid: string,
  incomeTaxBands: TaxDetailsBand[]
}

interface TaxConfig {
  bands: {
    band: string,
    taxableUpto?: number,
    taxableFrom: number,
    rate: number,
  }[]
}

export const uk2020to2021IncomeTaxConfig: TaxConfig = {
  bands: [
    {
      band: "Personal Allowance",
      taxableUpto: 12500,
      taxableFrom: 0,
      rate: 0,
    },
    {
      band: "Basic rate",
      taxableUpto: 50_000.00,
      taxableFrom: 12_501.00,
      rate: 0.2,
    },
    {
      band: "Higher rate",
      taxableUpto: 150_000.00,
      taxableFrom: 50_001.00,
      rate: 0.4,
    },
    {
      band: "Additional rate",
      rate: 0.45,
      taxableFrom: 150_001.00,
    }
  ]
};

export default function calculateTax(net: number, config: TaxConfig): TaxDetails {
  const taxedInBands = config.bands.map(
    ({rate, taxableFrom, taxableUpto}): number => calculateTaxPaid(net, rate, taxableFrom, taxableUpto)
  );

  const toSumOfValues = (total: number, current: number): number => total + current;

  const incomeTaxPaid = taxedInBands.reduce(toSumOfValues, 0);

  const takeHomePay = formatCurrency(net - incomeTaxPaid);

  return {
    takeHomePay,
    incomeTaxPaid: formatCurrency(incomeTaxPaid),
    incomeTaxBands: config.bands.map((config, index): TaxDetailsBand => ({
      ...config,
      taxedInBand: formatCurrency(taxedInBands[index])
    }))
  };
}

function calculateTaxPaid(net: number, rate: number, from: number, to: number = net): number {
  const taxableIncome = Math.min(net, to) - from;

  if (taxableIncome < 0) {
    return 0;
  }

  return taxableIncome * rate;
}

function formatCurrency(number: number): string {
  return number.toFixed(2);
}
