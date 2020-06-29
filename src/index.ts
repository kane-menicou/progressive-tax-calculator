type TaxYear = "2020/2021";

interface Result {
  taxYear: TaxYear;
  takeHomePay: number;
  nationalInsuranceContribution: number;
  incomeTaxPaid: number;
  incomeTaxBands: {
    band: string;
    taxableUpto?: number;
    taxableFrom: number;
    rate: number;
    spentInBand: number;
  }[];
}

const config = {
  "2020/2021": {
    bands: [
      {
        band: "Personal Allowance",
        from: 0,
        taxableUpto: 12500,
        taxableFrom: 0,
        rate: 0
      },
      {
        band: "Basic rate",
        taxableUpto: 50000,
        taxableFrom: 12500.01,
        rate: 0.20
      },
      {
        band: "Higher rate",
        taxableUpto: 150000,
        taxableFrom: 50000.01,
        rate: 0.40
      },
      {
        band: "Additional rate",
        taxableFrom: 150000.01,
        rate: 0.45
      }
    ]
  }
};

export function getIncomeTax(gross: number, taxYear: TaxYear): Result {
  const incomeTaxBands = config[taxYear].bands.map((config) => {
    return ({
      ...config,
      spentInBand: calculateTaxForBand(gross, config.taxableFrom, config.taxableUpto, config.rate)
    });
  });

  let incomeTaxPaid = 0;
  incomeTaxBands.forEach(({spentInBand}) => {
    incomeTaxPaid += spentInBand;
  });

}

function calculateTaxForBand(gross: number, min: number, max: number, rate: number): number {
  const taxableIncome = gross >= max ? max : gross - min;

  return taxableIncome * rate;
}
