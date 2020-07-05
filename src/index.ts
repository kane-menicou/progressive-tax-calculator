enum TaxYear {
  "2020/2021"
}

interface Result {
  taxYear: TaxYear;
  takeHomePay: string;
  // nationalInsuranceContribution: number;
  incomeTaxPaid: string;
  incomeTaxBands: {
    band: string;
    taxableUpto?: string;
    taxableFrom: string;
    rate: string;
    taxedInBand: string;
  }[];
}

const config = {
  "2020/2021": {
    bands: [
      {
        band: "Personal Allowance",
        taxableFrom: 0,
        taxableUpto: 12500,
        rate: 0
      },
      {
        band: "Basic rate",
        taxableFrom: 12501,
        taxableUpto: 50000,
        rate: 0.20
      },
      {
        band: "Higher rate",
        taxableFrom: 50000.01,
        taxableUpto: 150000,
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
      taxedInBand: calculateTaxForBand(gross, config.taxableFrom, config.taxableUpto, config.rate)
    });
  });

  let incomeTaxPaid = 0;
  incomeTaxBands.forEach(({taxedInBand}) => {
    incomeTaxPaid += taxedInBand;
  });


  return {
    taxYear,
    incomeTaxPaid: incomeTaxPaid.toString(),
    takeHomePay: (gross - incomeTaxPaid).toString(),
    incomeTaxBands
  };
}

function calculateTaxForBand(gross: number, min: number, max: number, rate: number): number {
  if (gross < min) {
    return 0;
  }

  let taxableIncome: number;

  if (gross >= max) {
    taxableIncome = max;
  } else {
    taxableIncome = gross - min;
  }

  return taxableIncome * rate;
}
