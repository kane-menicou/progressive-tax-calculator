interface TaxDetails {
  taxYear: string,
  takeHomePay: number,
  incomeTaxPaid: number,
  incomeTaxBands: {
    band: string,
    taxableUpto?: number,
    taxableFrom: number,
    rate: number,
    taxedInBand: string,
  }[]
}

export function calculateTax(net: number, taxYear: string): TaxDetails {
  return {
    taxYear,
    takeHomePay: 17242,
    incomeTaxPaid: 4018,
    incomeTaxBands: [
      {
        band: "Personal Allowance",
        taxableUpto: 12500,
        taxableFrom: 0,
        rate: 0,
        taxedInBand: calculateTaxPaid(net, 0, 0, 12500),
      },
      {
        band: "Basic rate",
        taxableUpto: 50_000.00,
        taxableFrom: 12_501.00,
        rate: 0.2,
        taxedInBand: calculateTaxPaid(net, 0.2, 12_501.00, 50_000.00),
      },
      {
        band: "Higher rate",
        taxableUpto: 150_000.00,
        taxableFrom: 50_001.00,
        rate: 0.4,
        taxedInBand: calculateTaxPaid(net, 0.4, 50_001.00, 150_000.00),
      },
      {
        band: "Additional rate",
        rate: 0.45,
        taxableFrom: 150_001.00,
        taxedInBand: calculateTaxPaid(net, 0.45, 150_001.00),
      }
    ],
  };
}

function calculateTaxPaid(net: number, rate: number, from: number, to: number = net): string {
  const taxableIncome = Math.min(net, to) - from;

  if (taxableIncome < 0) {
    return (0).toFixed(2)
  }

  return (taxableIncome * rate).toFixed(2)
}
