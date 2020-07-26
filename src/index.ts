interface TaxDetailsBand {
  band: string,
  taxableUpto?: number,
  taxableFrom: number,
  rate: number,
  taxedInBand: string,
}

interface TaxDetails {
  taxPaid: string,
  bands: TaxDetailsBand[]
}

interface AnnualTaxConfig {
  bands: {
    band: string,
    taxableUpto?: number,
    taxableFrom: number,
    rate: number,
  }[]
}

export function createUk2020To2021NationalInsuranceConfig(categoryLetter: string): AnnualTaxConfig {
  const category = categoryLetter.trim().toUpperCase();

  return {
    bands: [
      {
        band: "£120 to £183 a week",
        taxableUpto: 9_516.51,
        taxableFrom: 0,
        rate: 0,
      },
      {
        band: "£183.01 to £962 a week",
        taxableUpto: 50_024.00,
        taxableFrom: 9_516.52,
        rate: category === 'A' ? 0.12 : 0.0585,
      },
      {
        band: "Over £962 a week",
        taxableFrom: 50_024.00,
        rate: 0.02,
      },
    ]
  };
}

export const uk2020to2021IncomeTaxConfig: AnnualTaxConfig = {
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

export default function calculateAnnualTax(netAnnual: number, config: AnnualTaxConfig): TaxDetails {
  const taxedInBands = config.bands.map(
    ({rate, taxableFrom, taxableUpto}): number => calculateTaxPaid(netAnnual, rate, taxableFrom, taxableUpto)
  );

  const toSumOfValues = (total: number, current: number): number => total + current;

  const incomeTaxPaid = taxedInBands.reduce(toSumOfValues, 0);

  return {
    taxPaid: formatCurrency(incomeTaxPaid),
    bands: config.bands.map((config, index): TaxDetailsBand => ({
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
